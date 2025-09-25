#!/usr/bin/env node
// Deep research using OpenAI Responses API (JSON text format) + optional web_search_preview
// Usage: node scripts/deepresearch-openai.js [--route /payment/visa] [--web]

import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import OpenAI from "openai";
import { z } from "zod";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ----- your original helpers, adapted to ESM -----
function readSources() {
  const txt = fs.readFileSync(path.join(process.cwd(), "content", "sources.yml"), "utf8");
  const pages = [];
  let cur = null;
  for (const raw of txt.split(/\r?\n/)) {
    const line = raw.trimEnd();
    if (line.startsWith("pages:")) continue;
    if (/^\s*-\s+route:/.test(line)) {
      if (cur) pages.push(cur);
      cur = {}; cur.banner = { menu: [] };
      cur.route = line.replace(/^\s*-\s+route:\s*/, "").trim();
      continue;
    }
    if (!cur) continue;
    const m = line.match(/^\s*(url|type):\s*(.*)$/);
    if (m) { cur[m[1]] = m[2].trim(); continue; }
  }
  if (cur) pages.push(cur);
  return pages;
}

function loadRawMd(route) {
  const safe = route.replace(/\//g, "_").replace(/^_/, "");
  const file = path.join(process.cwd(), "content", "raw", `${safe}.md`);
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function writeResearch(route, json) {
  const dir = path.join(process.cwd(), "content", "research");
  fs.mkdirSync(dir, { recursive: true });
  const slug = route.split("/").filter(Boolean).pop();
  const file = path.join(dir, `${slug}.json`);
  fs.writeFileSync(file, JSON.stringify(json, null, 2), "utf8");
  console.log("wrote", file);
}

// ----- schema & prompt builders -----
const ResearchSchema = z.object({
  topic: z.string(),
  keyFindings: z.array(z.string()),
  practicalTips: z.array(z.string()),
  feesAndLimits: z.array(z.object({ item: z.string(), value: z.string() })),
  comparisons: z.array(z.object({ against: z.string(), summary: z.string() })),
  risksAndCompliance: z.array(z.string()),
  references: z.array(z.object({ title: z.string(), url: z.string().url() })),
});

function buildInputs(route, url, scraped) {
  const system = `You are a domain expert producing a concise research dossier (Japanese) to inform a new page about online casino payments.
- Find and cite up-to-date, authoritative sources via web search.
- Extract fee/limit patterns, typical KYC/3DS flows, pros/cons, comparisons, and compliance risks.
- Output must strictly match the provided schema.`;

  const user = `Route: ${route}
Primary source (local scrape; may be partial/outdated):
---
${scraped.slice(0, 20000)}
---
Instructions:
- Prefer current information you find via web search; use the scrape only as context.
- Return JSON in Japanese.`;

  return { system, user };
}

async function runDeepResearch({ model, system, user, enableWeb, route }) {
  const tools = enableWeb ? [{ type: "web_search_preview" }] : [];

  const req = {
    model: model || process.env.OPENAI_MODEL || "gpt-4o-mini",
    input: [
      { role: "developer", content: [{ type: "input_text", text: system }] },
      { role: "user", content: [{ type: "input_text", text: user }] },
    ],
    tools,
  };
  if (!enableWeb) {
    req.text = { format: { type: "json_object" } };
  }
  const resp = await client.responses.create(req);

  // Extract JSON string from response
  const text = resp.output_text
    ?? (resp.output?.[0]?.content?.[0]?.text ?? "");
  // Strip code fences if the model wrapped JSON
  const fenced = text.match(/```(?:json)?\n([\s\S]*?)```/);
  const jsonStr = fenced ? fenced[1] : text;
  let parsed;
  try {
    parsed = JSON.parse(jsonStr);
  } catch (e) {
    throw new Error(`Failed to parse JSON from Responses API: ${e.message}\nRaw: ${text.slice(0, 500)}`);
  }
  // Validate against expected schema (best-effort)
  const result = ResearchSchema.safeParse(parsed);
  if (result.success) return result.data;
  console.warn('Deep research JSON did not match schema. Writing fallback with raw payload. Issues:', result.error.issues?.length || 0);
  return {
    topic: route || '',
    keyFindings: [],
    practicalTips: [],
    feesAndLimits: [],
    comparisons: [],
    risksAndCompliance: [],
    references: [],
    raw: parsed,
  };
}

async function main() {
  const args = process.argv.slice(2);
  const routeArg = args.includes("--route") ? args[args.indexOf("--route") + 1] : null;
  const doWeb = args.includes("--web"); // when omitted, runs without web tool

  const sources = readSources();
  for (const entry of sources) {
    if (routeArg && entry.route !== routeArg) continue;
    const scraped = loadRawMd(entry.route);
    if (!scraped) { console.warn("No raw MD for", entry.route, "- run scripts/scrape.js"); continue; }

    const { system, user } = buildInputs(entry.route, entry.url, scraped);
    const dossier = await runDeepResearch({
      model: process.env.OPENAI_MODEL, system, user, enableWeb: doWeb, route: entry.route
    });

    writeResearch(entry.route, dossier);
  }
}

main().catch(err => { console.error(err); process.exit(1); });

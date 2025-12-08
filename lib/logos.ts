// Helper functions for casino logo management

/**
 * Generate logo URL for a given casino review slug
 * Tries PNG first, then JPG, with fallback to null
 */
export function getCasinoLogoUrl(slug: string): string | null {
  if (!slug) return null;

  // Check if we're in browser environment to avoid SSR issues
  const baseUrl = typeof window !== 'undefined' ? '' : process.env.NEXT_PUBLIC_SITE_ORIGIN || '';

  // Convert slug to expected filename format
  // Most casino logos follow the slug pattern but with some exceptions
  const logoName = getLogoFileName(slug);

  if (!logoName) return null;

  // Return PNG path (most common format in your assets)
  // Browser will handle 404 gracefully, server-side we trust the file exists
  return `${baseUrl}/assets/casino/${logoName}.png`;
}

/**
 * Generate logo alt text for accessibility
 */
export function getCasinoLogoAlt(slug: string, casinoName?: string): string {
  if (casinoName) {
    return `${casinoName}のロゴ`;
  }

  // Fallback to slug-based alt text
  const displayName = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return `${displayName}のロゴ`;
}

/**
 * Map review slugs to actual logo file names
 * Based on the actual files in /public/assets/casino/
 */
function getLogoFileName(slug: string): string | null {
  // Direct mappings based on actual logo files in assets/casino/
  const logoMappings: Record<string, string> = {
    '10bet': '10bet',
    '1win': '1win',
    '21-com': '21com',
    '2up': '2up',
    '7spin': '7spin', // May need to check if exists
    'aloha-shark': 'aloha-shark',
    'bc-game': 'bcgame',
    'betgoat': 'betgoat',
    'betpanda': 'betpanda',
    'betrebels': 'betrebels',
    'bets-io': 'betsio',
    'betswap': 'betswap',
    'bettiilt': 'bettiilt', // May need to check if exists
    'bettilt': 'bettilt', // May need to check if exists
    'big-wins': 'big-wins',
    'bitcasino-io': 'bitcasinoio',
    'bitz': 'bitz',
    'bons': 'bonscom',
    'caibo': 'caibofun',
    'casino-gods': 'casino-gods', // May need to check if exists
    'casino-me': 'casino-me',
    'casino-secret': 'casino-secret',
    'casino-sky': 'casino-sky',
    'casino-x': 'casino-x',
    'casinoleo': 'casinoleo', // May need to check if exists
    'casumo': 'casumo',
    'cloudbet': 'cloudbet',
    'conquestador': 'conquestador',
    'cosmowin': 'cosmoswin',
    'cybet': 'cybet',
    'dafabet': 'dafabet',
    'duelbits': 'duelbits',
    'eldoah': 'eldoah-casino',
    'energy-casino': 'energy-casino',
    'fresh-casino': 'fresh-casino',
    'futocasino': 'futocasino', // May need to check if exists
    'gambola-casino': 'gambola',
    'gamdom': 'gamdom',
    'gohog': 'gohog',
    'hunny-play': 'hunny-play', // May need to check if exists
    'intercasino': 'intercasino',
    'joy-casino': 'joy-casino',
    'just-spin': 'justspin',
    'k8': 'k8',
    'kakeyo': 'kakeyo',
    'katsuwin': 'katsuwin',
    'king-of-sport': 'king-of-sport', // May need to check if exists
    'konibet': 'konibet',
    'lilibet': 'lilibet',
    'live-casino-house': 'live-casino-house',
    'livecasino-io': 'livecasino-io', // May need to check if exists
    'lucky-block': 'lucky-block',
    'lucky-bull': 'lucky-bull',
    'lucky-casino': 'lucky-casino', // May need to check if exists
    'lynx-bet': 'lynx-bet', // May need to check if exists
    'mega-dice': 'mega-dice',
    'miki': 'miki',
    'mint-io': 'mint-io', // May need to check if exists
    'miracle-casino': 'miracle-casino',
    'mystino': 'mystino',
    'netbet': 'netbet', // May need to check if exists
    'pachipachi': 'pachipachi',
    'parimatch': 'parimatch',
    'playojo': 'playojo',
    'pokerstars': 'pokerstars-poker',
    'queen-casino': 'queen-casino',
    'ramenbet': 'ramenbet',
    'respin': 'respin',
    'roobet': 'roobet',
    'royal-vegas': 'royal-vegas', // May need to check if exists
    'shinobibet': 'shinobibet',
    'shuffle': 'shuffle',
    'snatch-casino': 'snatch-casino',
    'sportsbet-io': 'sportsbetio',
    'stake': 'stake',
    'sushi-casino': 'sushi-casino',
    'ted-bet': 'tedbet',
    'vera-john': 'vera-john',
    'trustdice': 'trustdice',
    'wazamba': 'wazamba',
    'william-hill': 'william-hill',
    'winunique': 'winunique',
    'winz.io': 'winz',
    'wonder-casino': 'wonder-casino',
    'wsm-casino': 'wsm-casino',
    // Additional logos found in assets but not in current review set
    'bitstarz': 'bitstarz',
    'casino-days': 'casinodays',
    'casino-in': 'casinoin',
    'casitabi': 'casitabi',
    'empire777': 'empire777',
    'empire-io': 'empireio',
    'flush-casino': 'flush-casino',
    'golden-panda': 'golden-panda',
    'ohmyspins': 'ohmyspins',
    'pinnacle': 'pinnacle',
  };

  return logoMappings[slug] || null;
}

/**
 * Get high-resolution logo URL for Open Graph and schema markup
 */
export function getCasinoLogoHighRes(slug: string): string | null {
  const logoName = getLogoFileName(slug);
  if (!logoName) return null;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_ORIGIN || '';

  // Try JPG first for high-res (usually larger files)
  return `${baseUrl}/assets/casino/${logoName}.jpg`;
}

/**
 * Preload logo image for better performance
 * Use this in components where logo is critical above-the-fold content
 */
export function preloadCasinoLogo(slug: string): void {
  if (typeof window === 'undefined') return;

  const logoUrl = getCasinoLogoUrl(slug);
  if (!logoUrl) return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = logoUrl;
  document.head.appendChild(link);
}

/**
 * Convert external image URLs to local public folder paths
 * Handles casinotsu.com, japanesecasino.com, and other external URLs
 */
export function getLocalImageUrl(imageUrl: string | undefined): string | null {
  if (!imageUrl) return null;

  // If it's already a local path (starts with /), return as is
  if (imageUrl.startsWith('/')) {
    return imageUrl;
  }

  // Extract filename from external URLs
  // Handles: https://casinotsu.com/images/1win_960x495.png
  //          https://www.casinotsu.com/wp-content/uploads/yuugado_300x150-2x-2.png
  //          https://japanesecasino.com/images/banner.png
  try {
    const url = new URL(imageUrl);
    const pathname = url.pathname;
    const filename = pathname.split('/').pop();

    if (!filename) return null;

    // Store bonus/offer images in /public/images/bonuses/
    return `/images/bonuses/${filename}`;
  } catch (error) {
    // If URL parsing fails, try to extract filename from path
    const parts = imageUrl.split('/');
    const filename = parts[parts.length - 1];
    return filename ? `/images/bonuses/${filename}` : null;
  }
}
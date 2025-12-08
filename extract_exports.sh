#!/bin/bash

for file in content/data/bonuses/*.tsx; do
  basename=$(basename "$file" .tsx)
  exportname=$(grep "^export const" "$file" | sed 's/export const //; s/: BonusPageContent.*//' | tr -d ' ')
  echo "${basename}:${exportname}"
done | sort

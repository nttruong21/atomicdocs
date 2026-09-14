import type { Configuration } from 'lint-staged'

const config: Configuration = {
  '*.{js,jsx,ts,tsx,mjs,cjs,mts,cts,json,jsonc,css}': [
    'bun run fix',
    'bun run check',
  ],
}

export default config

import type { Configuration } from 'lint-staged'

const config: Configuration = {
  '**/*.{js,jsx,ts,tsx,json,jsonc,css,scss,md,mdx}': ['bun run check'],
}

export default config

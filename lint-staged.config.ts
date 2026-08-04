import type { Configuration } from 'lint-staged'

const config: Configuration = {
  '**/*': ['bun run fix', 'bun run check'],
}

export default config

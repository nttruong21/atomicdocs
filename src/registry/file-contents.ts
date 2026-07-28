import { readFileSync } from 'node:fs'

export const fileContents: Record<
  string,
  Record<string, Record<string, () => string>>
> = {
  atoms: {
    accordion: {
      basic: () =>
        readFileSync(
          'src/registry/atoms/accordion/examples/basic.tsx',
          'utf-8'
        ),
    },
  },
}

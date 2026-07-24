import { defineConfig } from 'oxfmt'
import ultracite from 'ultracite/oxfmt'

export default defineConfig({
  ...ultracite,
  jsxSingleQuote: true,
  semi: false,
  singleQuote: true,
  sortImports: {
    ignoreCase: true,
    newlinesBetween: false,
    order: 'asc',
  },
  sortTailwindcss: true,
})

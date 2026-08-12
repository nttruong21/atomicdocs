import { defineConfig } from 'oxlint'
import core from 'ultracite/oxlint/core'
import react from 'ultracite/oxlint/react'
import tanstack from 'ultracite/oxlint/tanstack'
import vitest from 'ultracite/oxlint/vitest'

export default defineConfig({
  extends: [core, react, tanstack, vitest],
  ignorePatterns: core.ignorePatterns,
  rules: {
    'func-style': 'off',
    'import/consistent-type-specifier-style': 'off',
    'no-unused-vars': ['warn', { fix: { imports: 'safe-fix' } }],
    'no-use-before-define': 'off',
    'no-warning-comments': 'off',
    'sort-keys': 'off',
    'arrow-body-style': 'off',
    'react/hook-use-state': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-handler-names': 'off',
  },
})

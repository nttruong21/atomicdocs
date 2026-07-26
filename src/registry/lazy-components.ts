// This file is auto-generated — do not edit directly.
// Run `bun run gen-lazy-components` to regenerate.

import { lazy } from 'react'

export const registryLazyComponents: Record<
  string,
  Record<string, Record<string, ReturnType<typeof lazy>>>
> = {
  atoms: {
    accordion: {
      basic: lazy(async () => {
        const m = await import('@/registry/atoms/accordion/examples/basic')
        return { default: m.AccordionBasic }
      }),
      borders: lazy(async () => {
        const m = await import('@/registry/atoms/accordion/examples/borders')
        return { default: m.AccordionBorders }
      }),
      card: lazy(async () => {
        const m = await import('@/registry/atoms/accordion/examples/card')
        return { default: m.AccordionCard }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/accordion/examples/demo')
        return { default: m.AccordionDemo }
      }),
      disabled: lazy(async () => {
        const m = await import('@/registry/atoms/accordion/examples/disabled')
        return { default: m.AccordionDisabled }
      }),
      multiple: lazy(async () => {
        const m = await import('@/registry/atoms/accordion/examples/multiple')
        return { default: m.AccordionMultiple }
      }),
    },
  },
}

import { readFileSync } from 'node:fs'
import { createServerFn, useServerFn } from '@tanstack/react-start'
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock'
import { type lazy, Suspense, use, useState } from 'react'
import z from 'zod'
import { Card, CardContent } from '@/components/atoms/card'
import { Spinner } from '@/components/atoms/spinner'
import { cn } from '@/lib/utils'
import { registryLazyComponents } from '@/registry/lazy-components'

// Create a cache to store component instances
const componentCache = new Map<string, ReturnType<typeof lazy>>()

/**
 * Parse a registry path like "registry/atoms/accordion/examples/basic"
 * into { group, component, example }.
 */
function parseComponentPath(
  path: string
): { group: string; component: string; example: string } | null {
  const [group, component, , example] = path.split('/')
  // Expected format: <group>/<component>/examples/<example>
  if (!group || !component || !example) {
    return null
  }
  return {
    group,
    component,
    example,
  }
}

export const getComponent = (path: string) => {
  // Check if component is already in cache
  if (componentCache.has(path)) {
    return componentCache.get(path)
  }

  const parsed = parseComponentPath(path)
  if (!parsed) {
    console.warn(`Invalid component path format: ${path}`)
    return null
  }

  const { group, component, example } = parsed

  // Look up the pre-generated lazy component from the map
  const lazyComponent = registryLazyComponents[group]?.[component]?.[example]

  if (lazyComponent) {
    componentCache.set(path, lazyComponent)
  }

  return lazyComponent ?? null
}

// Extract file content
export const extractFileContentFn = createServerFn()
  .validator(
    z.object({
      path: z.string().trim(),
    })
  )
  .handler(({ data }) => {
    const { path } = data
    try {
      const fileContent = readFileSync(`src/registry/${path}.tsx`, 'utf-8')
      return fileContent
    } catch (error) {
      console.log(error)
      return null
    }
  })

export interface FileContentProps {
  fileContentPromise: ReturnType<typeof extractFileContentFn>
}

export function FileContent({ fileContentPromise }: FileContentProps) {
  const fileContent = use(fileContentPromise)

  if (fileContent) {
    return (
      <DynamicCodeBlock
        lang='tsx'
        code={fileContent}
        codeblock={{
          'data-line-numbers': true,
          className:
            'border-none [&_div[role=region]]:px-2 [&_div[role=region]]:py-4',
        }}
      />
    )
  }

  return <div className='p-6 text-center'>File not found</div>
}

export interface ComponentPreviewProps {
  path: string
  className?: string
}

export function ComponentPreview({ path, className }: ComponentPreviewProps) {
  const [Component] = useState(() => getComponent(path))
  const extractFileContent = useServerFn(extractFileContentFn)
  const fileContentPromise = extractFileContent({ data: { path } })

  if (Component) {
    return (
      <Card className={cn('overflow-hidden p-0', className)}>
        <CardContent className='p-0'>
          <div className='bg-background text-foreground border-b'>
            <div className='not-prose component-container flex min-h-96 items-center justify-center p-6'>
              <Suspense fallback={<Spinner className='mx-auto' />}>
                <Component />
              </Suspense>
            </div>
          </div>

          <Suspense
            fallback={
              <div className='p-6'>
                <Spinner className='mx-auto' />
              </div>
            }
          >
            <FileContent fileContentPromise={fileContentPromise} />
          </Suspense>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className='p-6 text-center'>
      Component not found for path: <code>{path}</code>. Make sure to run{' '}
      <code>bun run gen-lazy-components</code> after adding new registry
      examples.
    </div>
  )
}

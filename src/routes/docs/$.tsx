import { createFileRoute, notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import browserCollections from 'collections/browser'
import { useFumadocsLoader } from 'fumadocs-core/source/client'
import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page'
import { Suspense } from 'react'
import { Separator } from '@/components/atoms/separator'
import { getMDXComponents } from '@/components/mdx'
import { baseOptions } from '@/lib/layout.shared'
import { encodeMarkdownUrl, githubRepoUrl } from '@/lib/shared'
import { source } from '@/lib/source'

export const Route = createFileRoute('/docs/$')({
  component: Page,
  loader: async ({ params }) => {
    const slugs = params._splat?.split('/') ?? []
    const data = await serverLoader({ data: slugs })
    await clientLoader.preload(data.path)
    return data
  },
})

const serverLoader = createServerFn({
  method: 'GET',
})
  .validator((slugs: string[]) => slugs)
  .handler(async ({ data: slugs }) => {
    const page = source.getPage(slugs)
    if (!page) {
      throw notFound()
    }

    return {
      path: page.path,
      markdownUrl: encodeMarkdownUrl(page.slugs, page.locale),
      pageTree: await source.serializePageTree(source.getPageTree()),
    }
  })

const clientLoader = browserCollections.docs.createClientLoader({
  component(
    { toc, frontmatter, default: Mdx },
    // you can define props for the component
    {
      markdownUrl,
      path,
    }: {
      markdownUrl: string
      path: string
    }
  ) {
    return (
      <DocsPage toc={toc} className='gap-6'>
        <div className='flex flex-col gap-4'>
          <DocsTitle>{frontmatter.title}</DocsTitle>
          <DocsDescription className='mb-0'>
            {frontmatter.description}
          </DocsDescription>
        </div>
        <div className='flex flex-row items-center gap-2'>
          <MarkdownCopyButton markdownUrl={markdownUrl} />
          <ViewOptionsPopover
            markdownUrl={markdownUrl}
            githubUrl={`${githubRepoUrl}/content/docs/${path}`}
          />
        </div>
        <Separator />
        <DocsBody>
          <Mdx components={getMDXComponents()} />
        </DocsBody>
      </DocsPage>
    )
  },
})

function Page() {
  const { path, pageTree, markdownUrl } = useFumadocsLoader(
    Route.useLoaderData()
  )

  return (
    <DocsLayout {...baseOptions} tree={pageTree}>
      <Suspense>
        {clientLoader.useContent(path, { markdownUrl, path })}
      </Suspense>
    </DocsLayout>
  )
}

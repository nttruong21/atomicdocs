import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'
import { RootProvider } from 'fumadocs-ui/provider/tanstack'
import type { ReactNode } from 'react'
import { appName } from '@/lib/shared'
import appCss from '@/styles/app.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: appName,
      },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  shellComponent: RootComponent,
})

function RootComponent({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <RootProvider>{children}</RootProvider>
        <Scripts />
      </body>
    </html>
  )
}

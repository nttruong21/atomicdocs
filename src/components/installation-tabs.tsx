import {
  CodeBlockTab,
  CodeBlockTabs,
  CodeBlockTabsList,
  CodeBlockTabsTrigger,
} from 'fumadocs-ui/components/codeblock'
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock'
import { siteUrl } from '@/lib/shared'

const packageManagers = ['bun', 'pnpm', 'npm', 'yarn'] as const

type PackageManager = (typeof packageManagers)[number]

const commandPrefixes: Record<PackageManager, string> = {
  bun: 'bunx --bun',
  npm: 'npx',
  pnpm: 'pnpm dlx',
  yarn: 'yarn',
}

interface InstallationTabsProps {
  name: string
}

export function InstallationTabs({ name }: InstallationTabsProps) {
  const commands = packageManagers.map((packageManager) => ({
    packageManager,
    content: `${commandPrefixes[packageManager]} shadcn@latest add ${siteUrl}/r/${name}.json`,
  }))

  return (
    <CodeBlockTabs defaultValue={packageManagers[0]}>
      <CodeBlockTabsList>
        {packageManagers.map((packageManager) => (
          <CodeBlockTabsTrigger key={packageManager} value={packageManager}>
            {packageManager}
          </CodeBlockTabsTrigger>
        ))}
      </CodeBlockTabsList>

      {commands.map((command) => (
        <CodeBlockTab
          key={command.packageManager}
          value={command.packageManager}
        >
          <DynamicCodeBlock lang='bash' code={command.content} />
        </CodeBlockTab>
      ))}
    </CodeBlockTabs>
  )
}

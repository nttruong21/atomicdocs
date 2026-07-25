import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { appName, githubRepoUrl } from './shared'

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: appName,
    },
    githubUrl: githubRepoUrl,
  }
}

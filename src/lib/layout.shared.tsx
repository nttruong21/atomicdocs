import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared'
import { appName, githubRepoUrl } from './shared'

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: appName,
  },
  githubUrl: githubRepoUrl,
}

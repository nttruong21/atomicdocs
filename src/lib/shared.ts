export const siteUrl = import.meta.env.VITE_SITE_URL
export const appName = import.meta.env.VITE_APP_NAME
export const docsRoute = import.meta.env.VITE_DOCS_ROUTE
export const docsImageRoute = import.meta.env.VITE_DOCS_IMAGE_ROUTE
export const githubRepoUrl = import.meta.env.VITE_GITHUB_REPO_URL

export function encodeMarkdownUrl(slugs: string[], locale?: string) {
  const segments = [...slugs]
  if (segments.length === 0) {
    segments.push('index.md')
  } else {
    segments[segments.length - 1] += '.md'
  }
  return `/${[locale, ...docsRoute.split('/'), ...segments]
    .filter(Boolean)
    .join('/')}`
}

/** @returns page slugs */
export function decodeMarkdownUrl(segments: string[]) {
  if (segments.length === 0) {
    return []
  }

  const out = [...segments]
  out[out.length - 1] = (out.at(-1) ?? '').replace(/\.md$/u, '')
  if (out.length === 1 && out[0] === 'index') {
    out.pop()
  }
  return out
}

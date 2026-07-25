/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Client-side environment variables
  readonly VITE_APP_NAME: string
  readonly VITE_GITHUB_REPO_URL: string
  readonly VITE_DOCS_ROUTE: string
  readonly VITE_DOCS_IMAGE_ROUTE: string
}

declare global {
  // biome-ignore lint/style/noNamespace: ignore
  namespace NodeJS {
    interface ProcessEnv {
      // Server-side environment variables
      readonly NODE_ENV: 'development' | 'production' | 'test'
    }
  }
}

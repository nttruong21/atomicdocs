import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import react from '@vitejs/plugin-react'
import mdx from 'fumadocs-mdx/vite'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    mdx(),
    tailwindcss(),
    tanstackStart({
      // prerender: {
      //   enabled: true,
      //   outputPath: 'static',
      //   // If disabled, only the root path or the paths defined in the pages config will be prerendered
      //   autoStaticPathsDiscovery: true,
      //   // Whether to extract links from the HTML and prerender them also
      //   crawlLinks: true,
      //   // Number of times to retry a failed prerender job
      //   retryCount: 2,
      //   // Delay between retries in milliseconds
      //   retryDelay: 1000,
      //   // Maximum number of redirects to follow during prerendering
      //   maxRedirects: 5,
      //   // Fail if an error occurs during prerendering
      //   failOnError: false,
      // },
    }),
    react(),
    nitro(),
  ],
  resolve: {
    tsconfigPaths: true,
    alias: {
      tslib: 'tslib/tslib.es6.js',
    },
  },
})

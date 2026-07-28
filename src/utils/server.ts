import nodeFs from 'node:fs/promises'
import nodePath from 'node:path'
import { createServerFn } from '@tanstack/react-start'
import z from 'zod'

// Extract file content
export const extractFileContentFn = createServerFn()
  .validator(
    z.object({
      path: z.string().trim(),
    })
  )
  .handler(async ({ data }) => {
    try {
      const { path } = data

      // Expected format: <group>/<component>/examples/<example>
      const [group, component, , example] = path.split('/')
      if (!group || !component || !example) {
        console.warn(`Invalid component path format: ${path}`)
        return null
      }

      const fileContent = await nodeFs.readFile(
        nodePath.join(
          process.cwd(),
          `src/registry/${group}/${component}/examples/${example}.tsx`
        ),
        'utf-8'
      )

      return fileContent
    } catch (error) {
      console.log(error)
      return null
    }
  })

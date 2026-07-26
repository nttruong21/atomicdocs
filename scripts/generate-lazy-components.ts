/**
 * Script to generate lazy-loading declarations for all registry example components.
 *
 * React.lazy requires static import paths (not dynamic), so we pre-generate
 * a file that maps every registry example to its lazy-loaded import.
 *
 * Output: src/registry/examples.ts
 *
 * Format:
 * Record<string, Record<string, Record<string, ReturnType<typeof lazy>>>>
 *   -> group (atoms / molecules / organisms)
 *     -> component name (accordion, button, ...)
 *       -> example name (basic, borders, card, ...)
 *         -> LazyComponent
 *
 * Usage: bun run gen-component-lazy-loading
 */

import {
  readdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
} from 'node:fs'
import path from 'node:path'

const REGISTRY_DIR = path.resolve(import.meta.dirname, '..', 'src', 'registry')
const OUTPUT_FILE = path.resolve(
  import.meta.dirname,
  '..',
  'src',
  'registry',
  'lazy-components.ts'
)
const OUTPUT_RELATIVE_DIR = 'src/registry'

/**
 * Extract the exported React component name from a source file.
 * Priority: default export > export function > export const (component-like)
 */
function extractExportName(filePath: string, fileName: string): string | null {
  const content = readFileSync(filePath, 'utf-8')

  // 1. Check for default export
  const defaultExportRe =
    /export\s+default\s+(?<type>function|const|let|class)\s+\w/iu
  const defaultAsRe = /\bexport\s+\{\s*\w+\s+as\s+default\b/u
  if (defaultExportRe.test(content) || defaultAsRe.test(content)) {
    return 'default'
  }

  // 2. Find named exports that look like React components (PascalCase)
  // Match: export function ComponentName
  const funcMatch = content.match(/export\s+function\s+(?<name>[A-Z]\w*)/u)
  if (funcMatch?.groups) {
    return funcMatch.groups.name
  }

  // 3. Match: export const ComponentName = ...
  const constMatch = content.match(
    /export\s+(?<keyword>const|let|var)\s+(?<name>[A-Z]\w*)\s*[=:]/u
  )
  if (constMatch?.groups) {
    return constMatch.groups.name
  }

  // 4. Fallback: convert filename to PascalCase as component name
  // e.g., "basic.tsx" -> "Basic"
  const pascalName = fileName
    .replace(/\.tsx?$/u, '')
    .split(/[-_]/u)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')

  return pascalName
}

function toRegistryModulePath(absPath: string): string {
  const sep = process.platform === 'win32' ? '\\' : '/'
  const rel = path.relative(path.resolve(import.meta.dirname, '..'), absPath)
  // Use @/registry/... path (strip leading 'src/' since @ maps to ./src/)
  const normalized = path.posix.join(...rel.split(sep)).replace(/\.tsx?$/u, '')
  const stripped = normalized.startsWith('src/')
    ? normalized.slice(4)
    : normalized
  return `@/${stripped}`
}

interface ExampleEntry {
  group: string
  component: string
  exampleName: string
  exportName: string
  modulePath: string
}

function generate(): void {
  console.log(`👀👀👀 Start generate lazy components...`)

  // Ensure registry directory exists
  if (!existsSync(REGISTRY_DIR)) {
    console.error(`Registry directory not found: ${REGISTRY_DIR}`)
    process.exit(1)
  }

  const entries: ExampleEntry[] = []
  const groups = readdirSync(REGISTRY_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .toSorted()

  if (groups.length === 0) {
    console.warn('No component groups found under src/registry/.')
  }

  for (const group of groups) {
    const groupDir = path.join(REGISTRY_DIR, group)
    const components = readdirSync(groupDir, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)
      .toSorted()

    for (const component of components) {
      const examplesDir = path.join(groupDir, component, 'examples')
      if (!existsSync(examplesDir)) {
        continue
      }

      const exampleFiles = readdirSync(examplesDir, { withFileTypes: true })
        .filter((dirent) => dirent.isFile() && /\.tsx?$/u.test(dirent.name))
        .map((dirent) => dirent.name)
        .toSorted()

      for (const file of exampleFiles) {
        const absPath = path.join(examplesDir, file)
        const fileName = path.basename(file, '.tsx').replace(/\.ts$/u, '')
        const exportName = extractExportName(absPath, fileName)
        const modulePath = toRegistryModulePath(absPath)

        entries.push({
          group,
          component,
          exampleName: fileName,
          exportName: exportName ?? fileName,
          modulePath,
        })
      }
    }
  }

  // Build output content
  const lines: string[] = [
    '// This file is auto-generated — do not edit directly.',
    '// Run `bun run gen-lazy-components` to regenerate.',
    '',
    "import { lazy } from 'react'",
    '',
    'export const registryLazyComponents: Record<string, Record<string, Record<string, ReturnType<typeof lazy>>>> = {',
  ]

  // Group entries by group, then component
  const grouped: Record<string, Record<string, ExampleEntry[]>> = {}
  for (const entry of entries) {
    if (!grouped[entry.group]) {
      grouped[entry.group] = {}
    }
    if (!grouped[entry.group][entry.component]) {
      grouped[entry.group][entry.component] = []
    }
    grouped[entry.group][entry.component].push(entry)
  }

  const groupKeys = Object.keys(grouped).toSorted()
  for (let gi = 0; gi < groupKeys.length; gi += 1) {
    const group = groupKeys[gi]
    const groupComponents = grouped[group]
    const compKeys = Object.keys(groupComponents).toSorted()

    lines.push(`  ${group}: {`)
    for (let ci = 0; ci < compKeys.length; ci += 1) {
      const component = compKeys[ci]
      const examples = groupComponents[component]

      lines.push(`    ${component}: {`)
      for (let ei = 0; ei < examples.length; ei += 1) {
        const { exampleName, exportName, modulePath } = examples[ei]
        const isDefault = exportName === 'default'
        const comma = ei < examples.length - 1 ? ',' : ''

        if (isDefault) {
          lines.push(
            `      ${exampleName}: lazy(async () => { const { default: defaultExport } = await import('${modulePath}'); return { default: defaultExport } })${comma}`
          )
        } else {
          lines.push(
            `      ${exampleName}: lazy(async () => { const m = await import('${modulePath}'); return { default: m.${exportName} } })${comma}`
          )
        }
      }

      const commaComma = ci < compKeys.length - 1 ? ',' : ''
      lines.push(`    }${commaComma}`)
    }

    const commaGroup = gi < groupKeys.length - 1 ? ',' : ''
    lines.push(`  }${commaGroup}`)
  }

  lines.push('}', '')

  // Ensure output directory exists
  const outDir = path.resolve(import.meta.dirname, '..', OUTPUT_RELATIVE_DIR)
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true })
  }

  writeFileSync(OUTPUT_FILE, lines.join('\n'), 'utf-8')
  console.log(`👀👀👀 ✅ Generated lazy components: ${OUTPUT_FILE}`)
  console.log(
    `   Found ${entries.length} example(s) across ${groupKeys.length} group(s).`
  )
}

generate()

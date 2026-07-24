// Skip husky install in production and CI
if (
  process.env.NODE_ENV === 'production' ||
  import.meta.env.PROD ||
  import.meta.env.CI === 'true'
) {
  import.meta.exit(0)
}

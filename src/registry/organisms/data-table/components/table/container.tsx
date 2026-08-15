import type { ReactNode } from 'react'
import { LoadingOverlay } from '@/components/molecules/loading-overlay'
import { cn } from '@/utils/ui'

interface DataTableContainerProps {
  id?: string
  loading?: boolean
  className?: string
  children?: ReactNode
}

export default function DataTableContainer({
  id,
  loading,
  className,
  children,
}: DataTableContainerProps) {
  return (
    <div
      id={id}
      className={cn(
        'relative flex max-h-[calc(100dvh-2rem)] w-full flex-col overflow-hidden rounded-md border',
        className
      )}
    >
      {children}
      <LoadingOverlay loading={loading} />
    </div>
  )
}

import type { ReactNode } from 'react'
// oxlint-disable import/no-cycle
import { Table } from '@/components/atoms/table'
import { cn } from '@/utils/ui'

interface DataTableTableProps {
  className?: string
  children?: ReactNode
}

export default function DataTableTable({
  className,
  children,
}: DataTableTableProps) {
  return <Table className={cn(className)}>{children}</Table>
}

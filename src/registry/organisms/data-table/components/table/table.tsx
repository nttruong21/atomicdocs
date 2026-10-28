import type { ReactNode } from 'react'
// oxlint-disable import/no-cycle
import { Table } from '@/components/atoms/table'

interface DataTableTableProps {
  className?: string
  children?: ReactNode
}

export default function DataTableTable(props: DataTableTableProps) {
  return <Table {...props} />
}

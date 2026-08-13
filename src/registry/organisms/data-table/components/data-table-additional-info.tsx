import type { RowData } from '@tanstack/react-table'
import type { DataTableProps } from './data-table'
import { useTableContext } from './lib/table'

type DataTableAdditionalInfoProps<TData extends RowData> = Pick<
  DataTableProps<TData>,
  'error' | 'loading'
>

export default function DataTableAdditionalInfo<TData extends RowData>({
  loading,
  error,
}: DataTableAdditionalInfoProps<TData>) {
  const table = useTableContext()
  const rowLength = table.getRowModel().rows.length
  const empty = !(rowLength || loading)

  if (error) {
    return (
      <div className='flex items-center justify-center p-4'>
        An error occurred, please reload the page
      </div>
    )
  }

  if (empty) {
    return (
      <div className='flex items-center justify-center p-4'>
        No data available
      </div>
    )
  }

  return null
}

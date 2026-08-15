// oxlint-disable import/no-cycle
import { useTableContext } from '../lib/table'

interface DataTableAdditionalInfoProps {
  error?: boolean
  loading?: boolean
}

export default function DataTableAdditionalInfo({
  loading,
  error,
}: DataTableAdditionalInfoProps) {
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

import type {
  CellContext,
  Row_RowSelection,
  RowData,
} from '@tanstack/react-table'
import { Checkbox } from '@/components/atoms/checkbox'
import type { DataTableFeatures } from './lib/feature'

export function DataTableCheckboxCell<TData extends RowData>({
  table,
  row,
}: CellContext<DataTableFeatures, TData, unknown>) {
  const dataTableRow = row as typeof row & Row_RowSelection

  return (
    <div className='flex h-full items-center justify-center'>
      <Checkbox
        checked={dataTableRow.getIsSelected()}
        onCheckedChange={(value) => {
          dataTableRow.toggleSelected(value)
          table?.options.meta?.setIsSelectAllRows?.(false)
        }}
      />
    </div>
  )
}

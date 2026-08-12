import type {
  CellContext,
  Row_RowSelection,
  RowData,
  TableFeatures,
} from '@tanstack/react-table'
import { Checkbox } from '@/components/atoms/checkbox'

export function DataTableCheckboxCell<
  TFeatures extends TableFeatures,
  TData extends RowData,
>({ table, row }: CellContext<TFeatures, TData, unknown>) {
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

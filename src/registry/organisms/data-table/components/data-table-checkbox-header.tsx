import type {
  HeaderContext,
  RowData,
  Table_RowSelection,
  TableFeatures,
} from '@tanstack/react-table'
import { Checkbox } from '@/components/atoms/checkbox'

export function DataTableCheckboxHeader<
  TFeatures extends TableFeatures,
  TData extends RowData,
>({ table }: HeaderContext<TFeatures, TData, unknown>) {
  const dataTable = table as typeof table & Table_RowSelection<TFeatures, TData>

  return (
    <div className='flex h-full w-full items-center justify-center'>
      <Checkbox
        checked={dataTable.getIsAllPageRowsSelected()}
        indeterminate={dataTable.getIsSomePageRowsSelected()}
        onCheckedChange={(value) => {
          dataTable.toggleAllPageRowsSelected(!!value)
          dataTable.options.meta?.setIsSelectAllRows?.(false)
        }}
      />
    </div>
  )
}

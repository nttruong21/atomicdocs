// oxlint-disable import/no-cycle
import { Checkbox } from '@/components/atoms/checkbox'
import { useCellContext } from '../lib/table'

export default function DataTableCheckboxCell() {
  const cell = useCellContext()

  return (
    <Checkbox
      checked={cell.row.getIsSelected()}
      className='mx-auto'
      onCheckedChange={(checked) => {
        cell.row.toggleSelected(checked)
        cell.table.options.meta?.setIsSelectAllRows?.(false)
      }}
    />
  )
}

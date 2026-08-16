// oxlint-disable import/no-cycle
import { Checkbox } from '@/components/atoms/checkbox'
import { useTableContext } from '../lib/table'

export default function DataTableCheckboxHeader() {
  const table = useTableContext()

  const checked = table.getIsAllPageRowsSelected()
  const indeterminate = table.getIsSomePageRowsSelected()

  return (
    <Checkbox
      checked={checked}
      indeterminate={!checked && indeterminate}
      className='mx-auto'
      onCheckedChange={(value) => {
        table.toggleAllPageRowsSelected(!!value)
        table.options.meta?.setIsSelectAllRows?.(!!value)
      }}
    />
  )
}

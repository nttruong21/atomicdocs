import { ListChecksIcon } from 'lucide-react'
// oxlint-disable import/no-cycle
import { Button } from '@/components/atoms/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/atoms/tooltip'
import { cn } from '@/utils/ui'
import { useTableContext } from '../lib/table'

export default function DataTableRowSelection() {
  const table = useTableContext()

  const rowCount = table.getRowCount()
  const rowSelectionLength = Object.keys(table.store.state.rowSelection).length
  const pageRowCount = table.getFilteredRowModel().rows.length
  const { isSelectAllRows, setIsSelectAllRows } = table.options.meta ?? {}

  const toggleSelectAllRows = () => {
    setIsSelectAllRows?.((prev) => !prev)
    table.toggleAllPageRowsSelected(!isSelectAllRows)
  }

  if (!rowSelectionLength) {
    return null
  }

  return (
    <div
      className={cn('w-full animate-in bg-muted/50 p-4 text-sm', {
        'fade-in slide-in-from-top-60': rowSelectionLength > 0,
      })}
    >
      <span>
        {isSelectAllRows
          ? `All ${rowCount} rows selected`
          : `${rowSelectionLength}/${pageRowCount} rows selected`}
      </span>

      {pageRowCount < rowCount && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger
              render={
                <Button
                  onClick={toggleSelectAllRows}
                  size='icon-sm'
                  variant='outline'
                >
                  <ListChecksIcon />
                </Button>
              }
            />
            <TooltipContent>
              {isSelectAllRows
                ? `Unselect all ${rowCount} rows`
                : `Select all ${rowCount} rows`}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  )
}

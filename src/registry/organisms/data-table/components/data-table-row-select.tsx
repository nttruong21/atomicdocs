import type {
  RowData,
  Table_RowPagination,
  Table_RowSelection,
  TableFeatures,
  TableState_RowSelection,
} from '@tanstack/react-table'
import { ListChecksIcon } from 'lucide-react'
import type { Dispatch, SetStateAction } from 'react'
import { Button } from '@/components/atoms/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/atoms/tooltip'
import { cn } from '@/utils/ui'
import type { DataTableProps } from './data-table'

export default function DataTableRowSelection<
  TFeatures extends TableFeatures,
  TData extends RowData,
>({ table }: Pick<DataTableProps<TFeatures, TData>, 'table'>) {
  const dataTable = table as typeof table &
    Table_RowPagination<TFeatures, TData> &
    Table_RowSelection<TFeatures, TData>

  const rowCount = dataTable.getRowCount()
  const rowSelectionLength = Object.keys(
    (dataTable.store.state as TableState_RowSelection).rowSelection
  ).length
  const pageRowCount = dataTable.getFilteredRowModel().rows.length
  const { isSelectAllRows, setIsSelectAllRows } =
    (dataTable.options.meta as {
      isSelectAllRows: boolean
      setIsSelectAllRows: Dispatch<SetStateAction<boolean>>
    }) ?? {}

  const toggleSelectAllRows = () => {
    setIsSelectAllRows?.((prev) => !prev)
    dataTable.toggleAllPageRowsSelected(!isSelectAllRows)
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

import type {
  RowData,
  Table_RowPagination,
  TableFeatures,
  TableState_RowPagination,
} from '@tanstack/react-table'
import debounce from 'lodash.debounce'
import type { NumberFormatValues } from 'react-number-format'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/atoms/select'
import { NumberInput } from '@/components/molecules/number-input'
import { Pagination } from '@/components/molecules/pagination'
import { cn } from '@/utils/ui'
import type { DataTableProps } from './data-table'

const pageSizeOptions = [10, 20, 30, 50, 100]

export default function DataTablePagination<
  TFeatures extends TableFeatures,
  TData extends RowData,
>({
  table,
  className,
}: Pick<DataTableProps<TFeatures, TData>, 'table'> & {
  className?: string
}) {
  const dataTable = table as typeof table &
    Table_RowPagination<TFeatures, TData>

  const {
    pagination: { pageIndex, pageSize },
  } = dataTable.store.state as TableState_RowPagination
  const page = pageIndex + 1
  const pageCount = dataTable.getPageCount()

  const changeNumberInputValue = debounce((values: NumberFormatValues) => {
    if (values.floatValue === undefined || values.floatValue < 1) {
      return
    }
    if (values.floatValue > pageCount) {
      return dataTable.setPageIndex(pageCount - 1)
    }
    return dataTable.setPageIndex(values.floatValue - 1)
  }, 400)

  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-between gap-4 border-t bg-muted/50 p-4 text-sm xl:flex-row',
        className
      )}
    >
      {/* Page input & page size */}
      <div className='flex flex-col items-center gap-4 xl:flex-row'>
        {/* Page input */}
        <div className='flex items-center gap-2'>
          <span>Move to page</span>
          <NumberInput
            className='w-14'
            defaultValue={page}
            isDisplayStepper={false}
            max={pageCount}
            min={1}
            onValueChange={changeNumberInputValue}
            placeholder=''
          />
        </div>

        {/* Page size selection */}
        <div className='flex items-center gap-2'>
          <span>Number of rows per page</span>
          <Select
            onValueChange={(value) => {
              dataTable.setPageSize(Number(value))
            }}
            value={`${pageSize}`}
          >
            <SelectTrigger className='w-fit gap-1'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent side='top'>
              {pageSizeOptions.map((newPageSize) => (
                <SelectItem key={newPageSize} value={`${newPageSize}`}>
                  {newPageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Pagination
        isHasNextPage={dataTable.getCanNextPage()}
        isHasPreviousPage={dataTable.getCanPreviousPage()}
        onChangePage={(newPage) => dataTable.setPageIndex(newPage - 1)}
        onGoToNextPage={dataTable.nextPage}
        onGoToPreviousPage={dataTable.previousPage}
        page={page}
        pageCount={pageCount}
      />
    </div>
  )
}

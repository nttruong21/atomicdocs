import {
  FlexRender,
  type Column_ColumnPinning,
  type RowData,
  type TableFeatures,
} from '@tanstack/react-table'
import { ChevronLeftIcon, ChevronRightIcon, PinOffIcon } from 'lucide-react'
import { Button } from '@/components/atoms/button'
import { TableHead, TableHeader, TableRow } from '@/components/atoms/table'
import { cn } from '@/utils/ui'
import type { DataTableProps } from './data-table'
import { getCommonPinningStyles } from './lib'

export default function DataTableHeader<
  TFeatures extends TableFeatures,
  TData extends RowData,
>({
  table,
  className,
}: Pick<DataTableProps<TFeatures, TData>, 'table'> & { className?: string }) {
  return (
    <TableHeader className={cn('sticky top-0 z-20', className)}>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow
          className='bg-background hover:bg-background'
          key={headerGroup.id}
        >
          {headerGroup.headers.map((header, headerIndex) => {
            const dataTableHeaderColumn =
              header.column as typeof header.column & Column_ColumnPinning

            const pinningPosition = dataTableHeaderColumn.getIsPinned()

            const columnRelativeDepth = header.depth - header.column.depth
            if (columnRelativeDepth > 1) {
              return null
            }

            let rowSpan = 1
            if (header.isPlaceholder) {
              const leafs = header.getLeafHeaders()
              const lastLeftDepth = leafs.at(-1)?.depth
              if (lastLeftDepth) {
                rowSpan = lastLeftDepth - header.depth
              }
            }

            return (
              <TableHead
                className={cn(
                  'space-y-1 border-b border-l',
                  dataTableHeaderColumn.columnDef.meta &&
                    'className' in dataTableHeaderColumn.columnDef.meta
                    ? (
                        dataTableHeaderColumn.columnDef.meta as {
                          className?: string
                        }
                      ).className
                    : '',
                  {
                    'first:border-l-0': headerIndex === 0,
                  }
                )}
                colSpan={header.colSpan}
                key={header.id}
                rowSpan={rowSpan}
                style={{
                  ...getCommonPinningStyles(dataTableHeaderColumn),
                }}
              >
                <div className='whitespace-nowrap'>
                  <FlexRender header={header} />
                </div>

                {dataTableHeaderColumn.getCanPin() && (
                  <div className='flex gap-2'>
                    {pinningPosition !== 'start' && (
                      <Button
                        onClick={() => {
                          dataTableHeaderColumn.pin('start')
                        }}
                        size='icon-xs'
                        variant='outline'
                      >
                        <ChevronLeftIcon />
                      </Button>
                    )}

                    {pinningPosition && (
                      <Button
                        onClick={() => {
                          dataTableHeaderColumn.pin(false)
                        }}
                        size='icon-xs'
                        variant='outline'
                      >
                        <PinOffIcon />
                      </Button>
                    )}

                    {pinningPosition !== 'end' && (
                      <Button
                        onClick={() => {
                          dataTableHeaderColumn.pin('end')
                        }}
                        size='icon-xs'
                        variant='outline'
                      >
                        <ChevronRightIcon />
                      </Button>
                    )}
                  </div>
                )}
              </TableHead>
            )
          })}
        </TableRow>
      ))}
    </TableHeader>
  )
}

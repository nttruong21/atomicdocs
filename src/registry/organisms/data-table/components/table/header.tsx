import { FlexRender } from '@tanstack/react-table'
// oxlint-disable import/no-cycle
import { TableHead, TableHeader, TableRow } from '@/components/atoms/table'
import { cn } from '@/utils/ui'
import { getCommonPinningStyles } from '../lib/pinning'
import { useTableContext } from '../lib/table'

interface DataTableHeaderProps {
  className?: string
}

export default function DataTableHeader({ className }: DataTableHeaderProps) {
  const table = useTableContext()

  return (
    <TableHeader className={cn('sticky top-0 z-20', className)}>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow
          key={headerGroup.id}
          className='bg-background hover:bg-background'
        >
          {headerGroup.headers
            .filter((header) => header.column.getIsVisible())
            .map((header, headerIndex) => {
              const { column } = header
              const columnMeta = column.columnDef.meta

              // const columnRelativeDepth = header.depth - column.depth
              // if (columnRelativeDepth > 1) {
              //   return null
              // }

              // let rowSpan = 1
              // if (header.isPlaceholder) {
              //   const leafs = header.getLeafHeaders()
              //   const lastLeftDepth = leafs.at(-1)?.depth
              //   if (lastLeftDepth) {
              //     rowSpan = lastLeftDepth - header.depth
              //   }
              // }

              return (
                <table.AppHeader key={header.id} header={header}>
                  {(headerInstance) =>
                    headerInstance.rowSpan ? (
                      <TableHead
                        className={cn(
                          'border-b border-l',
                          columnMeta?.className,
                          {
                            'first:border-l-0': headerIndex === 0,
                          }
                        )}
                        colSpan={headerInstance.colSpan}
                        rowSpan={headerInstance.rowSpan}
                        style={{
                          flexGrow: headerInstance.getSize(),
                          width: headerInstance.getSize(),
                          ...getCommonPinningStyles({ column }),
                        }}
                      >
                        <FlexRender header={headerInstance} />
                        {headerInstance.column.getCanResize() && (
                          <div
                            role='none'
                            className={cn(
                              'absolute -right-0.5 z-10 top-1/2 h-6 w-0.75 -translate-y-1/2 cursor-e-resize select-none touch-none rounded-md transition-colors hover:bg-blue-600 before:absolute before:-left-1 before:-right-1 before:top-0 before:h-full before:content-[""]',
                              header.column.getIsResizing() && 'bg-blue-600'
                            )}
                            onDoubleClick={() => header.column.resetSize()}
                            onMouseDown={header.getResizeHandler()}
                            onTouchStart={header.getResizeHandler()}
                          />
                        )}
                      </TableHead>
                    ) : null
                  }
                </table.AppHeader>
              )
            })}
        </TableRow>
      ))}
    </TableHeader>
  )
}

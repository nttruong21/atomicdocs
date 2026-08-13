import { TableHead, TableHeader, TableRow } from '@/components/atoms/table'
import { cn } from '@/utils/ui'
import { getCommonPinningStyles } from './lib/pinning'
import { useTableContext } from './lib/table'

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

              const columnRelativeDepth = header.depth - column.depth
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
                <table.AppHeader key={header.id} header={header}>
                  {(headerInstance) => (
                    <TableHead
                      className={cn(
                        'space-y-1 border-b border-l',
                        columnMeta?.className,
                        {
                          'first:border-l-0': headerIndex === 0,
                          'text-center *:[[role=checkbox]]:mx-auto':
                            headerInstance.column.id === 'checkbox',
                        }
                      )}
                      colSpan={headerInstance.colSpan}
                      rowSpan={rowSpan}
                      style={{
                        flexGrow: headerInstance.getSize(),
                        width: headerInstance.getSize(),
                        ...getCommonPinningStyles({ column }),
                      }}
                    >
                      {headerInstance.isPlaceholder ? null : (
                        <headerInstance.FlexRender />
                      )}
                      <headerInstance.ResizeHandler />
                    </TableHead>
                  )}
                </table.AppHeader>
              )
            })}
        </TableRow>
      ))}
    </TableHeader>
  )
}

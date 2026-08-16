import { FlexRender, type RowData } from '@tanstack/react-table'
import React, { type ReactNode } from 'react'
// oxlint-disable import/no-cycle
import { TableBody, TableCell, TableRow } from '@/components/atoms/table'
import { cn } from '@/utils/ui'
import { getCommonPinningStyles } from '../lib/pinning'
import { useTableContext, type AppDataTable } from '../lib/table'

interface DataTableBodyProps<TData extends RowData> {
  className?: string
  onRenderAdditionalRow?: (table: AppDataTable<TData>) => ReactNode
  onRenderSubComponent?: (
    row: ReturnType<AppDataTable<TData>['getRow']>
  ) => ReactNode
}

export default function DataTableBody<TData extends RowData>({
  className,
  onRenderSubComponent,
  onRenderAdditionalRow,
}: DataTableBodyProps<TData>) {
  const table = useTableContext<TData>()
  const { rows } = table.getRowModel()

  return (
    <TableBody className={cn('relative', className)}>
      {rows.map((row) => {
        const isExpanded = row.getIsExpanded()
        const rowClassName =
          row.original &&
          typeof row.original === 'object' &&
          'className' in row.original
            ? (row.original.className as string | undefined)
            : undefined

        return (
          <React.Fragment key={row.id}>
            <TableRow
              className={cn(
                '[&:not(:last-child)_td]:border-b',
                isExpanded && 'border-b-0',
                rowClassName
              )}
              data-state={row.getIsSelected() && 'selected'}
            >
              {row.getVisibleCells().map((cell) => (
                <table.AppCell key={cell.id} cell={cell}>
                  {(cellInstance) => (
                    <TableCell
                      style={{
                        ...getCommonPinningStyles({
                          column: cellInstance.column,
                        }),
                      }}
                    >
                      <FlexRender cell={cellInstance} />
                    </TableCell>
                  )}
                </table.AppCell>
              ))}
            </TableRow>

            {/* Sub component */}
            {onRenderSubComponent && (
              <TableRow
                className={cn('hidden', {
                  'table-row': isExpanded,
                })}
              >
                <TableCell colSpan={row.getVisibleCells().length}>
                  {onRenderSubComponent(row)}
                </TableCell>
              </TableRow>
            )}
          </React.Fragment>
        )
      })}

      {onRenderAdditionalRow && (
        <TableRow>
          <TableCell colSpan={table.getAllFlatColumns().length}>
            {onRenderAdditionalRow(table)}
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  )
}

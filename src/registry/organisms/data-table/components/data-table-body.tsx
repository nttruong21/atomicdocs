import {
  FlexRender,
  type Row_ColumnVisibility,
  type Row_RowSelection,
  type RowData,
} from '@tanstack/react-table'
import React from 'react'
import { TableBody, TableCell, TableRow } from '@/components/atoms/table'
import { cn } from '@/utils/ui'
import type { DataTableProps } from './data-table'
import type { DataTableFeatures } from './lib/feature'
import { getCommonPinningStyles } from './lib/pinning'
import { useTableContext } from './lib/table'

type DataTableBodyProps<TData extends RowData> = Pick<
  DataTableProps<TData>,
  'onRenderSubComponent' | 'onRenderAdditionalRow'
> & {
  className?: string
}

export default function DataTableBody<TData extends RowData>({
  className,
  onRenderSubComponent,
  onRenderAdditionalRow,
}: DataTableBodyProps<TData>) {
  const table = useTableContext()
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
              data-state={
                (row as typeof row & Row_RowSelection).getIsSelected() &&
                'selected'
              }
            >
              {(
                row as typeof row &
                  Row_ColumnVisibility<DataTableFeatures, TData>
              )
                .getVisibleCells()
                .map((cell) => (
                  <TableCell
                    key={cell.id}
                    style={{
                      ...getCommonPinningStyles({
                        column: cell.column,
                      }),
                    }}
                  >
                    <FlexRender cell={cell} />
                  </TableCell>
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

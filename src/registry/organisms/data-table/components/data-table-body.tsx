import {
  FlexRender,
  type Row_ColumnVisibility,
  type Row_RowExpanding,
  type Row_RowSelection,
  type RowData,
  type TableFeatures,
} from '@tanstack/react-table'
import React from 'react'
import { TableBody, TableCell, TableRow } from '@/components/atoms/table'
import { cn } from '@/utils/ui'
import type { DataTableProps } from './data-table'
import { getCommonPinningStyles } from './lib'

export default function DataTableBody<
  TFeatures extends TableFeatures,
  TData extends RowData,
>({
  table,
  className,
  onRenderSubComponent,
  onRenderAdditionalRow,
}: Pick<
  DataTableProps<TFeatures, TData>,
  'table' | 'onRenderSubComponent' | 'onRenderAdditionalRow'
> & {
  className?: string
}) {
  const { rows } = table.getRowModel()

  return (
    <TableBody className={cn('relative', className)}>
      {rows.map((row) => {
        const dataTableRow = row as typeof row &
          Row_RowExpanding &
          Row_ColumnVisibility<TFeatures, TData>
        const isExpanded = dataTableRow.getIsExpanded()
        const rowClassName: string =
          (typeof row.original === 'object' &&
          row.original &&
          'className' in row.original
            ? (row.original.className as string)
            : '') ?? ''

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
              {(row as typeof row & Row_ColumnVisibility<TFeatures, TData>)
                .getVisibleCells()
                .map((cell) => (
                  <TableCell
                    key={cell.id}
                    style={{ ...getCommonPinningStyles(cell.column) }}
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
                <TableCell colSpan={dataTableRow.getVisibleCells().length}>
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

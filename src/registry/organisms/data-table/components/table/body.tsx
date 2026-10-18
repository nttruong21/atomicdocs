import { FlexRender, type RowData } from '@tanstack/react-table'
import { Fragment, useState, type ReactNode } from 'react'
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

  const [hoveredCell, setHoveredCell] = useState<{
    rowId: string
    cellId: string
  } | null>(null)

  // Resolve against the current row model so sorting and pagination cannot
  // leave a hover range pointing at unrelated rows.
  const hoveredRowIndex = rows.findIndex((row) => row.id === hoveredCell?.rowId)
  const hoveredRowSpan =
    rows[hoveredRowIndex]
      ?.getVisibleCells()
      .find((cell) => cell.id === hoveredCell?.cellId)
      ?.getRowSpan() ?? 0

  return (
    <TableBody
      className={cn('relative', className)}
      onMouseLeave={() => setHoveredCell(null)}
    >
      {rows.map((row, rowIndex) => {
        const isExpanded = row.getIsExpanded()
        const rowClassName =
          row.original &&
          typeof row.original === 'object' &&
          'className' in row.original
            ? (row.original.className as string | undefined)
            : undefined

        return (
          <Fragment key={row.id}>
            <TableRow
              className={cn(
                'hover:bg-transparent [&:not(:last-child)_td]:border-b',
                isExpanded && 'border-b-0',
                rowClassName
              )}
              data-state={row.getIsSelected() && 'selected'}
            >
              {row.getVisibleCells().map((cell) => {
                const rowSpan = cell.getRowSpan()
                const colSpan = cell.getColSpan()

                // A span of 0 means this cell is covered by a cell above
                // or to its left. Skip it. Do NOT render `rowSpan={0}`:
                // in HTML that means "span to the end of the row group",
                // so forgetting this check merges the cell down the whole
                // tbody instead of rendering nothing.
                if (rowSpan === 0 || colSpan === 0) {
                  return null
                }

                // Highlight intersecting spans: the hovered group, its children,
                // and ancestor cells covering it, without including sibling rows.
                const isHovered =
                  hoveredRowIndex !== -1 &&
                  rowIndex < hoveredRowIndex + hoveredRowSpan &&
                  rowIndex + rowSpan > hoveredRowIndex

                return (
                  <table.AppCell key={cell.id} cell={cell}>
                    {(cellInstance) => (
                      <TableCell
                        onMouseEnter={() =>
                          setHoveredCell({ rowId: row.id, cellId: cell.id })
                        }
                        onMouseLeave={() => setHoveredCell(null)}
                        rowSpan={cellInstance.getRowSpan()}
                        colSpan={cellInstance.getColSpan()}
                        style={{
                          ...getCommonPinningStyles({
                            column: cellInstance.column,
                            isSelected: row.getIsSelected(),
                          }),
                        }}
                        className={cn({
                          'bg-muted/50 hover:bg-muted/50':
                            isHovered && !row.getIsSelected(),
                        })}
                      >
                        <FlexRender cell={cellInstance} />
                      </TableCell>
                    )}
                  </table.AppCell>
                )
              })}
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
          </Fragment>
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

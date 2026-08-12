import type {
  Column,
  Column_ColumnOrdering,
  Column_ColumnPinning,
  RowData,
  TableFeatures,
} from '@tanstack/react-table'

// Get common pinning styles
function getBoxShadow({
  isLastLeftPinnedColumn,
  isFirstRightPinnedColumn,
}: {
  isLastLeftPinnedColumn: boolean
  isFirstRightPinnedColumn: boolean
}) {
  if (isLastLeftPinnedColumn) {
    return '-2px 0 2px -2px gray inset'
  }
  if (isFirstRightPinnedColumn) {
    return '2px 0 2px -2px gray inset'
  }
}

export function getCommonPinningStyles<
  TFeatures extends TableFeatures,
  TData extends RowData,
>(column: Column<TFeatures, TData>): React.CSSProperties {
  const dataTableColumn = column as typeof column &
    Column_ColumnPinning &
    Column_ColumnOrdering
  const pinningPosition = dataTableColumn.getIsPinned()
  const isLastLeftPinnedColumn =
    pinningPosition === 'start' && dataTableColumn.getIsLastColumn('start')
  const isFirstRightPinnedColumn =
    pinningPosition === 'end' && dataTableColumn.getIsFirstColumn('end')

  return {
    boxShadow: getBoxShadow({
      isFirstRightPinnedColumn,
      isLastLeftPinnedColumn,
    }),
    left:
      pinningPosition === 'start'
        ? `${dataTableColumn.getStart('start')}px`
        : undefined,
    minWidth: dataTableColumn.getSize(),
    position: pinningPosition ? 'sticky' : 'relative',
    right:
      pinningPosition === 'end'
        ? `${dataTableColumn.getAfter('end')}px`
        : undefined,
    zIndex: pinningPosition ? 1 : 0,
  }
}

// Get number order
export function getNumberOrder(
  rowIndex: number,
  page: number,
  pageSize: number
): number {
  return rowIndex + 1 + (page - 1) * pageSize
}

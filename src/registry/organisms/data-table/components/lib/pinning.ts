import type {
  Column,
  ColumnPinningPosition,
  RowData,
} from '@tanstack/react-table'
import type { DataTableFeatures } from './feature'

function getBoxShadow({
  isLastLeftPinnedColumn,
  isFirstRightPinnedColumn,
}: {
  isLastLeftPinnedColumn: boolean
  isFirstRightPinnedColumn: boolean
}) {
  if (isLastLeftPinnedColumn) {
    return '-4px 0 4px -4px var(--border) inset'
  }
  if (isFirstRightPinnedColumn) {
    return '4px 0 4px -4px var(--border) inset'
  }
}

function getBackground({
  isSelected = false,
  pinningPosition,
}: {
  isSelected?: boolean
  pinningPosition: ColumnPinningPosition
}) {
  if (isSelected) {
    return 'var(--muted)'
  }
  if (pinningPosition) {
    return 'var(--background)'
  }
}

export function getCommonPinningStyles<TData extends RowData>({
  column,
  isSelected = false,
}: {
  column: Column<DataTableFeatures, TData>
  isSelected?: boolean
}): React.CSSProperties {
  const pinningPosition = column.getIsPinned()
  const isPinned = pinningPosition
  const isLastLeftPinnedColumn =
    pinningPosition === 'start' && column.getIsLastColumn('start')
  const isFirstRightPinnedColumn =
    pinningPosition === 'end' && column.getIsFirstColumn('end')

  return {
    boxShadow: getBoxShadow({
      isFirstRightPinnedColumn,
      isLastLeftPinnedColumn,
    }),
    insetInlineStart:
      pinningPosition === 'start' ? `${column.getStart('start')}px` : undefined,
    insetInlineEnd:
      pinningPosition === 'end' ? `${column.getAfter('end')}px` : undefined,
    position: pinningPosition ? 'sticky' : 'relative',
    background: getBackground({
      isSelected,
      pinningPosition,
    }),
    zIndex: isPinned ? 1 : 0,
  }
}

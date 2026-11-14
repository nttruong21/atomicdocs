import type { Column, RowData } from '@tanstack/react-table'
import type { CSSProperties } from 'react'
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
  isHovered = false,
  isHeader = false,
}: {
  isSelected?: boolean
  isHovered?: boolean
  isHeader?: boolean
}) {
  if (isSelected) {
    return 'var(--muted)'
  }

  if (isHeader || isHovered) {
    return 'var(--color-table-muted)'
  }

  return 'var(--background)'
}

export function getCommonPinningStyles<TData extends RowData>({
  column,
  isSelected = false,
  isHovered = false,
  isHeader = false,
}: {
  column: Column<DataTableFeatures, TData>
  isSelected?: boolean
  isHovered?: boolean
  isHeader?: boolean
}): CSSProperties {
  const pinningPosition = column.getIsPinned()
  const isLastLeftPinnedColumn =
    pinningPosition === 'start' && column.getIsLastColumn('start')
  const isFirstRightPinnedColumn =
    pinningPosition === 'end' && column.getIsFirstColumn('end')

  return {
    boxShadow: getBoxShadow({
      isLastLeftPinnedColumn,
      isFirstRightPinnedColumn,
    }),
    insetInlineStart:
      pinningPosition === 'start' ? `${column.getStart('start')}px` : undefined,
    insetInlineEnd:
      pinningPosition === 'end' ? `${column.getAfter('end')}px` : undefined,
    position: pinningPosition ? 'sticky' : 'relative',
    background: getBackground({
      isSelected,
      isHovered,
      isHeader,
    }),
    minWidth: column.getSize(),
    zIndex: pinningPosition ? 1 : 0,
  }
}

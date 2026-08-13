import { Subscribe } from '@tanstack/react-table'
// oxlint-disable import/no-cycle
import { cn } from '@/utils/ui'
import { useHeaderContext, useTableContext } from '../lib/table'

export default function DataTableHeaderResizeHandler() {
  const header = useHeaderContext()
  const table = useTableContext()

  if (!header.column.getCanResize()) {
    return null
  }

  return (
    <Subscribe source={table.atoms.columnResizing}>
      {() => (
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
    </Subscribe>
  )
}

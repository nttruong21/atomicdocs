import { FlexRender } from '@tanstack/react-table'
// oxlint-disable import/no-cycle
import { TableCell, TableFooter, TableRow } from '@/components/atoms/table'
import { useTableContext } from '../lib/table'

interface DataTableFooterProps {
  className?: string
}

export default function DataTableFooter({ className }: DataTableFooterProps) {
  const table = useTableContext()

  return (
    <TableFooter className={className}>
      {table.getFooterGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <table.AppFooter key={header.id} header={header}>
              {(headerInstance) => (
                <TableCell colSpan={headerInstance.colSpan}>
                  {headerInstance.isPlaceholder ? null : (
                    <FlexRender footer={headerInstance} />
                  )}
                </TableCell>
              )}
            </table.AppFooter>
          ))}
        </TableRow>
      ))}
    </TableFooter>
  )
}

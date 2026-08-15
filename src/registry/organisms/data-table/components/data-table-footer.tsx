import { FlexRender, type RowData } from '@tanstack/react-table'
import { TableCell, TableFooter, TableRow } from '@/components/atoms/table'
import { useTableContext } from './lib/table'

interface DataTableFooterProps {
  className?: string
}

export default function DataTableFooter<TData extends RowData>({
  className,
}: DataTableFooterProps) {
  const table = useTableContext<TData>()

  return (
    <TableFooter className={className}>
      {table.getFooterGroups().map((footerGroup) => (
        <TableRow key={footerGroup.id}>
          {footerGroup.headers.map((header) => (
            <TableCell colSpan={header.colSpan} key={header.id}>
              {header.isPlaceholder ? null : <FlexRender header={header} />}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableFooter>
  )
}

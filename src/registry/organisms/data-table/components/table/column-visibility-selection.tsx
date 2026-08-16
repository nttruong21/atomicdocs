import type {
  Column,
  ColumnVisibilityState,
  RowData,
} from '@tanstack/react-table'
import { ChevronDownIcon } from 'lucide-react'
import { useMemo } from 'react'
// oxlint-disable import/no-cycle
import { Button } from '@/components/atoms/button'
import { Checkbox } from '@/components/atoms/checkbox'
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
} from '@/components/atoms/combobox'
import { InputGroupAddon } from '@/components/atoms/input-group'
import { cn } from '@/utils/ui'
import type { DataTableFeatures } from '../lib/feature'
import { useTableContext } from '../lib/table'

interface DataTableColumnVisibilitySelectionProps {
  className?: string
}

export default function DataTableColumnVisibilitySelection<
  TData extends RowData,
>({ className }: DataTableColumnVisibilitySelectionProps) {
  const table = useTableContext()

  const columnVisibility = table.atoms.columnVisibility.get()
  const allColumnsVisible = table.getIsAllColumnsVisible()
  const someColumnsVisible = table.getIsSomeColumnsVisible()

  const columns = useMemo(() => {
    return table
      .getAllLeafColumns()
      .filter(
        (column) =>
          column.id &&
          column.getCanHide() &&
          (typeof column.columnDef.header === 'string' ||
            column.columnDef.meta?.label)
      )
  }, [table])

  const visibleColumns = useMemo(() => {
    return columns.filter((column) => {
      return columnVisibility[column.id] !== false
    })
  }, [columns, columnVisibility])

  return (
    <Combobox
      items={columns}
      value={visibleColumns}
      multiple

      onValueChange={(value) => {
        table.setColumnVisibility(() => {
          const newColumnVisibility: ColumnVisibilityState = {}

          for (const column of columns) {
            newColumnVisibility[column.id] = false
          }

          for (const column of value) {
            newColumnVisibility[column.id] = true
          }

          return newColumnVisibility
        })
      }}
    >
      <ComboboxTrigger
        render={
          <Button
            className={cn('w-64 justify-between font-normal', className)}
            variant='outline'
          >
            <span>Columns</span>
            <ChevronDownIcon className='text-muted-foreground' />
          </Button>
        }
      />
      <ComboboxContent>
        <ComboboxInput placeholder='Search' showTrigger={false}>
          <InputGroupAddon
            align='inline-start'
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            <Checkbox
              checked={allColumnsVisible}
              className='cursor-default'
              indeterminate={!allColumnsVisible && someColumnsVisible}
              onCheckedChange={(checked) => {
                table.toggleAllColumnsVisible(checked)
              }}
            />
          </InputGroupAddon>
        </ComboboxInput>

        <ComboboxEmpty>No columns found.</ComboboxEmpty>
        <ComboboxList>
          {(column: Column<DataTableFeatures, TData, unknown>) => (
            <ComboboxItem key={column.id} value={column}>
              {typeof column.columnDef.header === 'string'
                ? column.columnDef.header
                : column.columnDef.meta?.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

import type {
  Column,
  ColumnVisibilityState,
  RowData,
  Table,
} from '@tanstack/react-table'
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'
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
import type { DataTableFeatures } from './lib/feature'

export function DataTableColumnVisibilitySelect<TData extends RowData>({
  table,
}: {
  table: Table<DataTableFeatures, TData>
}) {
  const [columns] = useState(() =>
    table
      .getAllLeafColumns()
      .filter(
        (column) =>
          column.id &&
          column.getCanHide() &&
          typeof column.columnDef.header === 'string'
      )
  )

  const { columnVisibility } = table.store.state

  const visibleColumns = columns.filter(
    (column) => columnVisibility[column.id] !== false
  )

  const allColumnsVisible = table.getIsAllColumnsVisible()
  const someColumnsVisible = table.getIsSomeColumnsVisible()

  return (
    <Combobox
      items={columns}
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
      value={visibleColumns}
    >
      <ComboboxTrigger
        render={
          <Button
            className='w-64 justify-between font-normal'
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
              {column.columnDef.header as string}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

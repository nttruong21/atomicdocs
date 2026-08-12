import type {
  Column,
  Column_ColumnVisibility,
  ColumnVisibilityState,
  RowData,
  Table,
  Table_ColumnVisibility,
  TableFeatures,
  TableState_ColumnVisibility,
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

export function DataTableColumnVisibilitySelect<
  TFeatures extends TableFeatures,
  TData extends RowData,
>({ table }: { table: Table<TFeatures, TData> }) {
  const dataTable = table as typeof table &
    Table_ColumnVisibility<TFeatures, TData>

  const [columns] = useState(() =>
    dataTable
      .getAllLeafColumns()
      .filter(
        (column) =>
          column.id &&
          (column as typeof column & Column_ColumnVisibility).getCanHide() &&
          typeof column.columnDef.header === 'string'
      )
  )

  const { columnVisibility } = dataTable.store
    .state as TableState_ColumnVisibility

  const visibleColumns = columns.filter(
    (column) => columnVisibility[column.id] !== false
  )

  const allColumnsVisible = dataTable.getIsAllColumnsVisible()
  const someColumnsVisible = dataTable.getIsSomeColumnsVisible()

  return (
    <Combobox
      items={columns}
      multiple
      onValueChange={(value) => {
        dataTable.setColumnVisibility(() => {
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
                dataTable.toggleAllColumnsVisible(checked)
              }}
            />
          </InputGroupAddon>
        </ComboboxInput>

        <ComboboxEmpty>No columns found.</ComboboxEmpty>
        <ComboboxList>
          {(column: Column<TFeatures, TData, unknown>) => (
            <ComboboxItem key={column.id} value={column}>
              {column.columnDef.header as string}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

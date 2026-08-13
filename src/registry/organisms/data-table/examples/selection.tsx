import { type ColumnDef, useTable } from '@tanstack/react-table'
import { Button } from '@/components/atoms/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogScroller,
  DialogTitle,
  DialogTrigger,
} from '@/components/atoms/dialog'
import { DataTable } from '@/components/organisms/data-table/data-table'
import { DataTableCheckboxCell } from '@/components/organisms/data-table/data-table-checkbox-cell'
import { DataTableCheckboxHeader } from '@/components/organisms/data-table/data-table-checkbox-header'
import { dataTableFeatures } from '@/components/organisms/data-table/lib/feature'

interface Row {
  age: number
  firstName: string
  id: string
  lastName: string
}

const columns: ColumnDef<typeof dataTableFeatures, Row>[] = [
  {
    cell: DataTableCheckboxCell,
    header: DataTableCheckboxHeader,
    id: 'selection',
  },
  {
    accessorKey: 'firstName',
    header: 'First name',
    id: 'firstName',
  },
  {
    accessorKey: 'lastName',
    header: 'Last name',
    id: 'lastName',
  },
  {
    accessorKey: 'age',
    header: 'Age',
    id: 'age',
  },
]

const data: Row[] = [
  {
    age: 24,
    firstName: 'tanner',
    id: '1',
    lastName: 'linsley',
  },
  {
    age: 40,
    firstName: 'tandy',
    id: '2',
    lastName: 'miller',
  },
  {
    age: 45,
    firstName: 'joe',
    id: '3',
    lastName: 'dirte',
  },
]

export function DataTableSelection() {
  const table = useTable({
    features: dataTableFeatures,
    columns,
    data,
    initialState: {
      rowSelection: {},
    },
  })

  // Template
  return (
    <Dialog>
      <DialogTrigger render={<Button>Open</Button>} />

      <DialogContent className='w-7xl'>
        <DialogHeader>
          <DialogTitle>Data table demo</DialogTitle>
          <DialogDescription>Selection</DialogDescription>
        </DialogHeader>

        <DialogScroller>
          <DataTable table={table} />
        </DialogScroller>
      </DialogContent>
    </Dialog>
  )
}

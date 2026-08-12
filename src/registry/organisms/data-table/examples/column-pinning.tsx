import {
  type ColumnDef,
  columnPinningFeature,
  tableFeatures,
  useTable,
} from '@tanstack/react-table'
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

interface Row {
  address: string
  age: number
  firstName: string
  hobby: string
  id: string
  lastName: string
}

const features = tableFeatures({
  columnPinningFeature,
})

const columns: ColumnDef<typeof features, Row>[] = [
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
  {
    accessorKey: 'address',
    header: 'Address',
    id: 'address',
  },
  {
    accessorKey: 'hobby',
    header: 'Hobby',
    id: 'hobby',
  },
]

const data: Row[] = [
  {
    address: 'Address 1',
    age: 24,
    firstName: 'tanner',
    hobby: 'Hobby 1',
    id: '1',
    lastName: 'linsley',
  },
  {
    address: 'Address 2',
    age: 40,
    firstName: 'tandy',
    hobby: 'Hobby 2',
    id: '2',
    lastName: 'miller',
  },
  {
    address: 'Address 3',
    age: 45,
    firstName: 'joe',
    hobby: 'Hobby 3',
    id: '3',
    lastName: 'dirte',
  },
]

export function DataTableColumnPinning() {
  const table = useTable({
    columns,
    data,
    features,
  })

  return (
    <Dialog>
      <DialogTrigger render={<Button>Open</Button>} />

      <DialogContent className='w-7xl'>
        <DialogHeader>
          <DialogTitle>Data table</DialogTitle>
          <DialogDescription>Column spinning</DialogDescription>
        </DialogHeader>

        <DialogScroller>
          <DataTable table={table} />
        </DialogScroller>
      </DialogContent>
    </Dialog>
  )
}

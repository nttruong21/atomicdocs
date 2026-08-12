import {
  columnGroupingFeature,
  tableFeatures,
  useTable,
  type ColumnDef,
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
  age: number
  firstName: string
  id: string
  lastName: string
  progress: number
  status: string
  visits: number
}

const features = tableFeatures({
  columnGroupingFeature,
})

const columns: ColumnDef<typeof features, Row>[] = [
  {
    columns: [
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
    ],
    header: () => <div className='text-center'>Name</div>,
    id: 'name',
  },
  {
    columns: [
      {
        accessorKey: 'age',
        header: () => 'Age',
        id: 'age',
      },
      {
        columns: [
          {
            accessorKey: 'visits',
            header: () => <span>Visits</span>,
            id: 'visits',
          },
          {
            accessorKey: 'status',
            header: 'Status',
            id: 'status',
          },
          {
            accessorKey: 'progress',
            header: 'Profile Progress',
            id: 'progress',
          },
        ],
        header: () => <div className='text-center'>More Info</div>,
        id: 'moreInfo',
      },
    ],
    header: () => <div className='text-center'>Info</div>,
    id: 'info',
  },
]

const data: Row[] = [
  {
    age: 24,
    firstName: 'tanner',
    id: '1',
    lastName: 'linsley',
    progress: 50,
    status: 'In Relationship',
    visits: 100,
  },
  {
    age: 40,
    firstName: 'tandy',
    id: '2',
    lastName: 'miller',
    progress: 80,
    status: 'Single',
    visits: 40,
  },
  {
    age: 45,
    firstName: 'joe',
    id: '3',
    lastName: 'dirte',
    progress: 10,
    status: 'Complicated',
    visits: 20,
  },
]

export function DataTableColumnSpanning() {
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
          <DialogDescription>Column spanning</DialogDescription>
        </DialogHeader>

        <DialogScroller>
          <DataTable table={table} />
        </DialogScroller>
      </DialogContent>
    </Dialog>
  )
}

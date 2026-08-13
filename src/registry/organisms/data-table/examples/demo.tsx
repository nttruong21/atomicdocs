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
import {
  createAppColumnHelper,
  useAppTable,
} from '@/components/organisms/data-table/lib/table'

interface Row {
  age: number
  firstName: string
  id: string
  lastName: string
}

const columnHelper = createAppColumnHelper<Row>()

const columns = columnHelper.columns([
  columnHelper.accessor('firstName', {
    id: 'firstName',
    header: ({ header }) => <header.Base />,
  }),
  columnHelper.accessor('lastName', {
    id: 'lastName',
    header: ({ header }) => <header.Base />,
  }),
  columnHelper.accessor('age', {
    id: 'age',
    header: ({ header }) => <header.Base />,
  }),
])

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

export function DataTableDemo() {
  const table = useAppTable({
    columns,
    data,
  })

  return (
    <Dialog>
      <DialogTrigger render={<Button>Open</Button>} />

      <DialogContent className='w-7xl'>
        <DialogHeader>
          <DialogTitle>Data table</DialogTitle>
          <DialogDescription>Demo</DialogDescription>
        </DialogHeader>

        <DialogScroller>
          <DataTable table={table} />
        </DialogScroller>
      </DialogContent>
    </Dialog>
  )
}

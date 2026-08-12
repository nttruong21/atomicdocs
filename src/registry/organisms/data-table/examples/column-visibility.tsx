import {
  type ColumnDef,
  columnVisibilityFeature,
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
import { DataTableColumnVisibilitySelect } from '@/components/organisms/data-table/data-table-column-visibility-select'

interface Row {
  age: number
  firstName: string
  id: string
  lastName: string
}

const features = tableFeatures({
  columnVisibilityFeature,
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

export function DataTableColumnVisibility() {
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
          <DialogDescription>Column visibility</DialogDescription>
        </DialogHeader>

        <DialogScroller>
          <div className='space-y-4'>
            <div className='flex justify-end'>
              <DataTableColumnVisibilitySelect table={table} />
            </div>
            <DataTable table={table} />
          </div>
        </DialogScroller>
      </DialogContent>
    </Dialog>
  )
}

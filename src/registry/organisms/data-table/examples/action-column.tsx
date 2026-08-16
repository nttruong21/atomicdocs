import { FilePenLineIcon, SearchIcon, TrashIcon } from 'lucide-react'
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
    header: ({ header }) => <header.Base label='First name' />,
    cell: ({ cell }) => <cell.Text value={cell.getValue()} />,
  }),
  columnHelper.accessor('lastName', {
    id: 'lastName',
    header: ({ header }) => <header.Base label='Last name' />,
    cell: ({ cell }) => <cell.Text value={cell.getValue()} />,
  }),
  columnHelper.accessor('age', {
    id: 'age',
    header: ({ header }) => <header.Base label='Age' />,
    cell: ({ cell }) => <cell.Number value={cell.getValue()} />,
  }),
  columnHelper.display({
    id: 'action',
    header: 'Action',
    cell: ({ cell }) => (
      <cell.Action
        menus={[
          {
            icon: <SearchIcon />,
            id: 'search',
            label: 'View',
            onClick: () => {
              console.log('Clicked ...')
            },
            type: 'event',
          },
          {
            icon: <FilePenLineIcon />,
            id: 'update',
            label: 'Update',
            onClick: () => {
              console.log('Clicked ...')
            },
            type: 'event',
          },
          {
            icon: <TrashIcon />,
            id: 'delete',
            label: 'Delete',
            onClick: () => {
              console.log('Clicked ...')
            },
            type: 'event',
            variant: 'destructive',
          },
        ]}
      />
    ),
    enableHiding: false,
    enableResizing: false,
    maxSize: 40,
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

export function DataTableActionCellDemo() {
  const table = useAppTable({
    columns,
    data,
    initialState: {
      columnPinning: {
        start: [],
        end: ['action'],
      },
    },
  })

  return (
    <table.AppTable>
      <table.Container>
        <table.Table>
          <table.Header />
          <table.Body />
        </table.Table>
      </table.Container>
    </table.AppTable>
  )
}

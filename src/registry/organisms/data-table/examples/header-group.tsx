import {
  createAppColumnHelper,
  useAppTable,
} from '@/components/organisms/data-table/lib/table'

interface Row {
  age: number
  firstName: string
  id: string
  lastName: string
  progress: number
  status: string
  visits: number
}

const columnHelper = createAppColumnHelper<Row>()

const columns = columnHelper.columns([
  columnHelper.group({
    id: 'name',
    header: 'Name',
    meta: {
      className: 'text-center',
    },
    columns: columnHelper.columns([
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
    ]),
  }),
  columnHelper.accessor('age', {
    id: 'age',
    header: ({ header }) => <header.Base label='Age' />,
    cell: ({ cell }) => <cell.Number value={cell.getValue()} />,
  }),
  columnHelper.group({
    id: 'info',
    header: 'Info',
    meta: {
      className: 'text-center',
    },
    columns: columnHelper.columns([
      columnHelper.accessor('visits', {
        id: 'visits',
        header: ({ header }) => <header.Base label='Visits' />,
        cell: ({ cell }) => <cell.Number value={cell.getValue()} />,
      }),
      columnHelper.accessor('status', {
        id: 'status',
        header: ({ header }) => <header.Base label='Status' />,
        cell: ({ cell }) => <cell.Text value={cell.getValue()} />,
      }),
      columnHelper.accessor('progress', {
        id: 'progress',
        header: ({ header }) => <header.Base label='Progress' />,
        cell: ({ cell }) => <cell.Number value={cell.getValue()} />,
      }),
    ]),
  }),
])

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

export function DataTableHeaderGroup() {
  const table = useAppTable({
    columns,
    data,
    // manualGrouping: true, // if using manual server-side grouping
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

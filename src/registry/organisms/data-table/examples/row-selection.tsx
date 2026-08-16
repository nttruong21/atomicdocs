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
  columnHelper.display({
    id: 'selection',
    header: ({ header }) => <header.Checkbox />,
    cell: ({ cell }) => <cell.Checkbox />,
    minSize: 40,
    maxSize: 40,
  }),
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

export function DataTableRowSelection() {
  const table = useAppTable({
    columns,
    data,
  })

  return (
    <table.AppTable>
      <table.Container>
        <table.Table>
          <table.Header />
          <table.Body />
        </table.Table>
        <table.RowSelection />
      </table.Container>
    </table.AppTable>
  )
}

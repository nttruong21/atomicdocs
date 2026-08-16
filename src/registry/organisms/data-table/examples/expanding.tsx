import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/atoms/button'
import {
  createAppColumnHelper,
  useAppTable,
} from '@/components/organisms/data-table/lib/table'
import { cn } from '@/utils/ui'

type Row = {
  id: string
  firstName: string
  lastName: string
  age: number
} & {
  subRows: Row[]
}

const columnHelper = createAppColumnHelper<Row>()

const columns = columnHelper.columns([
  columnHelper.display({
    id: 'expanding',
    cell: ({ row }) => {
      if (row.getCanExpand()) {
        const style = {
          marginLeft: `${row.depth * 16}px`,
        }

        return (
          <Button
            className={cn('gap-1 p-0 [&>svg]:transition-transform', {
              '[&>svg]:rotate-90': row.getIsExpanded(),
            })}
            onClick={row.getToggleExpandedHandler()}
            size='icon'
            style={style}
            variant='ghost'
          >
            <ChevronRight />
          </Button>
        )
      }

      return null
    },
  }),
  columnHelper.display({
    id: 'no',
    header: 'No',
    cell: ({ row }) => {
      const parentRowIndexes = row
        .getParentRows()
        .map((parentRow) => parentRow.index + 1)
      const index = [...parentRowIndexes, row.index + 1].join('.')
      return index
    },
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
    subRows: [
      {
        age: 5,
        firstName: 'Jane',
        id: '1.1',
        lastName: 'test',
        subRows: [
          {
            age: 0,
            firstName: 'third',
            id: '1.1.1',
            lastName: 'child',
            subRows: [],
          },
          {
            age: 0,
            firstName: 'test 1',
            id: '1.1.2',
            lastName: 'test 2',
            subRows: [
              {
                age: 0,
                firstName: 'test 3',
                id: '1.1.2.1',
                lastName: 'test 4',
                subRows: [],
              },
              {
                age: 0,
                firstName: 'test 5',
                id: '1.1.2.2',
                lastName: 'test 6',
                subRows: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    age: 40,
    firstName: 'tandy',
    id: '2',
    lastName: 'miller',
    subRows: [
      { age: 10, firstName: 'Jim', id: '2.1', lastName: 'test', subRows: [] },
    ],
  },
  {
    age: 45,
    firstName: 'joe',
    id: '3',
    lastName: 'dirte',
    subRows: [],
  },
]

export function DataTableExpanding() {
  const table = useAppTable({
    columns,
    data,
    autoResetExpanded: false,
    getSubRows: (row) => row.subRows,
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

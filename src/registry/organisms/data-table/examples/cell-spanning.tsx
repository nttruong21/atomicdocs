import {
  createAppColumnHelper,
  useAppTable,
} from '@/components/organisms/data-table/lib/table'

type ShiftStatus = 'Approved' | 'Pending' | 'Rejected'

interface Shift {
  id: string
  region: 'North' | 'South' | 'East' | 'West'
  team: string
  shift: 'Morning' | 'Evening' | 'Night'
  employee: string
  hours: number
  status: ShiftStatus
}

const columnHelper = createAppColumnHelper<Shift>()

const columns = columnHelper.columns([
  columnHelper.accessor('region', {
    header: 'Region',
    spanRows: true,
  }),
  columnHelper.accessor('team', {
    header: 'Team',
    spanRows: true,
  }),
  columnHelper.accessor('shift', {
    header: 'Shift',
    // The predicate form: shifts only merge while the table is sorted by the
    // shift column, so the predicate itself is visibly reactive.
    spanRows: ({ column, value, anchorValue }) =>
      column.getIsSorted() !== false && value === anchorValue,
  }),
  columnHelper.accessor('employee', {
    header: 'Employee',
  }),
  columnHelper.accessor('hours', {
    header: 'Hours',
  }),
  columnHelper.accessor('status', {
    header: 'Status',
  }),
])

const data: Shift[] = [
  {
    id: '0-0-0',
    region: 'North',
    team: 'Alpha',
    shift: 'Morning',
    employee: 'Dr. Joy Parisian',
    hours: 11,
    status: 'Pending',
  },
  {
    id: '0-0-1',
    region: 'North',
    team: 'Alpha',
    shift: 'Evening',
    employee: 'Dr. Addie Cremin I',
    hours: 11,
    status: 'Approved',
  },
  {
    id: '0-0-2',
    region: 'North',
    team: 'Alpha',
    shift: 'Night',
    employee: 'Miss Tierra Wunsch',
    hours: 4,
    status: 'Pending',
  },
  {
    id: '0-1-0',
    region: 'North',
    team: 'Bravo',
    shift: 'Morning',
    employee: 'Damaris Wuckert',
    hours: 10,
    status: 'Rejected',
  },
  {
    id: '0-1-1',
    region: 'North',
    team: 'Bravo',
    shift: 'Evening',
    employee: 'Giovanni Beatty PhD',
    hours: 11,
    status: 'Pending',
  },
  {
    id: '0-1-2',
    region: 'North',
    team: 'Bravo',
    shift: 'Night',
    employee: 'Gaston Fahey',
    hours: 5,
    status: 'Pending',
  },
  {
    id: '0-2-0',
    region: 'North',
    team: 'Charlie',
    shift: 'Morning',
    employee: 'Ms. Joanna Feeney',
    hours: 6,
    status: 'Rejected',
  },
  {
    id: '0-2-1',
    region: 'North',
    team: 'Charlie',
    shift: 'Evening',
    employee: 'Dr. Novella McCullough',
    hours: 7,
    status: 'Approved',
  },
  {
    id: '0-2-2',
    region: 'North',
    team: 'Charlie',
    shift: 'Night',
    employee: 'Ira Lowe-Lockman',
    hours: 7,
    status: 'Approved',
  },
  {
    id: '1-0-0',
    region: 'South',
    team: 'Alpha',
    shift: 'Morning',
    employee: 'Cruz Yundt',
    hours: 8,
    status: 'Rejected',
  },
  {
    id: '1-0-1',
    region: 'South',
    team: 'Alpha',
    shift: 'Evening',
    employee: 'Ms. Vena VonRueden',
    hours: 7,
    status: 'Rejected',
  },
  {
    id: '1-0-2',
    region: 'South',
    team: 'Alpha',
    shift: 'Night',
    employee: 'Ophelia Tremblay',
    hours: 6,
    status: 'Rejected',
  },
  {
    id: '1-1-0',
    region: 'South',
    team: 'Bravo',
    shift: 'Morning',
    employee: 'Mrs. Candida Homenick',
    hours: 5,
    status: 'Pending',
  },
  {
    id: '1-1-1',
    region: 'South',
    team: 'Bravo',
    shift: 'Evening',
    employee: 'Phil Graham',
    hours: 9,
    status: 'Rejected',
  },
  {
    id: '1-1-2',
    region: 'South',
    team: 'Bravo',
    shift: 'Night',
    employee: 'Maurine Kozey',
    hours: 5,
    status: 'Pending',
  },
  {
    id: '1-2-0',
    region: 'South',
    team: 'Charlie',
    shift: 'Morning',
    employee: 'Erika Satterfield',
    hours: 7,
    status: 'Rejected',
  },
  {
    id: '1-2-1',
    region: 'South',
    team: 'Charlie',
    shift: 'Evening',
    employee: 'Loretta Spencer',
    hours: 7,
    status: 'Pending',
  },
  {
    id: '1-2-2',
    region: 'South',
    team: 'Charlie',
    shift: 'Night',
    employee: 'Branson Bernhard',
    hours: 12,
    status: 'Approved',
  },
  {
    id: '2-0-0',
    region: 'East',
    team: 'Alpha',
    shift: 'Morning',
    employee: 'Kellen Bergstrom',
    hours: 5,
    status: 'Pending',
  },
  {
    id: '2-0-1',
    region: 'East',
    team: 'Alpha',
    shift: 'Evening',
    employee: 'Drew Rohan',
    hours: 10,
    status: 'Approved',
  },
  {
    id: '2-0-2',
    region: 'East',
    team: 'Alpha',
    shift: 'Night',
    employee: 'Mr. Branson Rempel',
    hours: 10,
    status: 'Rejected',
  },
  {
    id: '2-1-0',
    region: 'East',
    team: 'Bravo',
    shift: 'Morning',
    employee: 'Orin Hackett',
    hours: 10,
    status: 'Approved',
  },
  {
    id: '2-1-1',
    region: 'East',
    team: 'Bravo',
    shift: 'Evening',
    employee: 'Derek Hane',
    hours: 10,
    status: 'Approved',
  },
  {
    id: '2-1-2',
    region: 'East',
    team: 'Bravo',
    shift: 'Night',
    employee: 'Jaylan Roberts',
    hours: 10,
    status: 'Pending',
  },
  {
    id: '2-2-0',
    region: 'East',
    team: 'Charlie',
    shift: 'Morning',
    employee: 'Virginia Littel',
    hours: 5,
    status: 'Approved',
  },
  {
    id: '2-2-1',
    region: 'East',
    team: 'Charlie',
    shift: 'Evening',
    employee: 'Hailey Hyatt III',
    hours: 6,
    status: 'Approved',
  },
  {
    id: '2-2-2',
    region: 'East',
    team: 'Charlie',
    shift: 'Night',
    employee: 'Henri Smith',
    hours: 12,
    status: 'Pending',
  },
  {
    id: '3-0-0',
    region: 'West',
    team: 'Alpha',
    shift: 'Morning',
    employee: 'Miss Nakia Heathcote',
    hours: 10,
    status: 'Approved',
  },
  {
    id: '3-0-1',
    region: 'West',
    team: 'Alpha',
    shift: 'Evening',
    employee: 'Amanda Barton',
    hours: 6,
    status: 'Approved',
  },
  {
    id: '3-0-2',
    region: 'West',
    team: 'Alpha',
    shift: 'Night',
    employee: 'Cordie Toy Jr.',
    hours: 11,
    status: 'Rejected',
  },
  {
    id: '3-1-0',
    region: 'West',
    team: 'Bravo',
    shift: 'Morning',
    employee: "Elnora O'Hara",
    hours: 10,
    status: 'Approved',
  },
  {
    id: '3-1-1',
    region: 'West',
    team: 'Bravo',
    shift: 'Evening',
    employee: 'Marjory Hickle',
    hours: 8,
    status: 'Approved',
  },
  {
    id: '3-1-2',
    region: 'West',
    team: 'Bravo',
    shift: 'Night',
    employee: 'Creola Swift',
    hours: 7,
    status: 'Approved',
  },
  {
    id: '3-2-0',
    region: 'West',
    team: 'Charlie',
    shift: 'Morning',
    employee: 'Mr. Micheal Fahey',
    hours: 10,
    status: 'Approved',
  },
  {
    id: '3-2-1',
    region: 'West',
    team: 'Charlie',
    shift: 'Evening',
    employee: 'Micah Bernier',
    hours: 7,
    status: 'Rejected',
  },
  {
    id: '3-2-2',
    region: 'West',
    team: 'Charlie',
    shift: 'Night',
    employee: 'Christophe Roberts',
    hours: 7,
    status: 'Rejected',
  },
]

export function DataTableActionCellDemo() {
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
      </table.Container>
    </table.AppTable>
  )
}

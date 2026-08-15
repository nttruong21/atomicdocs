// oxlint-disable import/no-cycle
import { createTableHook, type RowData } from '@tanstack/react-table'
import DataTableHeaderBase from '../header/base'
import DataTableHeaderCheckbox from '../header/checkbox'
import DataTableHeaderResizeHandler from '../header/resize-handler'
import DataTableAdditionalInfo from '../table/additional-info'
import DataTableBody from '../table/body'
import DataTableContainer from '../table/container'
import DataTableFooter from '../table/footer'
import DataTableHeader from '../table/header'
import DataTablePagination from '../table/pagination'
import DataTableRowSelection from '../table/row-selection'
import DataTableTable from '../table/table'
import { dataTableFeatures } from './feature'

export const {
  createAppColumnHelper,
  useAppTable,
  useTableContext,
  useCellContext,
  useHeaderContext,
} = createTableHook({
  features: dataTableFeatures,
  // defaultColumn: {
  //   size: 120,
  //   minSize: 120,
  //   maxSize: 800,
  // },
  columnResizeMode: 'onChange' as const,
  tableComponents: {
    Container: DataTableContainer,
    Table: DataTableTable,
    Header: DataTableHeader,
    Body: DataTableBody,
    Footer: DataTableFooter,
    AdditionalInfo: DataTableAdditionalInfo,
    RowSelection: DataTableRowSelection,
    Pagination: DataTablePagination,
    // FilterList: DataTableFilterList,
    // SortList: DataTableSortList,
    // ViewOptions: DataTableViewOptions,
  },
  headerComponents: {
    Base: DataTableHeaderBase,
    Checkbox: DataTableHeaderCheckbox,
    ResizeHandler: DataTableHeaderResizeHandler,
  },
  cellComponents: {
    // SelectCell,
    // TextCell,
    // AgeCell,
    // StatusCell,
    // DepartmentCell,
    // DateCell,
    // GroupedCell,
    // ActionsCell,
  },
})

export type AppDataTable<TData extends RowData> = ReturnType<
  typeof useTableContext<TData>
>

// oxlint-disable import/no-cycle
import { createTableHook, type RowData } from '@tanstack/react-table'
import DataTableActionCell from '../cell/action'
import DataTableCheckboxCell from '../cell/checkbox'
import DataTableNumberCell from '../cell/number'
import DataTableTextCell from '../cell/text'
import DataTableBaseHeader from '../header/base'
import DataTableCheckboxHeader from '../header/checkbox'
import DataTableAdditionalInfo from '../table/additional-info'
import DataTableBody from '../table/body'
import DataTableColumnVisibilitySelection from '../table/column-visibility-selection'
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
    ColumnVisibilitySelection: DataTableColumnVisibilitySelection,
    // FilterList: DataTableFilterList,
    // SortList: DataTableSortList,
    // ViewOptions: DataTableViewOptions,
  },
  headerComponents: {
    Base: DataTableBaseHeader,
    Checkbox: DataTableCheckboxHeader,
  },
  cellComponents: {
    Text: DataTableTextCell,
    Number: DataTableNumberCell,
    Checkbox: DataTableCheckboxCell,
    Action: DataTableActionCell,
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

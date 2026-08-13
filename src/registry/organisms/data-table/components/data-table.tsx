import type { RowData } from '@tanstack/react-table'
import type { ReactNode } from 'react'
import { Table } from '@/components/atoms/table'
import { LoadingOverlay } from '@/components/molecules/loading-overlay'
import { cn } from '@/utils/ui'
import DataTableAdditionalInfo from './data-table-additional-info'
import DataTableBody from './data-table-body'
import DataTableFooter from './data-table-footer'
import DataTableHeader from './data-table-header'
import DataTablePagination from './data-table-pagination'
import DataTableRowSelect from './data-table-row-select'
import type { AppDataTable } from './lib/table'

export interface DataTableProps<TData extends RowData> {
  className?: {
    container?: string
    table?: string
    tableHeader?: string
    tableBody?: string
    tableFooter?: string
    tablePagination?: string
  }
  error?: boolean
  id?: string
  loading?: boolean
  onRenderAdditionalRow?: (table: AppDataTable<TData>) => ReactNode
  onRenderSubComponent?: (
    row: ReturnType<AppDataTable<TData>['getRow']>
  ) => ReactNode
  showFooter?: boolean
  showPagination?: boolean
  table: AppDataTable<TData>
}

export function DataTable<TData extends RowData>({
  id,
  table,
  loading = false,
  error = false,
  showFooter = false,
  showPagination = true,
  className,
  onRenderSubComponent,
  onRenderAdditionalRow,
}: DataTableProps<TData>) {
  return (
    <table.AppTable>
      <div
        id={id}
        className={cn(
          'flex max-h-[calc(100dvh-2rem)] w-full flex-col overflow-hidden rounded-md border',
          className?.container
        )}
      >
        <Table className={className?.table}>
          {/* Table header */}
          <DataTableHeader className={className?.tableHeader} />

          {/* Table body */}
          <DataTableBody
            className={className?.tableBody}
            onRenderAdditionalRow={onRenderAdditionalRow}
            onRenderSubComponent={onRenderSubComponent}
          />

          {/* Table footer */}
          {showFooter && <DataTableFooter className={className?.tableFooter} />}
        </Table>

        {/* Additional info */}
        <DataTableAdditionalInfo error={error} loading={loading} />

        {/* Row select */}
        <DataTableRowSelect />

        {/* Pagination */}
        {showPagination && (
          <DataTablePagination className={className?.tablePagination} />
        )}

        {/* Loading overlay */}
        <LoadingOverlay loading={loading} />
      </div>
    </table.AppTable>
  )
}

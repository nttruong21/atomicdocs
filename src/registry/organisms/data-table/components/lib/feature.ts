import {
  columnFacetingFeature,
  columnFilteringFeature,
  columnGroupingFeature,
  columnOrderingFeature,
  columnPinningFeature,
  columnResizingFeature,
  columnSizingFeature,
  columnVisibilityFeature,
  createExpandedRowModel,
  createFacetedRowModel,
  createFacetedUniqueValues,
  createFilteredRowModel,
  createGroupedRowModel,
  createPaginatedRowModel,
  createSortedRowModel,
  globalFilteringFeature,
  metaHelper,
  rowAggregationFeature,
  rowExpandingFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowSortingFeature,
  tableFeatures,
} from '@tanstack/react-table'
import type { Dispatch, SetStateAction } from 'react'

export interface DataTableColumnMeta {
  className?: string
}

export interface DataTableMeta {
  isSelectAllRows?: boolean
  setIsSelectAllRows?: Dispatch<SetStateAction<boolean>>
}

export const dataTableFeatures = tableFeatures({
  rowAggregationFeature,
  rowSortingFeature,
  rowPaginationFeature,
  rowSelectionFeature,
  rowExpandingFeature,
  columnFilteringFeature,
  columnFacetingFeature,
  columnOrderingFeature,
  columnVisibilityFeature,
  columnSizingFeature,
  columnResizingFeature,
  columnPinningFeature,
  columnGroupingFeature,
  globalFilteringFeature,
  columnMeta: metaHelper<DataTableColumnMeta>(),
  tableMeta: metaHelper<DataTableMeta>(),
  filteredRowModel: createFilteredRowModel(),
  facetedRowModel: createFacetedRowModel(),
  facetedUniqueValues: createFacetedUniqueValues(),
  paginatedRowModel: createPaginatedRowModel(),
  sortedRowModel: createSortedRowModel(),
  groupedRowModel: createGroupedRowModel(),
  expandedRowModel: createExpandedRowModel(),
  //   filterFns: { fuzzy: fuzzyFilterFn },
  //   sortFns: {
  //     alphanumeric: sortFn_alphanumeric,
  //     datetime: sortFn_datetime,
  //     text: sortFn_text,
  //   },
  //   aggregationFns: {
  //     mean: aggregationFn_mean,
  //     min: aggregationFn_min,
  //   },
})

export type DataTableFeatures = typeof dataTableFeatures

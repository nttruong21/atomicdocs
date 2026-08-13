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

export interface DataTableColumnMeta {
  label?: string
  variant?: 'text' | 'number' | 'date' | 'boolean' | 'select' | 'multi-select'
  options?: { label: string; value: string; count?: number }[]
  className?: string
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

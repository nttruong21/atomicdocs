import {
  type DefaultError,
  type GetNextPageParamFunction,
  type InfiniteData,
  type QueryKey,
  type UseInfiniteQueryResult,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query'
import { useDebounce } from '@uidotdev/usehooks'
import { type UIEvent, useMemo, useState } from 'react'
import { executeAxios } from '@/lib/axios'
import type { OptionsInfiniteQueryData, PaginationQueryData } from '@/types/api'
import type { Option } from '@/types/base'

function resolveApiPath(
  originalApiPath: string,
  dependencyFieldsValue?: Record<string, unknown>
) {
  let apiPath = originalApiPath
  for (const [fieldName, value] of Object.entries(
    dependencyFieldsValue ?? {}
  )) {
    if (typeof value === 'number' || typeof value === 'string') {
      apiPath = apiPath.replace(`{${fieldName}}`, value.toString())
    }
  }
  return apiPath
}

// Use get options query
export const useGetOptionsQuery = ({
  originalApiPath,
  dependencyFieldsValue,
}: {
  originalApiPath: string
  dependencyFieldsValue?: Record<string, unknown>
}) => {
  const apiPath = resolveApiPath(originalApiPath, dependencyFieldsValue)
  const enabled = !apiPath.includes('/{')

  const getOptionsQuery = useQuery<{
    responseData: {
      rows: Option[]
    }
  }>({
    enabled,
    queryFn: ({ signal }) =>
      executeAxios({ method: 'GET', signal, url: apiPath }),
    queryKey: apiPath.split('?'),
  })

  const options = useMemo<Option[]>(
    () =>
      getOptionsQuery.data?.responseData?.rows.map((option) => ({
        label:
          typeof option.label === 'string'
            ? option.label
            : JSON.stringify(option.label),
        value: option.value,
      })) ?? [],
    [getOptionsQuery.data]
  )

  return {
    getOptionsQuery,
    options,
  }
}

// Infinite query page size
export const infiniteQueryPageSize = 100

// Get next page param
export const getNextPageParam: GetNextPageParamFunction<
  number,
  PaginationQueryData
> = (queryFn, _, page) => {
  const {
    responseData: { count, pageSize },
  } = queryFn
  const queryPage = page as unknown as number
  const totalPage = Math.ceil(count / pageSize)

  if (!totalPage || queryPage === totalPage) {
    return null
  }
  return queryPage + 1
}

// Fetch next page
export function fetchNextPage({
  event,
  infiniteQuery,
}: {
  event: UIEvent<HTMLDivElement>
  infiniteQuery: UseInfiniteQueryResult
}) {
  const { scrollTop, offsetHeight, scrollHeight } =
    event.target as HTMLDivElement
  if (
    scrollTop + offsetHeight >= scrollHeight - 28 * 20 &&
    !infiniteQuery.isFetchingNextPage &&
    infiniteQuery.hasNextPage
  ) {
    infiniteQuery.fetchNextPage()
  }
}

// Use get options infinite query
export function useGetOptionsInfiniteQuery({
  originalApiPath,
  dependencyFieldsValue,
  selectedValue,
  valueAsLabel = false,
}: {
  originalApiPath: string
  selectedValue: string | null | undefined
  dependencyFieldsValue?: Record<string, unknown>
  valueAsLabel?: boolean
}) {
  const apiPath = resolveApiPath(originalApiPath, dependencyFieldsValue)
  const enabled = !apiPath.includes('/{')
  const [searchKeyword, setSearchKeyword] = useState('')

  const debouncedSearchKeyword = useDebounce(
    valueAsLabel ? selectedValue?.trim() : searchKeyword.trim(),
    400
  )

  const getOptionsInfiniteQuery = useInfiniteQuery<
    OptionsInfiniteQueryData,
    DefaultError,
    InfiniteData<OptionsInfiniteQueryData>,
    QueryKey,
    number
  >({
    enabled,
    getNextPageParam,
    initialPageParam: 1,
    queryFn: ({ signal, pageParam }) =>
      executeAxios({
        method: 'GET',
        signal,
        url: valueAsLabel
          ? `${apiPath}${apiPath?.includes('?') ? '&' : '?'}page=${pageParam}&pageSize=${infiniteQueryPageSize}${debouncedSearchKeyword ? `&searchQuery=${debouncedSearchKeyword}` : ''}`
          : `${apiPath}${apiPath?.includes('?') ? '&' : '?'}page=${pageParam}&pageSize=${infiniteQueryPageSize}${selectedValue ? `&preSelected=${selectedValue}` : ''}${debouncedSearchKeyword ? `&searchQuery=${debouncedSearchKeyword}` : ''}`,
      }),
    queryKey: [...apiPath.split('?'), debouncedSearchKeyword],
  })

  const options = useMemo<Option[]>(
    () =>
      getOptionsInfiniteQuery.data?.pages.flatMap(
        (page) => page.responseData.rows
      ) ?? [],
    [getOptionsInfiniteQuery.data]
  )

  return {
    debouncedSearchKeyword,
    getOptionsInfiniteQuery,
    options,
    searchKeyword,
    setSearchKeyword,
  }
}

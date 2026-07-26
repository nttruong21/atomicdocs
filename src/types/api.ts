import type { Option } from '@/types/base'

export interface BaseAPIData<Data> {
  message: string | null
  message_en: string | null
  responseData: Data
  status: 'fail' | 'success'
  statusCode: number
  timeStamp: string
}

export interface Violation {
  code: number
  message: string
  action:
    | {
        location: string
        msg: string
        path: string
        value: string
      }[]
    | null
}

export type QueryData<Data = unknown> = BaseAPIData<Data> & {
  violations: Violation[] | null
}

export type PaginationQueryData<Row = unknown> = QueryData<{
  count: number
  page: number
  pageSize: number
  rows: Row[]
}>

export type OptionsInfiniteQueryData = PaginationQueryData<Option>

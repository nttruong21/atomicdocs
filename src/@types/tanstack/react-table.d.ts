import type { Dispatch, SetStateAction } from 'react'

declare module '@tanstack/react-table' {
  interface TableMeta<TFeatures, TData, TValue> {
    isSelectAllRows?: boolean
    setIsSelectAllRows?: Dispatch<SetStateAction<boolean>>
  }

  interface ColumnMeta<TFeatures, TData, TValue> {
    className?: string
  }
}

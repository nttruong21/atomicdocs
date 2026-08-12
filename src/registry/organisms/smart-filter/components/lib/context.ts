import { createContext, useContext } from 'react'
import type { Filter } from './base'
import type {
  AdvancedFilterFormValueOutput,
  BasicSearchFormValueOutput,
} from './form'

export interface SmartFilterContextValue {
  id: string
  filters: Filter[]
  setFilters: (
    value:
      | BasicSearchFormValueOutput['keyword']
      | AdvancedFilterFormValueOutput['filters']
  ) => void
}

export const SmartFilterContext = createContext<SmartFilterContextValue | null>(
  null
)

export const useSmartFilterContext = () => {
  const context = useContext(SmartFilterContext)
  if (!context) {
    throw new Error('useFiltersContext should be used within the SmartFilter')
  }
  return context
}

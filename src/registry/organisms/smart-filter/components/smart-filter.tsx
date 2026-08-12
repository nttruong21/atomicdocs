import { ListFilterIcon, SearchIcon } from 'lucide-react'
import { useMemo, useState } from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/atoms/tabs'
import AdvancedFilter from './advanced-filter'
import BasicSearch from './basic-search'
import type { Filter } from './lib/base'
import { SmartFilterContext } from './lib/context'
import type {
  AdvancedFilterFormValueOutput,
  BasicSearchFormValueOutput,
} from './lib/form'

export const modes = {
  BasicSearch: 'basic-search',
  AdvancedFilter: 'advanced-filter',
} as const

export type Mode = (typeof modes)[keyof typeof modes]

export interface SmartFilterProps {
  filters?: Filter[]
  id?: string
  isHideSearchMode?: boolean
  setFilters: (
    value:
      | BasicSearchFormValueOutput['keyword']
      | AdvancedFilterFormValueOutput['filters']
  ) => void
}

const defaultFilters: Filter[] = []

export function SmartFilter({
  id = 'smart-form',
  filters = defaultFilters,
  isHideSearchMode = false,
  setFilters,
}: SmartFilterProps) {
  const contextValue = useMemo(() => {
    return { filters, id, setFilters }
  }, [filters, id, setFilters])

  return (
    <SmartFilterContext.Provider value={contextValue}>
      <SmartFilterContent
        filters={filters}
        isHideSearchMode={isHideSearchMode}
      />
    </SmartFilterContext.Provider>
  )
}

function SmartFilterContent({
  filters = defaultFilters,
  isHideSearchMode = false,
}: Pick<SmartFilterProps, 'filters' | 'isHideSearchMode'>) {
  const [mode, setMode] = useState<Mode>(modes.BasicSearch)

  if (filters.length === 0) {
    return <BasicSearch />
  }

  if (isHideSearchMode) {
    return <AdvancedFilter />
  }

  return (
    <Tabs
      className='flex flex-row items-center gap-2'
      onValueChange={(value) => setMode(value)}
      value={mode}
    >
      <TabsList>
        <TabsTrigger value={modes.BasicSearch}>
          <SearchIcon />
        </TabsTrigger>
        <TabsTrigger value={modes.AdvancedFilter}>
          <ListFilterIcon />
        </TabsTrigger>
      </TabsList>
      <TabsContent value={modes.BasicSearch}>
        <BasicSearch />
      </TabsContent>
      <TabsContent value={modes.AdvancedFilter}>
        <AdvancedFilter />
      </TabsContent>
    </Tabs>
  )
}

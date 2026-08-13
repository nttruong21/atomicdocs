import { Subscribe, type SortDirection } from '@tanstack/react-table'
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronsUpDownIcon,
  EyeOffIcon,
  GroupIcon,
  PinIcon,
  PinOffIcon,
  UngroupIcon,
} from 'lucide-react'
// oxlint-disable import/no-cycle
import { Button } from '@/components/atoms/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/atoms/dropdown-menu'
import { cn } from '@/utils/ui'
import { useHeaderContext, useTableContext } from '../lib/table'

interface DataTableHeaderBaseProps {
  title?: string
  className?: string
}

function getSortIcon(sort: false | SortDirection, canSort: boolean) {
  if (sort === 'asc') {
    return <ArrowUpIcon className='ml-2 size-4' />
  }

  if (sort === 'desc') {
    return <ArrowDownIcon className='ml-2 size-4' />
  }

  if (canSort) {
    return (
      <ChevronsUpDownIcon className='ml-2 size-4 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 group-data-[state=open]:opacity-100' />
    )
  }

  return null
}

export default function DataTableHeaderBase({
  title,
  className,
}: DataTableHeaderBaseProps) {
  const header = useHeaderContext()
  const table = useTableContext()
  const { column } = header

  const displayTitle = column.columnDef.meta?.label ?? title ?? column.id

  const canSort = column.getCanSort()
  const canHide = column.getCanHide()
  const canPin = column.getCanPin()
  const canGroup = column.getCanGroup()

  if (!canSort && !canHide && !canPin && !canGroup) {
    return <div className={cn(className)}>{displayTitle}</div>
  }

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <Subscribe
        source={table.store}
        selector={(s) => ({
          sorting: s.sorting,
          grouping: s.grouping,
          columnPinning: s.columnPinning,
        })}
      >
        {() => {
          const sort = canSort ? column.getIsSorted() : false
          const pinned = canPin ? column.getIsPinned() : false
          const grouped = canGroup ? column.getIsGrouped() : false

          return (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={<Button variant='ghost' size='sm' className='group' />}
              >
                <span>{displayTitle}</span>
                {getSortIcon(sort, canSort)}
              </DropdownMenuTrigger>
              <DropdownMenuContent align='start'>
                {canSort && (
                  <>
                    <DropdownMenuItem
                      onClick={() => column.toggleSorting(false)}
                    >
                      <ArrowUpIcon className='text-muted-foreground/70 mr-2 size-3.5' />
                      Asc
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => column.toggleSorting(true)}
                    >
                      <ArrowDownIcon className='text-muted-foreground/70 mr-2 size-3.5' />
                      Desc
                    </DropdownMenuItem>
                  </>
                )}
                {canGroup && (
                  <>
                    {canSort ? <DropdownMenuSeparator /> : null}
                    <DropdownMenuItem
                      onClick={column.getToggleGroupingHandler()}
                    >
                      {grouped ? (
                        <>
                          <UngroupIcon className='text-muted-foreground/70 mr-2 size-3.5' />
                          Ungroup
                        </>
                      ) : (
                        <>
                          <GroupIcon className='text-muted-foreground/70 mr-2 size-3.5' />
                          Group by
                        </>
                      )}
                    </DropdownMenuItem>
                  </>
                )}
                {canPin && (
                  <>
                    {canSort || canGroup ? <DropdownMenuSeparator /> : null}
                    <DropdownMenuItem
                      onClick={() => column.pin('start')}
                      disabled={pinned === 'start'}
                    >
                      <PinIcon className='text-muted-foreground/70 mr-2 size-3.5' />
                      Pin left
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => column.pin('end')}
                      disabled={pinned === 'end'}
                    >
                      <PinIcon className='text-muted-foreground/70 mr-2 size-3.5 rotate-180' />
                      Pin right
                    </DropdownMenuItem>
                    {pinned ? (
                      <DropdownMenuItem onClick={() => column.pin(false)}>
                        <PinOffIcon className='text-muted-foreground/70 mr-2 size-3.5' />
                        Unpin
                      </DropdownMenuItem>
                    ) : null}
                  </>
                )}
                {canHide && (
                  <>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={() => column.toggleVisibility(false)}
                    >
                      <EyeOffIcon className='text-muted-foreground/70 mr-2 size-3.5' />
                      Hide
                    </DropdownMenuItem>
                  </>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          )
        }}
      </Subscribe>
    </div>
  )
}

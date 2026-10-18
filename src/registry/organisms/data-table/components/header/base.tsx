import { Subscribe, type ColumnPinningPosition } from '@tanstack/react-table'
import {
  ChevronsUpDownIcon,
  EyeOffIcon,
  PinIcon,
  PinOffIcon,
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

function getIcon(pinningPosition: ColumnPinningPosition | false) {
  if (pinningPosition === 'start') {
    return <PinIcon />
  }

  if (pinningPosition === 'end') {
    return <PinIcon className='rotate-180' />
  }

  return (
    <ChevronsUpDownIcon className='group-focus-visible:opacity-100 group-data-[state=open]:opacity-100' />
  )
}

interface DataTableBaseHeaderProps {
  label: string
  className?: string
}

export default function DataTableBaseHeader({
  label,
  className,
}: DataTableBaseHeaderProps) {
  const header = useHeaderContext()
  const table = useTableContext()
  const { column } = header

  const canHide = column.getCanHide()
  const canPin = column.getCanPin()

  if (!canHide && !canPin) {
    return <div className={className}>{label}</div>
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
          const pinningPosition = canPin ? column.getIsPinned() : false

          return (
            <div className='flex items-center gap-1'>
              <span>{label}</span>
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant='ghost' size='icon-sm' className='group' />
                  }
                >
                  {getIcon(pinningPosition)}
                </DropdownMenuTrigger>

                <DropdownMenuContent align='start'>
                  {canPin && (
                    <>
                      <DropdownMenuItem
                        onClick={() => column.pin('start')}
                        disabled={pinningPosition === 'start'}
                      >
                        <PinIcon className='text-muted-foreground/70 mr-2' />
                        Pin left
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => column.pin('end')}
                        disabled={pinningPosition === 'end'}
                      >
                        <PinIcon className='text-muted-foreground/70 mr-2 rotate-180' />
                        Pin right
                      </DropdownMenuItem>
                      {pinningPosition ? (
                        <DropdownMenuItem onClick={() => column.pin(false)}>
                          <PinOffIcon className='text-muted-foreground/70 mr-2' />
                          Unpin
                        </DropdownMenuItem>
                      ) : null}
                    </>
                  )}

                  {canHide && (
                    <>
                      {canPin ? <DropdownMenuSeparator /> : null}
                      <DropdownMenuItem
                        onClick={() => column.toggleVisibility(false)}
                      >
                        <EyeOffIcon className='text-muted-foreground/70 mr-2' />
                        Hide
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          )
        }}
      </Subscribe>
    </div>
  )
}

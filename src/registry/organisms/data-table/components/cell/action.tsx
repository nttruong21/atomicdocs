import { EllipsisVerticalIcon } from 'lucide-react'
import { Fragment, type ReactNode } from 'react'
import { Button } from '@/components/atoms/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  type DropdownMenuItemVariant,
} from '@/components/atoms/dropdown-menu'

export interface BaseMenu {
  icon?: ReactNode
  id: string
  label?: ReactNode
  variant?: DropdownMenuItemVariant
}

export interface LinkMenu extends BaseMenu {
  link: string
  type: 'link'
}

export interface EventMenu extends BaseMenu {
  onClick: () => void
  type: 'event'
}

export interface SlotMenu extends BaseMenu {
  slot: ReactNode
  type: 'slot'
}

export type Menu = LinkMenu | EventMenu | SlotMenu

interface DataTableActionCellProps {
  menus: Menu[]
  loading?: boolean
}

export default function DataTableActionCell({
  menus,
  loading,
}: DataTableActionCellProps) {
  if (!menus.length) {
    return null
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button loading={loading} size='icon' variant='ghost'>
            <EllipsisVerticalIcon />
          </Button>
        }
      />

      <DropdownMenuContent>
        {menus.map((menu) => {
          switch (menu.type) {
            case 'link': {
              return (
                <DropdownMenuItem
                  key={menu.id}
                  render={
                    <a href={menu.link}>
                      {menu.icon}
                      {menu.label}
                    </a>
                  }
                />
              )
            }

            case 'event': {
              return (
                <DropdownMenuItem
                  key={menu.id}
                  onClick={menu.onClick}
                  variant={menu.variant}
                >
                  {menu.icon}
                  {menu.label}
                </DropdownMenuItem>
              )
            }

            case 'slot': {
              return <Fragment key={menu.id}>{menu.slot}</Fragment>
            }

            default: {
              return null
            }
          }
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

import { EditorContent } from '@tiptap/react'
import {
  PlusIcon,
  TableCellsMergeIcon,
  TableCellsSplitIcon,
  TrashIcon,
} from 'lucide-react'
import { type MouseEvent, useCallback, useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/atoms/dropdown-menu'
import { useInternalEditor } from './lib/base'

interface TableDropdownMenu {
  open: boolean
  x: number
  y: number
}

export default function InternalEditorContent() {
  const internalEditor = useInternalEditor()

  const [tableDropdownMenu, setTableDropdownMenu] = useState<TableDropdownMenu>(
    { open: false, x: 0, y: 0 }
  )

  const clickContextMenu = useCallback((e: MouseEvent) => {
    const cell = (e.target as HTMLElement).closest('td, th')
    if (cell) {
      e.preventDefault()
      setTableDropdownMenu({
        open: true,
        x: e.clientX,
        y: e.clientY,
      })
    }
  }, [])

  return (
    <>
      <EditorContent
        className='editor-content dark:bg-input/30 bg-transparent'
        editor={internalEditor}
        onContextMenu={clickContextMenu}
        role='presentation'
      />

      <DropdownMenu
        onOpenChange={(open) =>
          setTableDropdownMenu((prev) => ({ ...prev, open }))
        }
        open={tableDropdownMenu.open}
      >
        <DropdownMenuContent
          align='start'
          side='right'
          style={{
            left: tableDropdownMenu.x,
            position: 'fixed',
            top: tableDropdownMenu.y,
          }}
        >
          <DropdownMenuItem
            onClick={() =>
              internalEditor.chain().focus().addColumnBefore().run()
            }
          >
            <PlusIcon />
            <span className='whitespace-nowrap'>Add column before</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() =>
              internalEditor.chain().focus().addColumnAfter().run()
            }
          >
            <PlusIcon />
            <span className='whitespace-nowrap'>Add column before</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => internalEditor.chain().focus().addRowBefore().run()}
          >
            <PlusIcon />
            <span className='whitespace-nowrap'>Add row above</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => internalEditor.chain().focus().addRowAfter().run()}
          >
            <PlusIcon />
            <span className='whitespace-nowrap'>Add row below</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            onClick={() => internalEditor.chain().focus().deleteTable().run()}
          >
            <TrashIcon />
            <span className='whitespace-nowrap'>Delete table</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => internalEditor.chain().focus().deleteColumn().run()}
          >
            <TrashIcon />
            <span className='whitespace-nowrap'>Delete column</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => internalEditor.chain().focus().deleteRow().run()}
          >
            <TrashIcon />
            <span className='whitespace-nowrap'>Delete row</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => internalEditor.chain().focus().mergeCells().run()}
          >
            <TableCellsMergeIcon />
            <span className='whitespace-nowrap'>Merge cell</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => internalEditor.chain().focus().splitCell().run()}
          >
            <TableCellsSplitIcon />
            <span className='whitespace-nowrap'>Split cell</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

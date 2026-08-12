import { useEditorState } from '@tiptap/react'
import {
  ChevronDownIcon,
  ListIcon,
  ListOrderedIcon,
  ListTodoIcon,
} from 'lucide-react'
import { Button } from '@/components/atoms/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/atoms/dropdown-menu'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/atoms/tooltip'
import { cn } from '@/utils/ui'
import { useInternalEditor } from './lib/base'

export default function ListButton() {
  const internalEditor = useInternalEditor()
  const editorState = useEditorState({
    editor: internalEditor,
    selector: ({ editor }) => ({
      isBulletListActive: editor.isActive('bulletList'),
      isEditable: editor.isEditable,
      isOrderedListActive: editor.isActive('orderedList'),
      isTaskListActive: editor.isActive('taskList'),
    }),
  })

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger
          render={
            <DropdownMenuTrigger
              render={
                <Button
                  className='gap-1'
                  disabled={!editorState.isEditable}
                  variant='ghost'
                >
                  <ListIcon />
                  <ChevronDownIcon />
                </Button>
              }
            />
          }
        />
        <TooltipContent>List</TooltipContent>
      </Tooltip>

      <DropdownMenuContent>
        {/* Bullet list */}
        <DropdownMenuItem
          className={cn({
            'bg-accent text-accent-foreground': editorState.isBulletListActive,
          })}
          onClick={() =>
            internalEditor.chain().focus().toggleBulletList().run()
          }
        >
          <ListIcon />
          <span>Bullet list</span>
          <DropdownMenuShortcut>Ctrl Shift 8</DropdownMenuShortcut>
        </DropdownMenuItem>

        {/* Ordered list */}
        <DropdownMenuItem
          className={cn({
            'bg-accent text-accent-foreground': editorState.isOrderedListActive,
          })}
          onClick={() =>
            internalEditor.chain().focus().toggleOrderedList().run()
          }
        >
          <ListOrderedIcon />
          <span>Ordered list</span>
          <DropdownMenuShortcut>Ctrl Shift 7</DropdownMenuShortcut>
        </DropdownMenuItem>

        {/* Task list */}
        <DropdownMenuItem
          className={cn({
            'bg-accent text-accent-foreground': editorState.isTaskListActive,
          })}
          onClick={() => internalEditor.chain().focus().toggleTaskList().run()}
        >
          <ListTodoIcon />
          <span>Task list</span>
          <DropdownMenuShortcut>Ctrl Shift 9</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

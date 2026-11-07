import type { Editor } from '@tiptap/react'
import { useEditorState } from '@tiptap/react'
import { cn } from 'cn'
import { AlignLeft, ChevronDown } from 'lucide-react'
import { useRef, useTransition } from 'react'
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
import type { CallbackRef, SetExtensions } from './editor'
import { alignments, type Alignment } from './lib/alignment'
import { useInternalEditor } from './lib/base'

const loadTextAlignExtension = () => import('@tiptap/extension-text-align')

function createSetTextAlign(alignment: Alignment) {
  return (editor: Editor) => {
    editor.chain().focus().setTextAlign(alignment).run()
  }
}

export default function TextAlignButton({
  callbackRef,
  setExtensions,
}: {
  setExtensions: SetExtensions
  callbackRef: CallbackRef
}) {
  const internalEditor = useInternalEditor()
  const editorState = useEditorState({
    editor: internalEditor,
    selector: ({ editor }) => ({
      isActive: {
        center: editor.isActive('paragraph', { textAlign: 'center' }),
        justify: editor.isActive('paragraph', { textAlign: 'justify' }),
        left: editor.isActive('paragraph', { textAlign: 'left' }),
        right: editor.isActive('paragraph', { textAlign: 'right' }),
      },
      isEditable: editor.isEditable,
    }),
  })

  const [isPending, startTransition] = useTransition()
  const isExtensionLoadedRef = useRef(false)

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
                  loading={isPending}
                  variant='ghost'
                >
                  <AlignLeft />
                  <ChevronDown />
                </Button>
              }
            />
          }
        />
        <TooltipContent>Text align</TooltipContent>
      </Tooltip>

      <DropdownMenuContent>
        {alignments.map((alignment) => {
          const isActive = editorState.isActive[alignment.value]
          return (
            <DropdownMenuItem
              className={cn({
                'bg-accent text-accent-foreground': isActive,
              })}
              key={alignment.value}
              onClick={() => {
                const setTextAlign = createSetTextAlign(alignment.value)

                if (isExtensionLoadedRef.current) {
                  return setTextAlign(internalEditor)
                }

                // Load extension
                startTransition(async () => {
                  try {
                    const extension = await loadTextAlignExtension()

                    callbackRef.current = setTextAlign

                    setExtensions((prev) => [
                      ...prev,
                      extension.default.configure({
                        types: ['heading', 'paragraph'],
                      }),
                    ])

                    isExtensionLoadedRef.current = true
                  } catch (error) {
                    console.error(
                      'An error occurred when load the TextAlign extension',
                      error
                    )
                  }
                })
              }}
            >
              <alignment.icon />
              <span>{alignment.label}</span>
              <DropdownMenuShortcut
                className={cn({ 'text-accent-foreground': isActive })}
              >
                {alignment.shortcut}
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

import { useEditorState } from '@tiptap/react'
import { TableIcon } from 'lucide-react'
import { useRef, useTransition } from 'react'
import type { CallbackRef, SetExtensions } from './editor'
import { useInternalEditor } from './lib/base'
import TooltipButton from './tooltip-button'

const insertTable: NonNullable<CallbackRef['current']> = (editor) => {
  editor
    .chain()
    .focus()
    .insertTable({ cols: 3, rows: 3, withHeaderRow: true })
    .run()
}

export default function TableButton({
  callbackRef,
  setExtensions,
}: {
  callbackRef: CallbackRef
  setExtensions: SetExtensions
}) {
  const internalEditor = useInternalEditor()
  const editorState = useEditorState({
    editor: internalEditor,
    selector: ({ editor }) => ({
      isEditable: editor.isEditable,
    }),
  })

  const isExtensionLoadedRef = useRef(false)
  const [isPending, startTransition] = useTransition()

  return (
    <TooltipButton
      disabled={!editorState.isEditable}
      Icon={TableIcon}
      label='Table'
      loading={isPending}
      onClick={() => {
        if (isExtensionLoadedRef.current) {
          return insertTable(internalEditor)
        }

        // Load extension
        startTransition(async () => {
          try {
            const { TableKit } = await import('@tiptap/extension-table')
            callbackRef.current = insertTable
            setExtensions((prev) => [
              ...prev,
              TableKit.configure({
                table: { allowTableNodeSelection: true, resizable: true },
              }),
            ])
            isExtensionLoadedRef.current = true
          } catch (error) {
            console.error(
              'An error occurred when load the TableKit extension',
              error
            )
          }
        })
      }}
    />
  )
}

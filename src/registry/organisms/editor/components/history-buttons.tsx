import { useEditorState } from '@tiptap/react'
import { RedoIcon, UndoIcon } from 'lucide-react'
import { useInternalEditor } from './lib/base'
import TooltipButton from './tooltip-button'

export default function HistoryButtons() {
  const internalEditor = useInternalEditor()
  const editorState = useEditorState({
    editor: internalEditor,
    selector: ({ editor }) => ({
      isRedoEnabled: editor.isEditable && editor.can().redo(),
      isUndoEnabled: editor.isEditable && editor.can().undo(),
    }),
  })

  return (
    <div className='flex gap-1'>
      <TooltipButton
        disabled={!editorState.isUndoEnabled}
        Icon={UndoIcon}
        kbd='Ctrl Z'
        label='Undo'
        onClick={() => internalEditor.chain().focus().undo().run()}
      />

      <TooltipButton
        disabled={!editorState.isRedoEnabled}
        Icon={RedoIcon}
        kbd='Ctrl Y'
        label='Redo'
        onClick={() => internalEditor.chain().focus().redo().run()}
      />
    </div>
  )
}

import { useEditorState } from '@tiptap/react'
import { UnderlineIcon } from 'lucide-react'
import { useInternalEditor } from './lib/base'
import TooltipButton from './tooltip-button'

export default function UnderlineButton() {
  const internalEditor = useInternalEditor()
  const editorState = useEditorState({
    editor: internalEditor,
    selector: ({ editor }) => ({
      isActive: editor.isActive('underline'),
      isEditable: editor.isEditable && editor.can().toggleUnderline(),
    }),
  })

  return (
    <TooltipButton
      disabled={!editorState.isEditable}
      Icon={UnderlineIcon}
      isActive={editorState.isActive}
      kbd='Ctrl U'
      label='Underline'
      name='underline'
      onClick={() => internalEditor.chain().focus().toggleUnderline().run()}
    />
  )
}

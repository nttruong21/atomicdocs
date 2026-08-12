import { useEditorState } from '@tiptap/react'
import { BoldIcon } from 'lucide-react'
import { useInternalEditor } from './lib/base'
import TooltipButton from './tooltip-button'

export default function BoldButton() {
  const internalEditor = useInternalEditor()
  const editorState = useEditorState({
    editor: internalEditor,
    selector: ({ editor }) => ({
      isActive: editor.isActive('bold'),
      isEditable: editor.isEditable && editor.can().toggleBold(),
    }),
  })

  return (
    <TooltipButton
      disabled={!editorState.isEditable}
      Icon={BoldIcon}
      isActive={editorState.isActive}
      kbd='Ctrl B'
      label='Bold'
      onClick={() => internalEditor.chain().focus().toggleBold().run()}
    />
  )
}

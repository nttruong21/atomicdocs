import { useEditorState } from '@tiptap/react'
import { StrikethroughIcon } from 'lucide-react'
import { useInternalEditor } from './lib/base'
import TooltipButton from './tooltip-button'

export default function StrikeButton() {
  const internalEditor = useInternalEditor()
  const editorState = useEditorState({
    editor: internalEditor,
    selector: ({ editor }) => ({
      isActive: editor.isActive('strike'),
      isEditable: editor.isEditable && editor.can().toggleStrike(),
    }),
  })

  return (
    <TooltipButton
      disabled={!editorState.isEditable}
      Icon={StrikethroughIcon}
      isActive={editorState.isActive}
      kbd='Ctrl Shift S'
      label='Strike'
      onClick={() => internalEditor.chain().focus().toggleStrike().run()}
    />
  )
}

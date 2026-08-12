import { useEditorState } from '@tiptap/react'
import { QuoteIcon } from 'lucide-react'
import { useInternalEditor } from './lib/base'
import TooltipButton from './tooltip-button'

export default function BlockquoteButton() {
  const internalEditor = useInternalEditor()
  const editorState = useEditorState({
    editor: internalEditor,
    selector: ({ editor }) => ({
      isActive: editor.isActive('blockquote'),
      isEditable: editor.isEditable && editor.can().toggleBlockquote(),
    }),
  })

  return (
    <TooltipButton
      disabled={!editorState.isEditable}
      Icon={QuoteIcon}
      isActive={editorState.isActive}
      kbd='Ctrl Shift B'
      label='Blockquote'
      onClick={() => internalEditor.chain().focus().toggleBlockquote().run()}
    />
  )
}

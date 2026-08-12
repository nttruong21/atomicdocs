import { type Editor, useCurrentEditor } from '@tiptap/react'

export const useInternalEditor = (): Editor => {
  const { editor } = useCurrentEditor()
  if (!editor) {
    throw new Error('useInternalEditor must be used within the EditorContext')
  }
  return editor
}

export const getEditorValue = (
  editor: Editor,
  format: 'html' | 'json' | 'text'
): object | string => {
  switch (format) {
    case 'json': {
      return editor.getJSON()
    }
    case 'html': {
      return editor.isEmpty ? '' : editor.getHTML()
    }
    default: {
      return editor.getText()
    }
  }
}

export const nodeMinWidth = 320

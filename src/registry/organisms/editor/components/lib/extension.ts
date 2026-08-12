import { Color } from '@tiptap/extension-color'
import { Highlight } from '@tiptap/extension-highlight'
import { TaskItem, TaskList } from '@tiptap/extension-list'
import { TextStyle } from '@tiptap/extension-text-style'
import { StarterKit } from '@tiptap/starter-kit'
import CustomImageExtension from '../custom-image-extension'
import FileExtension from '../file-extension'

export const defaultExtensions = [
  StarterKit.configure({
    heading: {
      levels: [1, 2, 3, 4],
    },
    link: {
      autolink: true,
      defaultProtocol: 'https',
      openOnClick: false,
      protocols: ['https'],
    },
  }),
  Highlight.configure({ multicolor: true }),
  Color,
  TaskList,
  TaskItem.configure({
    nested: true,
  }),
  TextStyle,
  // Placeholder.configure({
  //   placeholder: 'Enter content'
  // }),
  CustomImageExtension,
  FileExtension,
  // FileHandler.configure({
  //   allowedMimeTypes: ['image/png', 'image/jpeg', 'image/webp'],
  //   onDrop: (currentEditor, files, pos) => {
  //     files.forEach((file) => {
  //       const fileReader = new FileReader()

  //       fileReader.readAsDataURL(file)
  //       fileReader.onload = () => {
  //         currentEditor
  //           .chain()
  //           .insertContentAt(pos, {
  //             type: 'image',
  //             attrs: {
  //               src: fileReader.result
  //             }
  //           })
  //           .focus()
  //           .run()
  //       }
  //     })
  //   },
  //   onPaste: (currentEditor, files, htmlContent) => {
  //     files.forEach((file) => {
  //       if (htmlContent) {
  //         // if there is htmlContent, stop manual insertion & let other extensions handle insertion via inputRule
  //         // you could extract the pasted file from this url string and upload it to a server for example
  //         console.log(htmlContent)
  //         return false
  //       }

  //       const fileReader = new FileReader()

  //       fileReader.readAsDataURL(file)
  //       fileReader.onload = () => {
  //         currentEditor
  //           .chain()
  //           .insertContentAt(currentEditor.state.selection.anchor, {
  //             type: 'image',
  //             attrs: {
  //               src: fileReader.result
  //             }
  //           })
  //           .focus()
  //           .run()
  //       }
  //     })
  //   }
  // })
]

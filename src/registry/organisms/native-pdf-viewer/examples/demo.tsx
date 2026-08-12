import { NativePDFViewer } from '@/components/organisms/native-pdf-viewer/native-pdf-viewer'

export function NativePdfViewerDemo() {
  return (
    <NativePDFViewer
      className='h-100'
      src='https://pdfobject.com/pdf/sample.pdf'
    />
  )
}

import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  type LucideProps,
} from 'lucide-react'

export type Alignment = 'left' | 'center' | 'right' | 'justify'

export const containerClassNamePerAlignment: Record<Alignment, string> = {
  center: 'justify-center',
  justify: 'justify-stretch',
  left: 'justify-start',
  right: 'justify-end',
}

export const alignments: {
  value: Alignment
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, 'ref'> & React.RefAttributes<SVGSVGElement>
  >
  label: string
  shortcut: string
}[] = [
  {
    icon: AlignLeft,
    label: 'Align left',
    shortcut: 'Ctrl Shift L',
    value: 'left',
  },
  {
    icon: AlignCenter,
    label: 'Align center',
    shortcut: 'Ctrl Shift E',
    value: 'center',
  },
  {
    icon: AlignRight,
    label: 'Align right',
    shortcut: 'Ctrl Shift R',
    value: 'right',
  },
  {
    icon: AlignJustify,
    label: 'Align justify',
    shortcut: 'Ctrl Shift J',
    value: 'justify',
  },
]

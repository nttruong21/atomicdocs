import type { ComponentProps } from 'react'
import { cn } from '@/utils/ui'

export function Table({ className, ...props }: ComponentProps<'table'>) {
  return (
    <div
      className='relative w-full overflow-x-auto'
      data-slot='table-container'
    >
      <table
        className={cn(
          'w-full caption-bottom border-separate border-spacing-0',
          className
        )}
        data-slot='table'
        {...props}
      />
    </div>
  )
}

export function TableHeader({ className, ...props }: ComponentProps<'thead'>) {
  return (
    <thead
      className={cn('[&_tr]:border-b', className)}
      data-slot='table-header'
      {...props}
    />
  )
}

export function TableBody(props: ComponentProps<'tbody'>) {
  return <tbody data-slot='table-body' {...props} />
}

export function TableFooter({ className, ...props }: ComponentProps<'tfoot'>) {
  return (
    <tfoot
      className={cn('bg-muted/50 font-medium', className)}
      data-slot='table-footer'
      {...props}
    />
  )
}

export function TableRow({ className, ...props }: ComponentProps<'tr'>) {
  return (
    <tr
      className={cn('transition-colors', className)}
      data-slot='table-row'
      {...props}
    />
  )
}

export function TableHead({ className, ...props }: ComponentProps<'th'>) {
  return (
    <th
      className={cn(
        'h-10 whitespace-nowrap px-4 py-3 text-left align-middle font-medium text-foreground',
        className
      )}
      data-slot='table-head'
      {...props}
    />
  )
}

export function TableCell({ className, ...props }: ComponentProps<'td'>) {
  return (
    <td
      className={cn('whitespace-nowrap px-4 py-3 align-middle', className)}
      data-slot='table-cell'
      {...props}
    />
  )
}

export function TableCaption({
  className,
  ...props
}: ComponentProps<'caption'>) {
  return (
    <caption
      className={cn('mt-4 text-muted-foreground text-sm', className)}
      data-slot='table-caption'
      {...props}
    />
  )
}

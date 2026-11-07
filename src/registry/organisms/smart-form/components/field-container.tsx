import { cn } from 'cn'
import { Suspense } from 'react'
import {
  Field,
  FieldDescription,
  FieldError,
  type FieldErrorProps,
  FieldLabel,
  type FieldProps,
} from '@/components/atoms/field'
import { Skeleton } from '@/components/atoms/skeleton'
import { useFieldContext } from './lib/form'

export type SmartFormFieldContainerProps = FieldProps & {
  name: string
  required?: boolean
  label?: React.ReactNode
  description?: React.ReactNode
  invalid?: boolean
  errors?: FieldErrorProps['errors']
}

export default function SmartFormFieldContainer({
  label,
  required,
  description,
  invalid,
  errors,
  children,
  className,
  ...props
}: SmartFormFieldContainerProps) {
  const field = useFieldContext()

  return (
    <Field
      className={cn('group/field', className)}
      data-invalid={invalid}
      {...props}
    >
      <FieldLabel htmlFor={`${field.form.formId}-${field.name}`}>
        <span>{label}</span>
        <span className='text-destructive'>{required && '*'}</span>
      </FieldLabel>
      <Suspense fallback={<Skeleton className='h-9' />}>{children}</Suspense>
      {description && <FieldDescription>{description}</FieldDescription>}
      {invalid && <FieldError errors={errors} />}
    </Field>
  )
}

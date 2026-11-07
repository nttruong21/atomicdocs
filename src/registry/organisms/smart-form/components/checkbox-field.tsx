import type { ComponentProps } from 'react'
import { Checkbox } from '@/components/atoms/checkbox'
import SmartFormFieldContainer from './field-container'
import type { BaseSmartFormFieldComponentProps } from './lib/base'
import { useFieldContext } from './lib/form'
import type { CheckboxFieldInputValue } from './lib/schemas/checkbox'

export type CheckboxFieldProps = BaseSmartFormFieldComponentProps & {
  checkboxProps?: Omit<
    ComponentProps<typeof Checkbox>,
    | 'id'
    | 'name'
    | 'disabled'
    | 'required'
    | 'aria-invalid'
    | 'children'
    | 'render'
    | 'checked'
    | 'defaultChecked'
    | 'onCheckedChange'
    | 'onBlur'
  >
}

export default function CheckboxField({
  label,
  disabled,
  checkboxProps,
  ...props
}: CheckboxFieldProps) {
  const field = useFieldContext<CheckboxFieldInputValue>()

  const invalid = field.state.meta.isTouched && !field.state.meta.isValid

  return (
    <SmartFormFieldContainer
      invalid={invalid}
      className='flex-row-reverse'
      errors={field.state.meta.errors}
      label={label}
      name={field.name}
      orientation='horizontal'
      {...props}
    >
      <Checkbox
        aria-invalid={invalid}
        checked={field.state.value}
        disabled={disabled}
        id={`${field.form.formId}-${field.name}`}
        name={field.name}
        onBlur={field.handleBlur}
        onCheckedChange={(checked) => field.handleChange(checked === true)}
        {...checkboxProps}
      />
    </SmartFormFieldContainer>
  )
}

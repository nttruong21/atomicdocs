import type { ComponentProps } from 'react'
import { Input } from '@/components/atoms/input'
import SmartFormFieldContainer from './field-container'
import type { BaseSmartFormFieldComponentProps } from './lib/base'
import { useFieldContext } from './lib/form'
import type { InputFieldInputValue } from './lib/schemas/input'

export type InputFieldProps = BaseSmartFormFieldComponentProps & {
  inputProps?: Omit<
    ComponentProps<typeof Input>,
    | 'id'
    | 'name'
    | 'disabled'
    | 'required'
    | 'aria-invalid'
    | 'children'
    | 'render'
    | 'value'
    | 'defaultValue'
    | 'onChange'
    | 'onBlur'
  >
}

export default function InputField({
  label,
  disabled,
  inputProps,
  ...props
}: InputFieldProps) {
  const field = useFieldContext<InputFieldInputValue>()
  const invalid = field.state.meta.isTouched && !field.state.meta.isValid

  return (
    <SmartFormFieldContainer
      errors={field.state.meta.errors}
      invalid={invalid}
      label={label}
      name={field.name}
      {...props}
    >
      <Input
        placeholder={`Enter ${typeof label === 'string' ? label.toLowerCase() : 'information'}`}
        id={`${field.form.formId}-${field.name}`}
        value={field.state.value}
        aria-invalid={invalid}
        disabled={disabled}
        name={field.name}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        {...inputProps}
      />
    </SmartFormFieldContainer>
  )
}

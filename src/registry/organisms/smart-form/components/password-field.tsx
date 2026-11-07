import type { ComponentProps } from 'react'
import { PasswordInput } from '@/components/molecules/password-input'
import SmartFormFieldContainer from './field-container'
import type { BaseSmartFormFieldComponentProps } from './lib/base'
import { useFieldContext } from './lib/form'
import type { PasswordFieldInputValue } from './lib/schemas/password'

export type PasswordFieldProps = BaseSmartFormFieldComponentProps & {
  passwordInputProps?: Omit<
    ComponentProps<typeof PasswordInput>,
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
    | 'type'
  >
}

export default function PasswordField({
  label,
  disabled,
  passwordInputProps,
  ...props
}: PasswordFieldProps) {
  const field = useFieldContext<PasswordFieldInputValue>()
  const invalid = field.state.meta.isTouched && !field.state.meta.isValid

  return (
    <SmartFormFieldContainer
      errors={field.state.meta.errors}
      invalid={invalid}
      label={label}
      name={field.name}
      {...props}
    >
      <PasswordInput
        placeholder={`Enter ${typeof label === 'string' ? label.toLowerCase() : 'information'}`}
        aria-invalid={invalid}
        disabled={disabled}
        id={`${field.form.formId}-${field.name}`}
        name={field.name}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
        value={field.state.value}
        {...passwordInputProps}
      />
    </SmartFormFieldContainer>
  )
}

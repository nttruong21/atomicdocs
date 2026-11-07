import type { ComponentProps } from 'react'
import { PhoneNumberInput } from '@/components/molecules/phone-number-input'
import SmartFormFieldContainer from './field-container'
import type { BaseSmartFormFieldComponentProps } from './lib/base'
import { useFieldContext } from './lib/form'
import type { PhoneNumberFieldInputValue } from './lib/schemas/phone-number'

export type PhoneNumberFieldProps = BaseSmartFormFieldComponentProps & {
  phoneNumberInputProps?: Omit<
    ComponentProps<typeof PhoneNumberInput>,
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
    | 'onValueChange'
    | 'onBlur'
  >
}

export default function PhoneNumberField({
  label,
  disabled,
  phoneNumberInputProps,
  ...props
}: PhoneNumberFieldProps) {
  const field = useFieldContext<PhoneNumberFieldInputValue>()
  const invalid = field.state.meta.isTouched && !field.state.meta.isValid

  return (
    <SmartFormFieldContainer
      errors={field.state.meta.errors}
      invalid={invalid}
      label={label}
      name={field.name}
      {...props}
    >
      <PhoneNumberInput
        placeholder={`Enter ${typeof label === 'string' ? label.toLowerCase() : 'information'}`}
        aria-invalid={invalid}
        disabled={disabled}
        id={`${field.form.formId}-${field.name}`}
        name={field.name}
        onBlur={field.handleBlur}
        onValueChange={field.handleChange}
        value={field.state.value}
        {...phoneNumberInputProps}
      />
    </SmartFormFieldContainer>
  )
}

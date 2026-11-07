import type { ComponentProps } from 'react'
import { NumberInput } from '@/components/molecules/number-input'
import SmartFormFieldContainer from './field-container'
import type { BaseSmartFormFieldComponentProps } from './lib/base'
import { useFieldContext } from './lib/form'
import type { NumberFieldInputValue } from './lib/schemas/number'

export type NumberFieldProps = BaseSmartFormFieldComponentProps & {
  numberInputProps?: Omit<
    ComponentProps<typeof NumberInput>,
    | 'id'
    | 'name'
    | 'disabled'
    | 'required'
    | 'aria-invalid'
    | 'children'
    | 'render'
    | 'value'
    | 'defaultValue'
    | 'onValueChange'
    | 'onFieldChange'
    | 'onChange'
    | 'onBlur'
    | 'invalid'
    | 'customInput'
    | 'displayType'
  >
}

export default function NumberField({
  label,
  disabled,
  numberInputProps,
  ...props
}: NumberFieldProps) {
  const field = useFieldContext<NumberFieldInputValue>()
  const invalid = field.state.meta.isTouched && !field.state.meta.isValid

  return (
    <SmartFormFieldContainer
      errors={field.state.meta.errors}
      invalid={invalid}
      label={label}
      name={field.name}
      {...props}
    >
      <NumberInput
        placeholder={`Enter ${typeof label === 'string' ? label.toLowerCase() : 'information'}`}
        disabled={disabled}
        id={`${field.form.formId}-${field.name}`}
        invalid={invalid}
        name={field.name}
        onBlur={field.handleBlur}
        onFieldChange={field.handleChange}
        onValueChange={(event) => field.handleChange(event.value)}
        value={field.state.value as number | string}
        {...numberInputProps}
      />
    </SmartFormFieldContainer>
  )
}

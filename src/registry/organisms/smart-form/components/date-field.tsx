import {
  DatePicker,
  type DatePickerProps,
} from '@/components/atoms/date-picker'
import SmartFormFieldContainer from './field-container'
import type { BaseSmartFormFieldComponentProps } from './lib/base'
import { useFieldContext } from './lib/form'
import type { DateFieldInputValue } from './lib/schemas/date'

export type DateFieldProps = BaseSmartFormFieldComponentProps & {
  datePickerProps?: Omit<
    DatePickerProps,
    'value' | 'onValueChange' | 'id' | 'disabled' | 'invalid'
  >
}

export default function DateField({
  label,
  disabled,
  datePickerProps,
  ...props
}: DateFieldProps) {
  const field = useFieldContext<DateFieldInputValue>()
  const invalid = field.state.meta.isTouched && !field.state.meta.isValid

  return (
    <SmartFormFieldContainer
      errors={field.state.meta.errors}
      invalid={invalid}
      label={label}
      name={field.name}
      {...props}
    >
      <DatePicker
        placeholder={`Select ${typeof label === 'string' ? label.toLowerCase() : 'information'}`}
        id={`${field.form.formId}-${field.name}`}
        value={field.state.value}
        invalid={invalid}
        disabled={disabled}
        onValueChange={field.handleChange as DatePickerProps['onValueChange']}
        {...datePickerProps}
      />
    </SmartFormFieldContainer>
  )
}

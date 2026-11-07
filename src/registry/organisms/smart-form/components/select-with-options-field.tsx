import type { ComponentProps } from 'react'
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@/components/atoms/combobox'
import type { Option } from '@/types/base'
import SmartFormFieldContainer from './field-container'
import type { BaseSmartFormFieldComponentProps } from './lib/base'
import { useFieldContext } from './lib/form'
import type { SelectFieldInputValue } from './lib/schemas/select'

export type SelectWithOptionsFieldProps = BaseSmartFormFieldComponentProps & {
  options: Option[]
} & {
  comboboxProps?: Omit<
    ComponentProps<typeof Combobox<Option, false>>,
    | 'value'
    | 'defaultValue'
    | 'onValueChange'
    | 'filteredItems'
    | 'items'
    | 'children'
    | 'multiple'
    | 'disabled'
    | 'name'
    | 'id'
    | 'required'
    | 'inputValue'
    | 'defaultInputValue'
    | 'onInputValueChange'
  >
  comboboxInputProps?: Omit<
    ComponentProps<typeof ComboboxInput>,
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
    | 'data-invalid'
  >
  comboboxContentProps?: Omit<
    ComponentProps<typeof ComboboxContent>,
    'children' | 'render' | 'anchor'
  >
}

export default function SelectWithOptionsField({
  label,
  disabled,
  options,
  comboboxProps,
  comboboxInputProps,
  comboboxContentProps,
  ...props
}: SelectWithOptionsFieldProps) {
  const field = useFieldContext<SelectFieldInputValue>()
  const value = options.find((item) => item.value === field.state.value) ?? null
  const invalid = field.state.meta.isTouched && !field.state.meta.isValid

  return (
    <SmartFormFieldContainer
      errors={field.state.meta.errors}
      invalid={invalid}
      label={label}
      name={field.name}
      {...props}
    >
      <Combobox
        disabled={disabled}
        items={options}
        onValueChange={(event) => {
          field.handleChange(event?.value ?? null)
        }}
        value={value}
        {...comboboxProps}
      >
        <ComboboxInput
          onBlur={field.handleBlur}
          aria-invalid={invalid}
          data-invalid={invalid}
          disabled={disabled}
          id={`${field.form.formId}-${field.name}`}
          placeholder={
            comboboxInputProps?.placeholder ??
            (typeof label === 'string'
              ? `Select ${label.toLowerCase()}`
              : undefined)
          }
          showClear={comboboxInputProps?.showClear ?? true}
          {...comboboxInputProps}
        />
        <ComboboxContent {...comboboxContentProps}>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item: (typeof options)[number]) => (
              <ComboboxItem key={item.value} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </SmartFormFieldContainer>
  )
}

import type { ComponentProps } from 'react'
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from '@/components/atoms/combobox'
import type { Option } from '@/types/base'
import SmartFormFieldContainer from './field-container'
import type { BaseSmartFormFieldComponentProps } from './lib/base'
import { useFieldContext } from './lib/form'
import type { MultiSelectFieldInputValue } from './lib/schemas/multi-select'

export type MultiSelectWithOptionsFieldProps =
  BaseSmartFormFieldComponentProps & {
    options: Option[]
  } & {
    comboboxProps?: Omit<
      ComponentProps<typeof Combobox<Option, true>>,
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
    comboboxChipsInputProps?: Omit<
      ComponentProps<typeof ComboboxChipsInput>,
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
    comboboxChipsProps?: Omit<
      ComponentProps<typeof ComboboxChips>,
      'children' | 'ref' | 'render'
    >
  }

export default function MultiSelectWithOptionsField({
  label,
  disabled,
  options,
  comboboxProps,
  comboboxChipsInputProps,
  comboboxContentProps,
  comboboxChipsProps,
  ...props
}: MultiSelectWithOptionsFieldProps) {
  const anchor = useComboboxAnchor()
  const field = useFieldContext<MultiSelectFieldInputValue>()
  const invalid = field.state.meta.isTouched && !field.state.meta.isValid
  const selectedOptions = field.state.value as string[]
  const value = options.filter((item) => selectedOptions.includes(item.value))

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
        multiple
        onValueChange={(newValue) => {
          field.handleChange(newValue.map((item) => item.value))
        }}
        value={value}
        {...comboboxProps}
      >
        <ComboboxChips ref={anchor} {...comboboxChipsProps}>
          <ComboboxValue>
            {(selectedValue: typeof options) =>
              selectedValue.map((item) => (
                <ComboboxChip key={item.value}>{item.label}</ComboboxChip>
              ))
            }
          </ComboboxValue>
          <ComboboxChipsInput
            onBlur={field.handleBlur}
            aria-invalid={invalid}
            data-invalid={invalid}
            disabled={disabled}
            id={`${field.form.formId}-${field.name}`}
            placeholder={
              value.length > 0
                ? undefined
                : `Select ${typeof label === 'string' ? label.toLowerCase() : 'information'}`
            }
            {...comboboxChipsInputProps}
          />
        </ComboboxChips>

        <ComboboxContent anchor={anchor} {...comboboxContentProps}>
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

import type { AutocompleteRootProps } from '@base-ui/react/autocomplete'
import type { ComponentProps } from 'react'
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from '@/components/atoms/autocomplete'
import SmartFormFieldContainer from './field-container'
import type { BaseSmartFormFieldComponentProps } from './lib/base'
import { useFieldContext } from './lib/form'
import type { AutocompleteFieldInputValue } from './lib/schemas/autocomplete'

export type AutocompleteWithOptionsFieldProps =
  BaseSmartFormFieldComponentProps & {
    options: string[]
  } & {
    autocompleteProps?: Omit<
      AutocompleteRootProps<string>,
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
    inputProps?: Omit<
      ComponentProps<typeof AutocompleteInput>,
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
    autocompleteContentProps?: Omit<
      ComponentProps<typeof AutocompleteContent>,
      'children' | 'render' | 'anchor'
    >
  }

export default function AutocompleteWithOptionsField({
  label,
  disabled,
  options,
  autocompleteProps,
  inputProps,
  autocompleteContentProps,
  ...props
}: AutocompleteWithOptionsFieldProps) {
  const field = useFieldContext<AutocompleteFieldInputValue>()
  const invalid = field.state.meta.isTouched && !field.state.meta.isValid

  return (
    <SmartFormFieldContainer
      errors={field.state.meta.errors}
      invalid={invalid}
      label={label}
      name={field.name}
      {...props}
    >
      <Autocomplete
        disabled={disabled}
        items={options}
        onValueChange={field.handleChange}
        openOnInputClick
        value={field.state.value}
        {...autocompleteProps}
      >
        <AutocompleteInput
          aria-invalid={invalid}
          disabled={disabled}
          id={`${field.form.formId}-${field.name}`}
          placeholder={
            typeof label === 'string'
              ? `Enter ${label.toLowerCase()}`
              : undefined
          }
          showClear
          onBlur={field.handleBlur}
          {...inputProps}
        />
        <AutocompleteContent {...autocompleteContentProps}>
          <AutocompleteList>
            {(item: string) => (
              <AutocompleteItem key={item} value={item}>
                {item}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompleteContent>
      </Autocomplete>
    </SmartFormFieldContainer>
  )
}

import type { AutocompleteRootProps } from '@base-ui/react/autocomplete'
import type { ComponentProps } from 'react'
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from '@/components/atoms/autocomplete'
import { InputGroupAddon } from '@/components/atoms/input-group'
import { Spinner } from '@/components/atoms/spinner'
import SmartFormFieldContainer from './field-container'
import type { BaseSmartFormFieldComponentProps } from './lib/base'
import { useFieldContext } from './lib/form'
import { useGetOptionsQuery } from './lib/query'
import type { AutocompleteFieldInputValue } from './lib/schemas/autocomplete'

export type AutocompleteWithQueryFieldProps = BaseSmartFormFieldComponentProps &
  Parameters<typeof useGetOptionsQuery>[0] & {
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

export default function AutocompleteWithQueryField({
  label,
  disabled,
  originalApiPath,
  dependencyFieldsValue,
  autocompleteProps,
  inputProps,
  autocompleteContentProps,
  ...props
}: AutocompleteWithQueryFieldProps) {
  const field = useFieldContext<AutocompleteFieldInputValue>()
  const invalid = field.state.meta.isTouched && !field.state.meta.isValid
  const { getOptionsQuery, options } = useGetOptionsQuery({
    dependencyFieldsValue,
    originalApiPath,
  })

  return (
    <SmartFormFieldContainer
      errors={field.state.meta.errors}
      invalid={invalid}
      label={label}
      name={field.name}
      {...props}
    >
      <Autocomplete
        value={field.state.value}
        disabled={disabled}
        items={options.map((option) => option.label)}
        onValueChange={field.handleChange}
        openOnInputClick
        {...autocompleteProps}
      >
        <AutocompleteInput
          aria-invalid={invalid}
          disabled={disabled || getOptionsQuery.isLoading}
          id={`${field.form.formId}-${field.name}`}
          placeholder={
            typeof label === 'string'
              ? `Enter ${label.toLowerCase()}`
              : undefined
          }
          showClear
          onBlur={field.handleBlur}
          {...inputProps}
        >
          {getOptionsQuery.isLoading && (
            <InputGroupAddon>
              <Spinner />
            </InputGroupAddon>
          )}
        </AutocompleteInput>

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

import type { AutocompleteRootProps } from '@base-ui/react/autocomplete'
import type { ComponentProps } from 'react'
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompleteStatus,
} from '@/components/atoms/autocomplete'
import { InputGroupAddon } from '@/components/atoms/input-group'
import { Spinner } from '@/components/atoms/spinner'
import SmartFormFieldContainer from './field-container'
import type { BaseSmartFormFieldComponentProps } from './lib/base'
import { useFieldContext } from './lib/form'
import { fetchNextPage, useGetOptionsInfiniteQuery } from './lib/query'
import type { AutocompleteFieldInputValue } from './lib/schemas/autocomplete'

export type AutocompleteWithInfiniteQueryFieldProps =
  BaseSmartFormFieldComponentProps &
    Pick<
      Parameters<typeof useGetOptionsInfiniteQuery>[0],
      'originalApiPath' | 'dependencyFieldsValue'
    > & {
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
        | 'filter'
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

export default function AutocompleteWithInfiniteQueryField({
  label,
  disabled,
  originalApiPath,
  dependencyFieldsValue,
  autocompleteProps,
  inputProps,
  autocompleteContentProps,
  ...props
}: AutocompleteWithInfiniteQueryFieldProps) {
  const field = useFieldContext<AutocompleteFieldInputValue>()
  const invalid = field.state.meta.isTouched && !field.state.meta.isValid
  const { getOptionsInfiniteQuery, options } = useGetOptionsInfiniteQuery({
    dependencyFieldsValue,
    originalApiPath,
    selectedValue: field.state.value,
    valueAsLabel: true,
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
        disabled={disabled}
        items={options.map((option) => option.label)}
        onValueChange={field.handleChange}
        openOnInputClick={autocompleteProps?.openOnInputClick ?? true}
        value={field.state.value}
        {...autocompleteProps}
      >
        <AutocompleteInput
          aria-invalid={invalid}
          disabled={disabled || getOptionsInfiniteQuery.isLoading}
          id={`${field.form.formId}-${field.name}`}
          placeholder={
            typeof label === 'string'
              ? `Enter ${label.toLowerCase()}`
              : undefined
          }
          showClear={inputProps?.showClear ?? true}
          onBlur={field.handleBlur}
          {...inputProps}
        >
          {getOptionsInfiniteQuery.isLoading && (
            <InputGroupAddon>
              <Spinner />
            </InputGroupAddon>
          )}
        </AutocompleteInput>

        <AutocompleteContent {...autocompleteContentProps}>
          <AutocompleteList
            onScroll={(event) =>
              fetchNextPage({ event, infiniteQuery: getOptionsInfiniteQuery })
            }
          >
            {(item: string) => (
              <AutocompleteItem key={item} value={item}>
                {item}
              </AutocompleteItem>
            )}
          </AutocompleteList>

          {getOptionsInfiniteQuery.isFetchingNextPage && (
            <AutocompleteStatus className='flex justify-center'>
              <Spinner />
            </AutocompleteStatus>
          )}
        </AutocompleteContent>
      </Autocomplete>
    </SmartFormFieldContainer>
  )
}

import type { ComponentProps } from 'react'
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxStatus,
} from '@/components/atoms/combobox'
import { InputGroupAddon } from '@/components/atoms/input-group'
import { Spinner } from '@/components/atoms/spinner'
import type { Option } from '@/types/base'
import SmartFormFieldContainer from './field-container'
import {
  type BaseSmartFormFieldComponentProps,
  updateSelectedItemReferencesAndGetItems,
} from './lib/base'
import { useFieldContext } from './lib/form'
import { fetchNextPage, useGetOptionsInfiniteQuery } from './lib/query'
import type { SelectFieldInputValue } from './lib/schemas/select'

export type SelectWithInfiniteQueryFieldProps =
  BaseSmartFormFieldComponentProps &
    Pick<
      Parameters<typeof useGetOptionsInfiniteQuery>[0],
      'originalApiPath' | 'dependencyFieldsValue'
    > & {
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
        | 'filter'
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

export default function SelectWithInfiniteQueryField({
  label,
  disabled,
  originalApiPath,
  dependencyFieldsValue,
  comboboxProps,
  comboboxInputProps,
  comboboxContentProps,
  ...props
}: SelectWithInfiniteQueryFieldProps) {
  const field = useFieldContext<SelectFieldInputValue>()

  const {
    getOptionsInfiniteQuery,
    options,
    searchKeyword,
    debouncedSearchKeyword,
    setSearchKeyword,
  } = useGetOptionsInfiniteQuery({
    dependencyFieldsValue,
    originalApiPath,
    selectedValue: field.state.value,
  })

  const value = options.find((item) => item.value === field.state.value) ?? null
  const invalid = field.state.meta.isTouched && !field.state.meta.isValid
  const items = updateSelectedItemReferencesAndGetItems({
    queryData: options,
    value,
  })

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
        filter={null}
        inputValue={searchKeyword}
        items={items}
        onInputValueChange={setSearchKeyword}
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
          disabled={disabled || getOptionsInfiniteQuery.isLoading}
          id={`${field.form.formId}-${field.name}`}
          placeholder={
            comboboxInputProps?.placeholder ??
            `Select ${typeof label === 'string' ? label.toLowerCase() : 'information'}`
          }
          showClear={comboboxInputProps?.showClear ?? true}
          {...comboboxInputProps}
        >
          {getOptionsInfiniteQuery.isLoading && (
            <InputGroupAddon align='inline-start'>
              <Spinner />
            </InputGroupAddon>
          )}
        </ComboboxInput>

        <ComboboxContent {...comboboxContentProps}>
          {getOptionsInfiniteQuery.isFetching &&
            !getOptionsInfiniteQuery.isFetchingNextPage && (
              <ComboboxStatus className='flex items-center gap-2'>
                <Spinner />
                <span>
                  Searching for{' '}
                  <span className='font-medium italic'>
                    {debouncedSearchKeyword}
                  </span>
                  ...
                </span>
              </ComboboxStatus>
            )}

          {!getOptionsInfiniteQuery.isFetching && items.length === 0 && (
            <ComboboxEmpty>
              No matched for{' '}
              <span className='font-medium italic'>
                {debouncedSearchKeyword}
              </span>
            </ComboboxEmpty>
          )}

          <ComboboxList
            onScroll={(event) =>
              fetchNextPage({ event, infiniteQuery: getOptionsInfiniteQuery })
            }
          >
            {(item: (typeof items)[number]) => (
              <ComboboxItem key={item.value} value={item}>
                {item.label}
              </ComboboxItem>
            )}
          </ComboboxList>

          {getOptionsInfiniteQuery.isFetchingNextPage && (
            <ComboboxStatus className='flex justify-center'>
              <Spinner />
            </ComboboxStatus>
          )}
        </ComboboxContent>
      </Combobox>
    </SmartFormFieldContainer>
  )
}

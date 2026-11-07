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
  ComboboxStatus,
  ComboboxValue,
  useComboboxAnchor,
} from '@/components/atoms/combobox'
import { Spinner } from '@/components/atoms/spinner'
import type { Option } from '@/types/base'
import SmartFormFieldContainer from './field-container'
import {
  type BaseSmartFormFieldComponentProps,
  updateSelectedItemReferencesAndGetItems,
} from './lib/base'
import { useFieldContext } from './lib/form'
import { fetchNextPage, useGetOptionsInfiniteQuery } from './lib/query'
import type { MultiSelectFieldInputValue } from './lib/schemas/multi-select'

export type MultiSelectWithInfiniteQueryFieldProps =
  BaseSmartFormFieldComponentProps &
    Parameters<typeof useGetOptionsInfiniteQuery>[0] & {
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
        | 'filter'
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

export default function MultiSelectWithInfiniteQueryField({
  label,
  disabled,
  originalApiPath,
  dependencyFieldsValue,
  comboboxProps,
  comboboxChipsInputProps,
  comboboxContentProps,
  comboboxChipsProps,
  ...props
}: MultiSelectWithInfiniteQueryFieldProps) {
  const anchor = useComboboxAnchor()
  const field = useFieldContext<MultiSelectFieldInputValue>()

  const {
    getOptionsInfiniteQuery,
    options,
    searchKeyword,
    debouncedSearchKeyword,
    setSearchKeyword,
  } = useGetOptionsInfiniteQuery({
    dependencyFieldsValue,
    originalApiPath,
    selectedValue:
      field.state.value.length > 0 ? field.state.value.join(',') : null,
  })

  const value = options.filter((item) => field.state.value.includes(item.value))
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
        items={options}
        multiple
        onInputValueChange={setSearchKeyword}
        onValueChange={(newValue) => {
          field.handleChange(newValue.map((item) => item.value))
        }}
        value={value}
        {...comboboxProps}
      >
        <ComboboxChips {...comboboxChipsProps} ref={anchor}>
          {getOptionsInfiniteQuery.isLoading && (
            <Spinner className='text-muted-foreground' />
          )}

          <ComboboxValue>
            {(selectedValue: typeof options) =>
              selectedValue.map((item) => (
                <ComboboxChip key={item.value}>{item.label}</ComboboxChip>
              ))
            }
          </ComboboxValue>

          <ComboboxChipsInput
            placeholder={
              value.length > 0
                ? undefined
                : `Select ${typeof label === 'string' ? label.toLowerCase() : 'information'}`
            }
            onBlur={field.handleBlur}
            aria-invalid={invalid}
            data-invalid={invalid}
            disabled={disabled || getOptionsInfiniteQuery.isLoading}
            id={`${field.form.formId}-${field.name}`}
            {...comboboxChipsInputProps}
          />
        </ComboboxChips>

        <ComboboxContent anchor={anchor} {...comboboxContentProps}>
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

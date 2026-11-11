import { cn } from 'cn'
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react'
import {
  type ChangeEvent,
  type ComponentProps,
  useEffect,
  useRef,
  useState,
} from 'react'
import {
  type ChevronProps,
  type DayButtonProps,
  DayPicker,
  type DropdownProps,
  getDefaultClassNames,
  type RootProps,
  type WeekNumberProps,
} from 'react-day-picker'
import { enUS } from 'react-day-picker/locale'
import { Button, buttonVariants } from '@/components/atoms/button'
import {
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/atoms/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/atoms/select'

const defaultLocale = enUS
const defaultClassNames = getDefaultClassNames()
const defaultStartMonth = new Date(1000, 0, 1)
const defaultEndMonth = new Date(9999, 11, 31)
const defaultDropdownOptions: NonNullable<DropdownProps['options']> = []

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'dropdown',
  buttonVariant = 'ghost',
  locale = defaultLocale,
  startMonth = defaultStartMonth,
  endMonth = defaultEndMonth,
  formatters,
  components,
  ...props
}: ComponentProps<typeof DayPicker> & {
  buttonVariant?: ComponentProps<typeof Button>['variant']
}) {
  return (
    <DayPicker
      captionLayout={captionLayout}
      className={cn(
        'group/calendar bg-background in-data-[slot=card-content]:bg-transparent in-data-[slot=popover-content]:bg-transparent p-3 [--cell-radius:var(--radius-md)] [--cell-size:--spacing(9)]',
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      )}
      classNames={{
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) select-none p-0 aria-disabled:opacity-50',
          defaultClassNames.button_next
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) select-none p-0 aria-disabled:opacity-50',
          defaultClassNames.button_previous
        ),
        caption_label: cn(
          'select-none font-medium',
          captionLayout === 'label'
            ? 'cn-calendar-caption text-sm'
            : 'cn-calendar-caption-label flex items-center gap-1 rounded-(--cell-radius) text-sm [&>svg]:size-3.5 [&>svg]:text-muted-foreground',
          defaultClassNames.caption_label
        ),
        day: cn(
          'group/day relative aspect-square h-full w-full select-none rounded-(--cell-radius) p-0 text-center',
          props.showWeekNumber
            ? '[&:nth-child(2)[data-selected=true]_button]:rounded-l-(--cell-radius)'
            : '[&:first-child[data-selected=true]_button]:rounded-l-(--cell-radius)',
          defaultClassNames.day
        ),
        disabled: cn(
          'text-muted-foreground opacity-50',
          defaultClassNames.disabled
        ),
        dropdown: cn(
          'absolute inset-0 bg-popover opacity-0',
          defaultClassNames.dropdown
        ),
        dropdown_root: cn(
          'cn-calendar-dropdown-root relative rounded-(--cell-radius)',
          defaultClassNames.dropdown_root
        ),
        dropdowns: cn(
          'flex h-(--cell-size) w-full items-center justify-center gap-1.5 font-medium text-sm',
          defaultClassNames.dropdowns
        ),
        hidden: cn('invisible', defaultClassNames.hidden),
        month: cn('flex w-full flex-col gap-4', defaultClassNames.month),
        month_caption: cn(
          'flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)',
          defaultClassNames.month_caption
        ),
        month_grid: cn('w-full border-collapse', defaultClassNames.month_grid),
        months: cn(
          'relative flex flex-col gap-4 md:flex-row',
          defaultClassNames.months
        ),
        nav: cn(
          'absolute inset-x-0 top-0 flex w-full items-center justify-between gap-1',
          defaultClassNames.nav
        ),
        outside: cn(
          'text-muted-foreground aria-selected:text-muted-foreground',
          defaultClassNames.outside
        ),
        range_end: cn(
          'relative isolate z-0 rounded-r-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:left-0 after:w-4 after:bg-muted',
          defaultClassNames.range_end
        ),
        range_middle: cn('rounded-none', defaultClassNames.range_middle),
        range_start: cn(
          'relative isolate z-0 rounded-l-(--cell-radius) bg-muted after:absolute after:inset-y-0 after:right-0 after:w-4 after:bg-muted',
          defaultClassNames.range_start
        ),
        root: cn('w-fit', defaultClassNames.root),
        today: cn(
          'rounded-(--cell-radius) bg-muted text-foreground dark:hover:bg-muted/50',
          defaultClassNames.today
        ),
        week: cn('mt-2 flex w-full', defaultClassNames.week),
        week_number: cn(
          'select-none text-[0.8rem] text-muted-foreground',
          defaultClassNames.week_number
        ),
        week_number_header: cn(
          'w-(--cell-size) select-none',
          defaultClassNames.week_number_header
        ),
        weekday: cn(
          'flex-1 select-none rounded-(--cell-radius) font-normal text-[0.8rem] text-muted-foreground',
          defaultClassNames.weekday
        ),
        weekdays: cn('flex', defaultClassNames.weekdays),
        ...classNames,
      }}
      components={{
        Chevron: CalendarChevron,
        DayButton: CalendarDayButton,
        MonthsDropdown: CalendarMonthsDropdown,
        YearsDropdown: CalendarYearsPopover,
        Root: CalendarRoot,
        WeekNumber: CalendarWeekNumber,
        ...components,
      }}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code, { month: '2-digit' }),
        ...formatters,
      }}
      locale={locale}
      showOutsideDays={showOutsideDays}
      startMonth={startMonth}
      endMonth={endMonth}
      {...props}
    />
  )
}

export function dropdownChange(value: string): ChangeEvent<HTMLSelectElement> {
  return { target: { value } } as ChangeEvent<HTMLSelectElement>
}

export function CalendarMonthsDropdown({
  id,
  value,
  options = defaultDropdownOptions,
  disabled,
  name,
  style,
  tabIndex,
  'aria-label': ariaLabel,
  onChange,
}: DropdownProps) {
  return (
    <Select
      value={Number(value)}
      items={options}
      name={name}
      disabled={disabled}
      onValueChange={(nextValue) => {
        if (nextValue !== null) {
          onChange?.(dropdownChange(String(nextValue)))
        }
      }}
    >
      <SelectTrigger
        id={id}
        size='sm'
        className='relative h-8 px-2'
        aria-label={ariaLabel}
        style={style}
        tabIndex={tabIndex}
      >
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            disabled={option.disabled}
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export function CalendarYearsPopover({
  id,
  value,
  options = defaultDropdownOptions,
  disabled,
  style,
  tabIndex,
  'aria-label': ariaLabel,
  onChange,
}: DropdownProps) {
  const selectedYear = Number(value)
  const [open, setOpen] = useState(false)
  const [decade, setDecade] = useState(Math.floor(selectedYear / 10) * 10)
  const enabledYears = options.filter((option) => !option.disabled)
  const minimumYear = options.length
    ? Math.min(...enabledYears.map((option) => option.value))
    : 1000
  const maximumYear = options.length
    ? Math.max(...enabledYears.map((option) => option.value))
    : 9999
  const years = Array.from({ length: 12 }, (_, index) => decade - 1 + index)
  const selectedOption = options.find((option) => option.value === selectedYear)

  return (
    <Popover
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen)
        if (nextOpen) {
          setDecade(Math.floor(selectedYear / 10) * 10)
        }
      }}
    >
      <PopoverTrigger
        render={<Button variant='outline' size='sm' />}
        aria-label={ariaLabel}
        className='relative h-8 gap-1.5 px-2'
        disabled={disabled}
        id={id}
        style={style}
        tabIndex={tabIndex}
      >
        {selectedOption?.label ?? value}
        <ChevronDownIcon className='text-muted-foreground size-3.5' />
      </PopoverTrigger>
      <PopoverContent className='w-64 gap-3 p-3'>
        <div className='flex items-center justify-between gap-2'>
          <Button
            aria-label='Previous decade'
            disabled={disabled || decade - 1 < minimumYear}
            onClick={() => setDecade(decade - 10)}
            size='icon-sm'
            type='button'
            variant='ghost'
          >
            <ChevronLeftIcon />
          </Button>
          <PopoverTitle aria-live='polite'>
            {decade}–{decade + 9}
          </PopoverTitle>
          <Button
            aria-label='Next decade'
            disabled={disabled || decade + 10 > maximumYear}
            onClick={() => setDecade(decade + 10)}
            size='icon-sm'
            type='button'
            variant='ghost'
          >
            <ChevronRightIcon />
          </Button>
        </div>
        <fieldset
          aria-label={ariaLabel ?? 'Choose year'}
          className='grid min-w-0 grid-cols-3 gap-2 border-0 p-0'
        >
          {years.map((year) => {
            const option = options.find((item) => item.value === year)
            const unavailable =
              year < minimumYear ||
              year > maximumYear ||
              (options.length > 0 && (!option || option.disabled))

            return (
              <Button
                aria-pressed={year === selectedYear}
                className={cn(
                  'h-9 font-normal',
                  (year < decade || year > decade + 9) &&
                    'text-muted-foreground'
                )}
                disabled={disabled || unavailable}
                key={year}
                onClick={() => {
                  onChange?.(dropdownChange(String(year)))
                  setOpen(false)
                }}
                type='button'
                variant={year === selectedYear ? 'default' : 'ghost'}
              >
                {option?.label ?? year}
              </Button>
            )
          })}
        </fieldset>
      </PopoverContent>
    </Popover>
  )
}

export function CalendarChevron({
  className,
  orientation,
  ...props
}: ChevronProps) {
  if (orientation === 'left') {
    return (
      <ChevronLeftIcon
        className={cn('cn-rtl-flip size-4', className)}
        {...props}
      />
    )
  }

  if (orientation === 'right') {
    return (
      <ChevronRightIcon
        className={cn('cn-rtl-flip size-4', className)}
        {...props}
      />
    )
  }

  return <ChevronDownIcon className={cn('size-4', className)} {...props} />
}

export function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: DayButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (modifiers.focused) {
      ref.current?.focus()
    }
  }, [modifiers.focused])

  return (
    <Button
      className={cn(
        'relative isolate z-10 flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 border-0 font-normal leading-none data-[range-end=true]:rounded-(--cell-radius) data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-(--cell-radius) data-[range-end=true]:rounded-r-(--cell-radius) data-[range-start=true]:rounded-l-(--cell-radius) data-[range-end=true]:bg-primary data-[range-middle=true]:bg-muted data-[range-start=true]:bg-primary data-[selected-single=true]:bg-primary data-[range-end=true]:text-primary-foreground data-[range-middle=true]:text-foreground data-[range-start=true]:text-primary-foreground data-[selected-single=true]:text-primary-foreground group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 dark:hover:text-foreground [&>span]:text-xs [&>span]:opacity-70',
        'data-[outside=false]:text-foreground',
        'data-[range-start=true]:data-[range-end=true]:rounded-(--cell-radius) data-[range-start=true]:rounded-r-none data-[range-end=true]:rounded-l-none data-[range-end=true]:hover:bg-primary! data-[range-start=true]:hover:bg-primary! data-[selected-single=true]:hover:bg-primary! data-[range-end=true]:hover:text-primary-foreground! data-[range-start=true]:hover:text-primary-foreground! data-[selected-single=true]:hover:text-primary-foreground!',
        defaultClassNames.day,
        className
      )}
      data-day={day.date.toLocaleDateString(defaultLocale.code)}
      data-outside={day.outside}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      data-range-start={modifiers.range_start}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      size='icon'
      variant='ghost'
      {...props}
    />
  )
}

export function CalendarRoot({ className, rootRef, ...props }: RootProps) {
  return (
    <div
      className={cn(className)}
      data-slot='calendar'
      ref={rootRef}
      {...props}
    />
  )
}

export function CalendarWeekNumber({ children, ...props }: WeekNumberProps) {
  return (
    <td {...props}>
      <div className='flex size-(--cell-size) items-center justify-center text-center'>
        {children}
      </div>
    </td>
  )
}

// This file is auto-generated — do not edit directly.
// Run `bun run gen-lazy-components` to regenerate.

import { lazy } from 'react'

export const registryLazyComponents: Record<
  string,
  Record<string, Record<string, ReturnType<typeof lazy>>>
> = {
  atoms: {
    accordion: {
      basic: lazy(async () => {
        const m = await import('@/registry/atoms/accordion/examples/basic')
        return { default: m.AccordionBasic }
      }),
      borders: lazy(async () => {
        const m = await import('@/registry/atoms/accordion/examples/borders')
        return { default: m.AccordionBorders }
      }),
      card: lazy(async () => {
        const m = await import('@/registry/atoms/accordion/examples/card')
        return { default: m.AccordionCard }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/accordion/examples/demo')
        return { default: m.AccordionDemo }
      }),
      disabled: lazy(async () => {
        const m = await import('@/registry/atoms/accordion/examples/disabled')
        return { default: m.AccordionDisabled }
      }),
      multiple: lazy(async () => {
        const m = await import('@/registry/atoms/accordion/examples/multiple')
        return { default: m.AccordionMultiple }
      }),
    },
    alert: {
      action: lazy(async () => {
        const m = await import('@/registry/atoms/alert/examples/action')
        return { default: m.AlertActionExample }
      }),
      basic: lazy(async () => {
        const m = await import('@/registry/atoms/alert/examples/basic')
        return { default: m.AlertBasic }
      }),
      'custom-colors': lazy(async () => {
        const m = await import('@/registry/atoms/alert/examples/custom-colors')
        return { default: m.AlertColors }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/alert/examples/demo')
        return { default: m.AlertDemo }
      }),
      destructive: lazy(async () => {
        const m = await import('@/registry/atoms/alert/examples/destructive')
        return { default: m.AlertDestructive }
      }),
    },
    'alert-dialog': {
      basic: lazy(async () => {
        const m = await import('@/registry/atoms/alert-dialog/examples/basic')
        return { default: m.AlertDialogBasic }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/alert-dialog/examples/demo')
        return { default: m.AlertDialogDemo }
      }),
      destructive: lazy(async () => {
        const m =
          await import('@/registry/atoms/alert-dialog/examples/destructive')
        return { default: m.AlertDialogDestructive }
      }),
      media: lazy(async () => {
        const m = await import('@/registry/atoms/alert-dialog/examples/media')
        return { default: m.AlertDialogWithMedia }
      }),
      'small-with-media': lazy(async () => {
        const m =
          await import('@/registry/atoms/alert-dialog/examples/small-with-media')
        return { default: m.AlertDialogSmallWithMedia }
      }),
      small: lazy(async () => {
        const m = await import('@/registry/atoms/alert-dialog/examples/small')
        return { default: m.AlertDialogSmall }
      }),
    },
    autocomplete: {
      'auto-highlight': lazy(async () => {
        const { default: defaultExport } =
          await import('@/registry/atoms/autocomplete/examples/auto-highlight')
        return { default: defaultExport }
      }),
      basic: lazy(async () => {
        const { default: defaultExport } =
          await import('@/registry/atoms/autocomplete/examples/basic')
        return { default: defaultExport }
      }),
      'clear-button': lazy(async () => {
        const { default: defaultExport } =
          await import('@/registry/atoms/autocomplete/examples/clear-button')
        return { default: defaultExport }
      }),
      demo: lazy(async () => {
        const { default: defaultExport } =
          await import('@/registry/atoms/autocomplete/examples/demo')
        return { default: defaultExport }
      }),
      disabled: lazy(async () => {
        const { default: defaultExport } =
          await import('@/registry/atoms/autocomplete/examples/disabled')
        return { default: defaultExport }
      }),
      groups: lazy(async () => {
        const { default: defaultExport } =
          await import('@/registry/atoms/autocomplete/examples/groups')
        return { default: defaultExport }
      }),
      'input-group': lazy(async () => {
        const { default: defaultExport } =
          await import('@/registry/atoms/autocomplete/examples/input-group')
        return { default: defaultExport }
      }),
      invalid: lazy(async () => {
        const { default: defaultExport } =
          await import('@/registry/atoms/autocomplete/examples/invalid')
        return { default: defaultExport }
      }),
    },
    avatar: {
      'avatar-group-count': lazy(async () => {
        const m =
          await import('@/registry/atoms/avatar/examples/avatar-group-count')
        return { default: m.AvatarGroupCountExample }
      }),
      'avatar-group-with-icon': lazy(async () => {
        const m =
          await import('@/registry/atoms/avatar/examples/avatar-group-with-icon')
        return { default: m.AvatarGroupCountIconExample }
      }),
      'avatar-group': lazy(async () => {
        const m = await import('@/registry/atoms/avatar/examples/avatar-group')
        return { default: m.AvatarGroupExample }
      }),
      'badge-with-icon': lazy(async () => {
        const m =
          await import('@/registry/atoms/avatar/examples/badge-with-icon')
        return { default: m.AvatarBadgeIconExample }
      }),
      badge: lazy(async () => {
        const m = await import('@/registry/atoms/avatar/examples/badge')
        return { default: m.AvatarWithBadge }
      }),
      basic: lazy(async () => {
        const m = await import('@/registry/atoms/avatar/examples/basic')
        return { default: m.AvatarDemo }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/avatar/examples/demo')
        return { default: m.AvatarDemo }
      }),
      dropdown: lazy(async () => {
        const m = await import('@/registry/atoms/avatar/examples/dropdown')
        return { default: m.AvatarDropdown }
      }),
      sizes: lazy(async () => {
        const m = await import('@/registry/atoms/avatar/examples/sizes')
        return { default: m.AvatarSizeExample }
      }),
    },
    badge: {
      'custom-colors': lazy(async () => {
        const m = await import('@/registry/atoms/badge/examples/custom-colors')
        return { default: m.BadgeCustomColors }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/badge/examples/demo')
        return { default: m.BadgeDemo }
      }),
      link: lazy(async () => {
        const m = await import('@/registry/atoms/badge/examples/link')
        return { default: m.BadgeAsLink }
      }),
      variants: lazy(async () => {
        const m = await import('@/registry/atoms/badge/examples/variants')
        return { default: m.BadgeVariants }
      }),
      'with-icon': lazy(async () => {
        const m = await import('@/registry/atoms/badge/examples/with-icon')
        return { default: m.BadgeWithIconLeft }
      }),
      'with-spinner': lazy(async () => {
        const m = await import('@/registry/atoms/badge/examples/with-spinner')
        return { default: m.BadgeWithSpinner }
      }),
    },
    breadcrumb: {
      basic: lazy(async () => {
        const m = await import('@/registry/atoms/breadcrumb/examples/basic')
        return { default: m.BreadcrumbBasic }
      }),
      collapsed: lazy(async () => {
        const m = await import('@/registry/atoms/breadcrumb/examples/collapsed')
        return { default: m.BreadcrumbEllipsisDemo }
      }),
      'custom-separator': lazy(async () => {
        const m =
          await import('@/registry/atoms/breadcrumb/examples/custom-separator')
        return { default: m.BreadcrumbSeparatorDemo }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/breadcrumb/examples/demo')
        return { default: m.BreadcrumbDemo }
      }),
      dropdown: lazy(async () => {
        const m = await import('@/registry/atoms/breadcrumb/examples/dropdown')
        return { default: m.BreadcrumbDropdown }
      }),
      'link-component': lazy(async () => {
        const m =
          await import('@/registry/atoms/breadcrumb/examples/link-component')
        return { default: m.BreadcrumbLinkDemo }
      }),
    },
    button: {
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/button/examples/demo')
        return { default: m.ButtonDemo }
      }),
      icon: lazy(async () => {
        const m = await import('@/registry/atoms/button/examples/icon')
        return { default: m.ButtonIcon }
      }),
      popover: lazy(async () => {
        const m = await import('@/registry/atoms/button/examples/popover')
        return { default: m.ButtonGroupPopover }
      }),
      rounded: lazy(async () => {
        const m = await import('@/registry/atoms/button/examples/rounded')
        return { default: m.ButtonRounded }
      }),
      size: lazy(async () => {
        const m = await import('@/registry/atoms/button/examples/size')
        return { default: m.ButtonSize }
      }),
      spinner: lazy(async () => {
        const m = await import('@/registry/atoms/button/examples/spinner')
        return { default: m.ButtonLoading }
      }),
      variant: lazy(async () => {
        const m = await import('@/registry/atoms/button/examples/variant')
        return { default: m.ButtonVariant }
      }),
      'with-icon': lazy(async () => {
        const m = await import('@/registry/atoms/button/examples/with-icon')
        return { default: m.ButtonWithIcon }
      }),
    },
    'button-group': {
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/button-group/examples/demo')
        return { default: m.ButtonGroupDemo }
      }),
      'dropdown-menu': lazy(async () => {
        const m =
          await import('@/registry/atoms/button-group/examples/dropdown-menu')
        return { default: m.ButtonGroupDropdown }
      }),
      'input-group': lazy(async () => {
        const m =
          await import('@/registry/atoms/button-group/examples/input-group')
        return { default: m.ButtonGroupInputGroup }
      }),
      input: lazy(async () => {
        const m = await import('@/registry/atoms/button-group/examples/input')
        return { default: m.ButtonGroupInput }
      }),
      nested: lazy(async () => {
        const m = await import('@/registry/atoms/button-group/examples/nested')
        return { default: m.ButtonGroupNested }
      }),
      orientation: lazy(async () => {
        const m =
          await import('@/registry/atoms/button-group/examples/orientation')
        return { default: m.ButtonGroupOrientation }
      }),
      popover: lazy(async () => {
        const m = await import('@/registry/atoms/button-group/examples/popover')
        return { default: m.ButtonGroupPopover }
      }),
      select: lazy(async () => {
        const m = await import('@/registry/atoms/button-group/examples/select')
        return { default: m.ButtonGroupSelect }
      }),
      separator: lazy(async () => {
        const m =
          await import('@/registry/atoms/button-group/examples/separator')
        return { default: m.ButtonGroupSeparatorDemo }
      }),
      size: lazy(async () => {
        const m = await import('@/registry/atoms/button-group/examples/size')
        return { default: m.ButtonGroupSize }
      }),
      split: lazy(async () => {
        const m = await import('@/registry/atoms/button-group/examples/split')
        return { default: m.ButtonGroupSplit }
      }),
    },
    calendar: {
      basic: lazy(async () => {
        const m = await import('@/registry/atoms/calendar/examples/basic')
        return { default: m.CalendarBasic }
      }),
      'booked-dates': lazy(async () => {
        const m =
          await import('@/registry/atoms/calendar/examples/booked-dates')
        return { default: m.CalendarBookedDates }
      }),
      'custom-cell-size': lazy(async () => {
        const m =
          await import('@/registry/atoms/calendar/examples/custom-cell-size')
        return { default: m.CalendarCustomDays }
      }),
      'date-and-time-picker': lazy(async () => {
        const m =
          await import('@/registry/atoms/calendar/examples/date-and-time-picker')
        return { default: m.CalendarWithTime }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/calendar/examples/demo')
        return { default: m.CalendarDemo }
      }),
      'month-and-year-selector': lazy(async () => {
        const m =
          await import('@/registry/atoms/calendar/examples/month-and-year-selector')
        return { default: m.CalendarCaption }
      }),
      presets: lazy(async () => {
        const m = await import('@/registry/atoms/calendar/examples/presets')
        return { default: m.CalendarWithPresets }
      }),
      range: lazy(async () => {
        const m = await import('@/registry/atoms/calendar/examples/range')
        return { default: m.CalendarRange }
      }),
      'week-numbers': lazy(async () => {
        const m =
          await import('@/registry/atoms/calendar/examples/week-numbers')
        return { default: m.CalendarWeekNumbers }
      }),
    },
    card: {
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/card/examples/demo')
        return { default: m.CardDemo }
      }),
      image: lazy(async () => {
        const m = await import('@/registry/atoms/card/examples/image')
        return { default: m.CardImage }
      }),
      size: lazy(async () => {
        const m = await import('@/registry/atoms/card/examples/size')
        return { default: m.CardSmall }
      }),
    },
    carousel: {
      api: lazy(async () => {
        const m = await import('@/registry/atoms/carousel/examples/api')
        return { default: m.CarouselDApiDemo }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/carousel/examples/demo')
        return { default: m.CarouselDemo }
      }),
      orientation: lazy(async () => {
        const m = await import('@/registry/atoms/carousel/examples/orientation')
        return { default: m.CarouselOrientation }
      }),
      plugins: lazy(async () => {
        const m = await import('@/registry/atoms/carousel/examples/plugins')
        return { default: m.CarouselPlugin }
      }),
      sizes: lazy(async () => {
        const m = await import('@/registry/atoms/carousel/examples/sizes')
        return { default: m.CarouselSize }
      }),
      spacing: lazy(async () => {
        const m = await import('@/registry/atoms/carousel/examples/spacing')
        return { default: m.CarouselSpacing }
      }),
    },
    checkbox: {
      basic: lazy(async () => {
        const m = await import('@/registry/atoms/checkbox/examples/basic')
        return { default: m.CheckboxBasic }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/checkbox/examples/demo')
        return { default: m.CheckboxDemo }
      }),
      description: lazy(async () => {
        const m = await import('@/registry/atoms/checkbox/examples/description')
        return { default: m.CheckboxDescription }
      }),
      disabled: lazy(async () => {
        const m = await import('@/registry/atoms/checkbox/examples/disabled')
        return { default: m.CheckboxDisabled }
      }),
      group: lazy(async () => {
        const m = await import('@/registry/atoms/checkbox/examples/group')
        return { default: m.CheckboxGroup }
      }),
      'invalid-state': lazy(async () => {
        const m =
          await import('@/registry/atoms/checkbox/examples/invalid-state')
        return { default: m.CheckboxInvalid }
      }),
      table: lazy(async () => {
        const m = await import('@/registry/atoms/checkbox/examples/table')
        return { default: m.CheckboxInTable }
      }),
    },
    combobox: {
      'async-search-multiple-with-infinite-scroll': lazy(async () => {
        const m =
          await import('@/registry/atoms/combobox/examples/async-search-multiple-with-infinite-scroll')
        return { default: m.ComboboxAsyncSearchMultipleInfiniteScroll }
      }),
      'async-search-single-with-infinite-scroll': lazy(async () => {
        const m =
          await import('@/registry/atoms/combobox/examples/async-search-single-with-infinite-scroll')
        return { default: m.ComboboxAsyncSearchSingleInfiniteScroll }
      }),
      'auto-highlight': lazy(async () => {
        const m =
          await import('@/registry/atoms/combobox/examples/auto-highlight')
        return { default: m.ComboboxAutoHighlight }
      }),
      basic: lazy(async () => {
        const m = await import('@/registry/atoms/combobox/examples/basic')
        return { default: m.ComboboxBasic }
      }),
      'clear-button': lazy(async () => {
        const m =
          await import('@/registry/atoms/combobox/examples/clear-button')
        return { default: m.ComboboxWithClear }
      }),
      'custom-items': lazy(async () => {
        const m =
          await import('@/registry/atoms/combobox/examples/custom-items')
        return { default: m.ComboboxWithCustomItems }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/combobox/examples/demo')
        return { default: m.ComboboxBasic }
      }),
      disabled: lazy(async () => {
        const m = await import('@/registry/atoms/combobox/examples/disabled')
        return { default: m.ComboboxDisabled }
      }),
      groups: lazy(async () => {
        const m = await import('@/registry/atoms/combobox/examples/groups')
        return { default: m.ComboboxWithGroupsAndSeparator }
      }),
      'input-group': lazy(async () => {
        const m = await import('@/registry/atoms/combobox/examples/input-group')
        return { default: m.ComboboxInputGroup }
      }),
      invalid: lazy(async () => {
        const m = await import('@/registry/atoms/combobox/examples/invalid')
        return { default: m.ComboboxInvalid }
      }),
      multiple: lazy(async () => {
        const m = await import('@/registry/atoms/combobox/examples/multiple')
        return { default: m.ComboboxMultiple }
      }),
      popup: lazy(async () => {
        const m = await import('@/registry/atoms/combobox/examples/popup')
        return { default: m.ComboboxPopup }
      }),
    },
    command: {
      basic: lazy(async () => {
        const m = await import('@/registry/atoms/command/examples/basic')
        return { default: m.CommandBasic }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/command/examples/demo')
        return { default: m.CommandDemo }
      }),
      groups: lazy(async () => {
        const m = await import('@/registry/atoms/command/examples/groups')
        return { default: m.CommandWithGroups }
      }),
      scrollable: lazy(async () => {
        const m = await import('@/registry/atoms/command/examples/scrollable')
        return { default: m.CommandManyItems }
      }),
      shortcuts: lazy(async () => {
        const m = await import('@/registry/atoms/command/examples/shortcuts')
        return { default: m.CommandWithShortcuts }
      }),
    },
    'context-menu': {
      basic: lazy(async () => {
        const m = await import('@/registry/atoms/context-menu/examples/basic')
        return { default: m.ContextMenuBasic }
      }),
      checkboxes: lazy(async () => {
        const m =
          await import('@/registry/atoms/context-menu/examples/checkboxes')
        return { default: m.ContextMenuCheckboxes }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/context-menu/examples/demo')
        return { default: m.ContextMenuDemo }
      }),
      destructive: lazy(async () => {
        const m =
          await import('@/registry/atoms/context-menu/examples/destructive')
        return { default: m.ContextMenuDestructive }
      }),
      groups: lazy(async () => {
        const m = await import('@/registry/atoms/context-menu/examples/groups')
        return { default: m.ContextMenuGroups }
      }),
      icons: lazy(async () => {
        const m = await import('@/registry/atoms/context-menu/examples/icons')
        return { default: m.ContextMenuIcons }
      }),
      radio: lazy(async () => {
        const m = await import('@/registry/atoms/context-menu/examples/radio')
        return { default: m.ContextMenuRadio }
      }),
      shortcuts: lazy(async () => {
        const m =
          await import('@/registry/atoms/context-menu/examples/shortcuts')
        return { default: m.ContextMenuShortcuts }
      }),
      sides: lazy(async () => {
        const m = await import('@/registry/atoms/context-menu/examples/sides')
        return { default: m.ContextMenuSides }
      }),
      submenu: lazy(async () => {
        const m = await import('@/registry/atoms/context-menu/examples/submenu')
        return { default: m.ContextMenuSubmenu }
      }),
    },
    'date-picker': {
      basic: lazy(async () => {
        const m = await import('@/registry/atoms/date-picker/examples/basic')
        return { default: m.DatePickerBasic }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/date-picker/examples/demo')
        return { default: m.DatePickerDemo }
      }),
      range: lazy(async () => {
        const m = await import('@/registry/atoms/date-picker/examples/range')
        return { default: m.DatePickerRange }
      }),
    },
    dialog: {
      'custom-close-button': lazy(async () => {
        const m =
          await import('@/registry/atoms/dialog/examples/custom-close-button')
        return { default: m.DialogCloseButton }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/dialog/examples/demo')
        return { default: m.DialogDemo }
      }),
      'no-close-button': lazy(async () => {
        const m =
          await import('@/registry/atoms/dialog/examples/no-close-button')
        return { default: m.DialogNoCloseButton }
      }),
      'sticky-footer': lazy(async () => {
        const m = await import('@/registry/atoms/dialog/examples/sticky-footer')
        return { default: m.DialogStickyFooter }
      }),
    },
    drawer: {
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/drawer/examples/demo')
        return { default: m.DrawerDemo }
      }),
      nested: lazy(async () => {
        const m = await import('@/registry/atoms/drawer/examples/nested')
        return { default: m.DrawerNested }
      }),
      'non-modal': lazy(async () => {
        const m = await import('@/registry/atoms/drawer/examples/non-modal')
        return { default: m.DrawerNonModal }
      }),
      position: lazy(async () => {
        const m = await import('@/registry/atoms/drawer/examples/position')
        return { default: m.DrawerWithSides }
      }),
      'snap-points': lazy(async () => {
        const m = await import('@/registry/atoms/drawer/examples/snap-points')
        return { default: m.DrawerSnapPoints }
      }),
      'swipe-handle': lazy(async () => {
        const m = await import('@/registry/atoms/drawer/examples/swipe-handle')
        return { default: m.DrawerSwipeHandle }
      }),
    },
    'dropdown-menu': {
      avatar: lazy(async () => {
        const m = await import('@/registry/atoms/dropdown-menu/examples/avatar')
        return { default: m.DropdownMenuAvatar }
      }),
      basic: lazy(async () => {
        const m = await import('@/registry/atoms/dropdown-menu/examples/basic')
        return { default: m.DropdownMenuBasic }
      }),
      'checkboxes-icons': lazy(async () => {
        const m =
          await import('@/registry/atoms/dropdown-menu/examples/checkboxes-icons')
        return { default: m.DropdownMenuCheckboxesIcons }
      }),
      checkboxes: lazy(async () => {
        const m =
          await import('@/registry/atoms/dropdown-menu/examples/checkboxes')
        return { default: m.DropdownMenuCheckboxes }
      }),
      complex: lazy(async () => {
        const m =
          await import('@/registry/atoms/dropdown-menu/examples/complex')
        return { default: m.DropdownMenuComplex }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/dropdown-menu/examples/demo')
        return { default: m.DropdownMenuDemo }
      }),
      destructive: lazy(async () => {
        const m =
          await import('@/registry/atoms/dropdown-menu/examples/destructive')
        return { default: m.DropdownMenuDestructive }
      }),
      icons: lazy(async () => {
        const m = await import('@/registry/atoms/dropdown-menu/examples/icons')
        return { default: m.DropdownMenuIcons }
      }),
      'radio-group': lazy(async () => {
        const m =
          await import('@/registry/atoms/dropdown-menu/examples/radio-group')
        return { default: m.DropdownMenuRadioGroupDemo }
      }),
      'radio-icons': lazy(async () => {
        const m =
          await import('@/registry/atoms/dropdown-menu/examples/radio-icons')
        return { default: m.DropdownMenuRadioIcons }
      }),
      shortcuts: lazy(async () => {
        const m =
          await import('@/registry/atoms/dropdown-menu/examples/shortcuts')
        return { default: m.DropdownMenuShortcuts }
      }),
      submenu: lazy(async () => {
        const m =
          await import('@/registry/atoms/dropdown-menu/examples/submenu')
        return { default: m.DropdownMenuSubmenu }
      }),
    },
    empty: {
      'avatar-group': lazy(async () => {
        const m = await import('@/registry/atoms/empty/examples/avatar-group')
        return { default: m.EmptyAvatarGroup }
      }),
      avatar: lazy(async () => {
        const m = await import('@/registry/atoms/empty/examples/avatar')
        return { default: m.EmptyAvatar }
      }),
      background: lazy(async () => {
        const m = await import('@/registry/atoms/empty/examples/background')
        return { default: m.EmptyMuted }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/empty/examples/demo')
        return { default: m.EmptyDemo }
      }),
      'input-group': lazy(async () => {
        const m = await import('@/registry/atoms/empty/examples/input-group')
        return { default: m.EmptyInputGroup }
      }),
      outline: lazy(async () => {
        const m = await import('@/registry/atoms/empty/examples/outline')
        return { default: m.EmptyOutline }
      }),
    },
    field: {
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/field/examples/demo')
        return { default: m.FieldDemo }
      }),
    },
    'hover-card': {
      basic: lazy(async () => {
        const m = await import('@/registry/atoms/hover-card/examples/basic')
        return { default: m.HoverCardDemo }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/hover-card/examples/demo')
        return { default: m.HoverCardDemo }
      }),
      sides: lazy(async () => {
        const m = await import('@/registry/atoms/hover-card/examples/sides')
        return { default: m.HoverCardSides }
      }),
    },
    input: {
      badge: lazy(async () => {
        const m = await import('@/registry/atoms/input/examples/badge')
        return { default: m.InputBadge }
      }),
      basic: lazy(async () => {
        const m = await import('@/registry/atoms/input/examples/basic')
        return { default: m.InputBasic }
      }),
      'button-group': lazy(async () => {
        const m = await import('@/registry/atoms/input/examples/button-group')
        return { default: m.InputButtonGroup }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/input/examples/demo')
        return { default: m.InputDemo }
      }),
      disabled: lazy(async () => {
        const m = await import('@/registry/atoms/input/examples/disabled')
        return { default: m.InputDisabled }
      }),
      'field-group': lazy(async () => {
        const m = await import('@/registry/atoms/input/examples/field-group')
        return { default: m.InputFieldgroup }
      }),
      field: lazy(async () => {
        const m = await import('@/registry/atoms/input/examples/field')
        return { default: m.InputField }
      }),
      file: lazy(async () => {
        const m = await import('@/registry/atoms/input/examples/file')
        return { default: m.InputFile }
      }),
      form: lazy(async () => {
        const m = await import('@/registry/atoms/input/examples/form')
        return { default: m.InputForm }
      }),
      grid: lazy(async () => {
        const m = await import('@/registry/atoms/input/examples/grid')
        return { default: m.InputGrid }
      }),
      inline: lazy(async () => {
        const m = await import('@/registry/atoms/input/examples/inline')
        return { default: m.InputInline }
      }),
      'input-group': lazy(async () => {
        const m = await import('@/registry/atoms/input/examples/input-group')
        return { default: m.InputInputGroup }
      }),
      invalid: lazy(async () => {
        const m = await import('@/registry/atoms/input/examples/invalid')
        return { default: m.InputInvalid }
      }),
      required: lazy(async () => {
        const m = await import('@/registry/atoms/input/examples/required')
        return { default: m.InputRequired }
      }),
    },
    'input-group': {
      button: lazy(async () => {
        const m = await import('@/registry/atoms/input-group/examples/button')
        return { default: m.InputGroupButtonExample }
      }),
      'custom-input': lazy(async () => {
        const m =
          await import('@/registry/atoms/input-group/examples/custom-input')
        return { default: m.InputGroupCustom }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/input-group/examples/demo')
        return { default: m.InputGroupDemo }
      }),
      dropdown: lazy(async () => {
        const m = await import('@/registry/atoms/input-group/examples/dropdown')
        return { default: m.InputGroupDropdown }
      }),
      icon: lazy(async () => {
        const m = await import('@/registry/atoms/input-group/examples/icon')
        return { default: m.InputGroupIcon }
      }),
      kbd: lazy(async () => {
        const m = await import('@/registry/atoms/input-group/examples/kbd')
        return { default: m.InputGroupKbd }
      }),
      spinner: lazy(async () => {
        const m = await import('@/registry/atoms/input-group/examples/spinner')
        return { default: m.InputGroupSpinner }
      }),
      text: lazy(async () => {
        const m = await import('@/registry/atoms/input-group/examples/text')
        return { default: m.InputGroupTextExample }
      }),
      textarea: lazy(async () => {
        const m = await import('@/registry/atoms/input-group/examples/textarea')
        return { default: m.InputGroupTextareaExample }
      }),
    },
    'input-otp': {
      alphanumeric: lazy(async () => {
        const m =
          await import('@/registry/atoms/input-otp/examples/alphanumeric')
        return { default: m.InputOTPAlphanumeric }
      }),
      controlled: lazy(async () => {
        const m = await import('@/registry/atoms/input-otp/examples/controlled')
        return { default: m.InputOTPControlled }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/input-otp/examples/demo')
        return { default: m.InputOTPDemo }
      }),
      disabled: lazy(async () => {
        const m = await import('@/registry/atoms/input-otp/examples/disabled')
        return { default: m.InputOTPDisabled }
      }),
      form: lazy(async () => {
        const m = await import('@/registry/atoms/input-otp/examples/form')
        return { default: m.InputOTPForm }
      }),
      'four-digits': lazy(async () => {
        const m =
          await import('@/registry/atoms/input-otp/examples/four-digits')
        return { default: m.InputOTPFourDigits }
      }),
      invalid: lazy(async () => {
        const m = await import('@/registry/atoms/input-otp/examples/invalid')
        return { default: m.InputOTPInvalid }
      }),
      pattern: lazy(async () => {
        const m = await import('@/registry/atoms/input-otp/examples/pattern')
        return { default: m.InputOTPPattern }
      }),
      separator: lazy(async () => {
        const m = await import('@/registry/atoms/input-otp/examples/separator')
        return { default: m.InputOTPWithSeparator }
      }),
    },
    item: {
      avatar: lazy(async () => {
        const m = await import('@/registry/atoms/item/examples/avatar')
        return { default: m.ItemAvatar }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/item/examples/demo')
        return { default: m.ItemDemo }
      }),
      dropdown: lazy(async () => {
        const m = await import('@/registry/atoms/item/examples/dropdown')
        return { default: m.ItemDropdown }
      }),
      group: lazy(async () => {
        const m = await import('@/registry/atoms/item/examples/group')
        return { default: m.ItemGroupExample }
      }),
      header: lazy(async () => {
        const m = await import('@/registry/atoms/item/examples/header')
        return { default: m.ItemHeaderDemo }
      }),
      icon: lazy(async () => {
        const m = await import('@/registry/atoms/item/examples/icon')
        return { default: m.ItemIcon }
      }),
      image: lazy(async () => {
        const m = await import('@/registry/atoms/item/examples/image')
        return { default: m.ItemImage }
      }),
      link: lazy(async () => {
        const m = await import('@/registry/atoms/item/examples/link')
        return { default: m.ItemLink }
      }),
      size: lazy(async () => {
        const m = await import('@/registry/atoms/item/examples/size')
        return { default: m.ItemSizeDemo }
      }),
      variants: lazy(async () => {
        const m = await import('@/registry/atoms/item/examples/variants')
        return { default: m.ItemVariant }
      }),
    },
    kbd: {
      button: lazy(async () => {
        const m = await import('@/registry/atoms/kbd/examples/button')
        return { default: m.KbdButton }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/kbd/examples/demo')
        return { default: m.KbdDemo }
      }),
      group: lazy(async () => {
        const m = await import('@/registry/atoms/kbd/examples/group')
        return { default: m.KbdGroupExample }
      }),
      'input-group': lazy(async () => {
        const m = await import('@/registry/atoms/kbd/examples/input-group')
        return { default: m.KbdInputGroup }
      }),
      tooltip: lazy(async () => {
        const m = await import('@/registry/atoms/kbd/examples/tooltip')
        return { default: m.KbdTooltip }
      }),
    },
    label: {
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/label/examples/demo')
        return { default: m.LabelDemo }
      }),
    },
    menubar: {
      checkbox: lazy(async () => {
        const m = await import('@/registry/atoms/menubar/examples/checkbox')
        return { default: m.MenubarCheckbox }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/menubar/examples/demo')
        return { default: m.MenubarDemo }
      }),
      radio: lazy(async () => {
        const m = await import('@/registry/atoms/menubar/examples/radio')
        return { default: m.MenubarRadio }
      }),
      submenu: lazy(async () => {
        const m = await import('@/registry/atoms/menubar/examples/submenu')
        return { default: m.MenubarSubmenu }
      }),
      'with-icons': lazy(async () => {
        const m = await import('@/registry/atoms/menubar/examples/with-icons')
        return { default: m.MenubarIcons }
      }),
    },
    'navigation-menu': {
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/navigation-menu/examples/demo')
        return { default: m.NavigationMenuDemo }
      }),
    },
    popover: {
      align: lazy(async () => {
        const m = await import('@/registry/atoms/popover/examples/align')
        return { default: m.PopoverAlignments }
      }),
      basic: lazy(async () => {
        const m = await import('@/registry/atoms/popover/examples/basic')
        return { default: m.PopoverBasic }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/popover/examples/demo')
        return { default: m.PopoverDemo }
      }),
      'with-form': lazy(async () => {
        const m = await import('@/registry/atoms/popover/examples/with-form')
        return { default: m.PopoverForm }
      }),
    },
    progress: {
      controlled: lazy(async () => {
        const m = await import('@/registry/atoms/progress/examples/controlled')
        return { default: m.ProgressControlled }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/progress/examples/demo')
        return { default: m.ProgressDemo }
      }),
      label: lazy(async () => {
        const m = await import('@/registry/atoms/progress/examples/label')
        return { default: m.ProgressWithLabel }
      }),
    },
    'radio-group': {
      'choice-card': lazy(async () => {
        const m =
          await import('@/registry/atoms/radio-group/examples/choice-card')
        return { default: m.RadioGroupChoiceCard }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/radio-group/examples/demo')
        return { default: m.RadioGroupDemo }
      }),
      description: lazy(async () => {
        const m =
          await import('@/registry/atoms/radio-group/examples/description')
        return { default: m.RadioGroupDescription }
      }),
      disabled: lazy(async () => {
        const m = await import('@/registry/atoms/radio-group/examples/disabled')
        return { default: m.RadioGroupDisabled }
      }),
      fieldset: lazy(async () => {
        const m = await import('@/registry/atoms/radio-group/examples/fieldset')
        return { default: m.RadioGroupFieldset }
      }),
      invalid: lazy(async () => {
        const m = await import('@/registry/atoms/radio-group/examples/invalid')
        return { default: m.RadioGroupInvalid }
      }),
    },
    resizable: {
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/resizable/examples/demo')
        return { default: m.ResizableDemo }
      }),
      handle: lazy(async () => {
        const m = await import('@/registry/atoms/resizable/examples/handle')
        return { default: m.ResizableHandleDemo }
      }),
      vertical: lazy(async () => {
        const m = await import('@/registry/atoms/resizable/examples/vertical')
        return { default: m.ResizableVertical }
      }),
    },
    'scroll-area': {
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/scroll-area/examples/demo')
        return { default: m.ScrollAreaDemo }
      }),
      horizontal: lazy(async () => {
        const m =
          await import('@/registry/atoms/scroll-area/examples/horizontal')
        return { default: m.ScrollAreaHorizontalDemo }
      }),
    },
    select: {
      'align-item-with-trigger': lazy(async () => {
        const m =
          await import('@/registry/atoms/select/examples/align-item-with-trigger')
        return { default: m.SelectAlignItem }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/select/examples/demo')
        return { default: m.SelectDemo }
      }),
      disabled: lazy(async () => {
        const m = await import('@/registry/atoms/select/examples/disabled')
        return { default: m.SelectDisabled }
      }),
      groups: lazy(async () => {
        const m = await import('@/registry/atoms/select/examples/groups')
        return { default: m.SelectGroups }
      }),
      invalid: lazy(async () => {
        const m = await import('@/registry/atoms/select/examples/invalid')
        return { default: m.SelectInvalid }
      }),
      scrollable: lazy(async () => {
        const m = await import('@/registry/atoms/select/examples/scrollable')
        return { default: m.SelectScrollable }
      }),
    },
    separator: {
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/separator/examples/demo')
        return { default: m.SeparatorDemo }
      }),
      list: lazy(async () => {
        const m = await import('@/registry/atoms/separator/examples/list')
        return { default: m.SeparatorList }
      }),
      menu: lazy(async () => {
        const m = await import('@/registry/atoms/separator/examples/menu')
        return { default: m.SeparatorMenu }
      }),
      vertical: lazy(async () => {
        const m = await import('@/registry/atoms/separator/examples/vertical')
        return { default: m.SeparatorVertical }
      }),
    },
    sheet: {
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/sheet/examples/demo')
        return { default: m.SheetDemo }
      }),
      'no-close-button': lazy(async () => {
        const m =
          await import('@/registry/atoms/sheet/examples/no-close-button')
        return { default: m.SheetNoCloseButton }
      }),
      side: lazy(async () => {
        const m = await import('@/registry/atoms/sheet/examples/side')
        return { default: m.SheetSide }
      }),
    },
    skeleton: {
      avatar: lazy(async () => {
        const m = await import('@/registry/atoms/skeleton/examples/avatar')
        return { default: m.SkeletonAvatar }
      }),
      card: lazy(async () => {
        const m = await import('@/registry/atoms/skeleton/examples/card')
        return { default: m.SkeletonCard }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/skeleton/examples/demo')
        return { default: m.SkeletonDemo }
      }),
      form: lazy(async () => {
        const m = await import('@/registry/atoms/skeleton/examples/form')
        return { default: m.SkeletonForm }
      }),
      table: lazy(async () => {
        const m = await import('@/registry/atoms/skeleton/examples/table')
        return { default: m.SkeletonTable }
      }),
      text: lazy(async () => {
        const m = await import('@/registry/atoms/skeleton/examples/text')
        return { default: m.SkeletonText }
      }),
    },
    slider: {
      controlled: lazy(async () => {
        const m = await import('@/registry/atoms/slider/examples/controlled')
        return { default: m.SliderControlled }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/slider/examples/demo')
        return { default: m.SliderDemo }
      }),
      disabled: lazy(async () => {
        const m = await import('@/registry/atoms/slider/examples/disabled')
        return { default: m.SliderDisabled }
      }),
      'multiple-thumbs': lazy(async () => {
        const m =
          await import('@/registry/atoms/slider/examples/multiple-thumbs')
        return { default: m.SliderMultiple }
      }),
      range: lazy(async () => {
        const m = await import('@/registry/atoms/slider/examples/range')
        return { default: m.SliderRange }
      }),
      vertical: lazy(async () => {
        const m = await import('@/registry/atoms/slider/examples/vertical')
        return { default: m.SliderVertical }
      }),
    },
    sonner: {
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/sonner/examples/demo')
        return { default: m.SonnerDemo }
      }),
      description: lazy(async () => {
        const m = await import('@/registry/atoms/sonner/examples/description')
        return { default: m.SonnerDescription }
      }),
      position: lazy(async () => {
        const m = await import('@/registry/atoms/sonner/examples/position')
        return { default: m.SonnerPosition }
      }),
      'rich-color': lazy(async () => {
        const m = await import('@/registry/atoms/sonner/examples/rich-color')
        return { default: m.SonnerRichColor }
      }),
      types: lazy(async () => {
        const m = await import('@/registry/atoms/sonner/examples/types')
        return { default: m.SonnerTypes }
      }),
    },
    spinner: {
      badge: lazy(async () => {
        const m = await import('@/registry/atoms/spinner/examples/badge')
        return { default: m.SpinnerBadge }
      }),
      button: lazy(async () => {
        const m = await import('@/registry/atoms/spinner/examples/button')
        return { default: m.SpinnerButton }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/spinner/examples/demo')
        return { default: m.SpinnerDemo }
      }),
      empty: lazy(async () => {
        const m = await import('@/registry/atoms/spinner/examples/empty')
        return { default: m.SpinnerEmpty }
      }),
      'input-group': lazy(async () => {
        const m = await import('@/registry/atoms/spinner/examples/input-group')
        return { default: m.SpinnerInputGroup }
      }),
      size: lazy(async () => {
        const m = await import('@/registry/atoms/spinner/examples/size')
        return { default: m.SpinnerSize }
      }),
    },
    switch: {
      'choice-card': lazy(async () => {
        const m = await import('@/registry/atoms/switch/examples/choice-card')
        return { default: m.SwitchChoiceCard }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/switch/examples/demo')
        return { default: m.SwitchDemo }
      }),
      description: lazy(async () => {
        const m = await import('@/registry/atoms/switch/examples/description')
        return { default: m.SwitchDescription }
      }),
      disabled: lazy(async () => {
        const m = await import('@/registry/atoms/switch/examples/disabled')
        return { default: m.SwitchDisabled }
      }),
      invalid: lazy(async () => {
        const m = await import('@/registry/atoms/switch/examples/invalid')
        return { default: m.SwitchInvalid }
      }),
      size: lazy(async () => {
        const m = await import('@/registry/atoms/switch/examples/size')
        return { default: m.SwitchSizes }
      }),
    },
    table: {
      actions: lazy(async () => {
        const m = await import('@/registry/atoms/table/examples/actions')
        return { default: m.TableActions }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/table/examples/demo')
        return { default: m.TableDemo }
      }),
      footer: lazy(async () => {
        const m = await import('@/registry/atoms/table/examples/footer')
        return { default: m.TableFooterExample }
      }),
    },
    tabs: {
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/tabs/examples/demo')
        return { default: m.TabsDemo }
      }),
      disabled: lazy(async () => {
        const m = await import('@/registry/atoms/tabs/examples/disabled')
        return { default: m.TabsDisabled }
      }),
      icons: lazy(async () => {
        const m = await import('@/registry/atoms/tabs/examples/icons')
        return { default: m.TabsIcons }
      }),
    },
    textarea: {
      button: lazy(async () => {
        const m = await import('@/registry/atoms/textarea/examples/button')
        return { default: m.TextareaButton }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/textarea/examples/demo')
        return { default: m.TextareaDemo }
      }),
      disabled: lazy(async () => {
        const m = await import('@/registry/atoms/textarea/examples/disabled')
        return { default: m.TextareaDisabled }
      }),
      field: lazy(async () => {
        const m = await import('@/registry/atoms/textarea/examples/field')
        return { default: m.TextareaField }
      }),
      invalid: lazy(async () => {
        const m = await import('@/registry/atoms/textarea/examples/invalid')
        return { default: m.TextareaInvalid }
      }),
    },
    toggle: {
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/toggle/examples/demo')
        return { default: m.ToggleDemo }
      }),
      disabled: lazy(async () => {
        const m = await import('@/registry/atoms/toggle/examples/disabled')
        return { default: m.ToggleDisabled }
      }),
      outline: lazy(async () => {
        const m = await import('@/registry/atoms/toggle/examples/outline')
        return { default: m.ToggleOutline }
      }),
      size: lazy(async () => {
        const m = await import('@/registry/atoms/toggle/examples/size')
        return { default: m.ToggleSizes }
      }),
      'with-text': lazy(async () => {
        const m = await import('@/registry/atoms/toggle/examples/with-text')
        return { default: m.ToggleText }
      }),
    },
    'toggle-group': {
      custom: lazy(async () => {
        const m = await import('@/registry/atoms/toggle-group/examples/custom')
        return { default: m.ToggleGroupFontWeightSelector }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/toggle-group/examples/demo')
        return { default: m.ToggleGroupDemo }
      }),
      disabled: lazy(async () => {
        const m =
          await import('@/registry/atoms/toggle-group/examples/disabled')
        return { default: m.ToggleGroupDisabled }
      }),
      outline: lazy(async () => {
        const m = await import('@/registry/atoms/toggle-group/examples/outline')
        return { default: m.ToggleGroupOutline }
      }),
      size: lazy(async () => {
        const m = await import('@/registry/atoms/toggle-group/examples/size')
        return { default: m.ToggleGroupSizes }
      }),
      spacing: lazy(async () => {
        const m = await import('@/registry/atoms/toggle-group/examples/spacing')
        return { default: m.ToggleGroupSpacing }
      }),
      vertical: lazy(async () => {
        const m =
          await import('@/registry/atoms/toggle-group/examples/vertical')
        return { default: m.ToggleGroupVertical }
      }),
    },
    tooltip: {
      demo: lazy(async () => {
        const m = await import('@/registry/atoms/tooltip/examples/demo')
        return { default: m.TooltipDemo }
      }),
      'disabled-button': lazy(async () => {
        const m =
          await import('@/registry/atoms/tooltip/examples/disabled-button')
        return { default: m.TooltipDisabled }
      }),
      side: lazy(async () => {
        const m = await import('@/registry/atoms/tooltip/examples/side')
        return { default: m.TooltipSides }
      }),
      'with-keyboard-shortcut': lazy(async () => {
        const m =
          await import('@/registry/atoms/tooltip/examples/with-keyboard-shortcut')
        return { default: m.TooltipKeyboard }
      }),
    },
  },
  molecules: {
    'animated-testimonial': {
      demo: lazy(async () => {
        const m =
          await import('@/registry/molecules/animated-testimonial/examples/demo')
        return { default: m.AnimatedTextDemo }
      }),
    },
    'animated-text': {
      demo: lazy(async () => {
        const m =
          await import('@/registry/molecules/animated-text/examples/demo')
        return { default: m.AnimatedTextDemo }
      }),
      highlight: lazy(async () => {
        const m =
          await import('@/registry/molecules/animated-text/examples/highlight')
        return { default: m.AnimatedTextHighlight }
      }),
      link: lazy(async () => {
        const m =
          await import('@/registry/molecules/animated-text/examples/link')
        return { default: m.AnimatedTextLink }
      }),
    },
    'color-picker': {
      demo: lazy(async () => {
        const m =
          await import('@/registry/molecules/color-picker/examples/demo')
        return { default: m.ColorPickerDemo }
      }),
    },
    'file-upload': {
      demo: lazy(async () => {
        const m = await import('@/registry/molecules/file-upload/examples/demo')
        return { default: m.FileUploadDemo }
      }),
    },
    'gradient-path-background': {
      demo: lazy(async () => {
        const m =
          await import('@/registry/molecules/gradient-path-background/examples/demo')
        return { default: m.GradientPathBackgroundDemo }
      }),
    },
    'highlighted-text': {
      demo: lazy(async () => {
        const m =
          await import('@/registry/molecules/highlighted-text/examples/demo')
        return { default: m.HighlightedTextDemo }
      }),
    },
    'loading-overlay': {
      demo: lazy(async () => {
        const m =
          await import('@/registry/molecules/loading-overlay/examples/demo')
        return { default: m.LoadingOverlayDemo }
      }),
    },
    'number-input': {
      demo: lazy(async () => {
        const m =
          await import('@/registry/molecules/number-input/examples/demo')
        return { default: m.NumberInputDemo }
      }),
    },
    pagination: {
      demo: lazy(async () => {
        const m = await import('@/registry/molecules/pagination/examples/demo')
        return { default: m.PaginationDemo }
      }),
    },
    'password-input': {
      demo: lazy(async () => {
        const m =
          await import('@/registry/molecules/password-input/examples/demo')
        return { default: m.PasswordInputDemo }
      }),
    },
    'phone-number-input': {
      demo: lazy(async () => {
        const m =
          await import('@/registry/molecules/phone-number-input/examples/demo')
        return { default: m.PhoneNumberInputDemo }
      }),
    },
    'theme-toggle-button': {
      demo: lazy(async () => {
        const m =
          await import('@/registry/molecules/theme-toggle-button/examples/demo')
        return { default: m.ThemeToggleButtonDemo }
      }),
    },
    'tilt-card': {
      demo: lazy(async () => {
        const m = await import('@/registry/molecules/tilt-card/examples/demo')
        return { default: m.GradientPathBackgroundDemo }
      }),
    },
  },
  organisms: {
    'data-table': {
      'action-column': lazy(async () => {
        const m =
          await import('@/registry/organisms/data-table/examples/action-column')
        return { default: m.DataTableActionCellDemo }
      }),
      'column-pinning': lazy(async () => {
        const m =
          await import('@/registry/organisms/data-table/examples/column-pinning')
        return { default: m.DataTableColumnPinning }
      }),
      'column-spanning': lazy(async () => {
        const m =
          await import('@/registry/organisms/data-table/examples/column-spanning')
        return { default: m.DataTableColumnSpanning }
      }),
      'column-visibility': lazy(async () => {
        const m =
          await import('@/registry/organisms/data-table/examples/column-visibility')
        return { default: m.DataTableColumnVisibility }
      }),
      demo: lazy(async () => {
        const m = await import('@/registry/organisms/data-table/examples/demo')
        return { default: m.DataTableDemo }
      }),
      expanding: lazy(async () => {
        const m =
          await import('@/registry/organisms/data-table/examples/expanding')
        return { default: m.DataTableExpanding }
      }),
      selection: lazy(async () => {
        const m =
          await import('@/registry/organisms/data-table/examples/selection')
        return { default: m.DataTableSelection }
      }),
    },
    editor: {
      demo: lazy(async () => {
        const m = await import('@/registry/organisms/editor/examples/demo')
        return { default: m.EditorDemo }
      }),
    },
    'native-pdf-viewer': {
      demo: lazy(async () => {
        const m =
          await import('@/registry/organisms/native-pdf-viewer/examples/demo')
        return { default: m.NativePdfViewerDemo }
      }),
    },
    'pdf-viewer': {
      demo: lazy(async () => {
        const m = await import('@/registry/organisms/pdf-viewer/examples/demo')
        return { default: m.PdfViewerDemo }
      }),
    },
    'smart-filter': {
      demo: lazy(async () => {
        const m =
          await import('@/registry/organisms/smart-filter/examples/demo')
        return { default: m.SmartFilterDemo }
      }),
    },
    'smart-form': {
      demo: lazy(async () => {
        const m = await import('@/registry/organisms/smart-form/examples/demo')
        return { default: m.SmartFormDemo }
      }),
    },
  },
}

# Graph Report - atomicdocs  (2026-11-07)

## Corpus Check
- 791 files · ~124,854 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 8 file(s) not represented in the graph (top: (none) 3, .lock 1, .ico 1)

## Summary
- 3129 nodes · 9745 edges · 192 communities (149 shown, 43 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 162 edges (avg confidence: 0.93)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c2b86a9a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- components/phone-number-input.tsx
- components/color-picker.tsx
- CardContent
- InputGroupAddon
- package.json
- ComboboxItem
- smart-filter/components/lib/form.ts
- components/lib/table.ts
- useAppTable
- SmartFormFieldContainer
- image-button.tsx
- smart-form/examples/demo.tsx
- lucide-react
- Button
- Popover
- AutocompleteInput
- ContextMenuContent
- devDependencies
- drawer/examples/demo.tsx
- components/sidebar.tsx
- DropdownMenu
- class-variance-authority
- components/color-picker.tsx
- $.tsx
- async-search-multiple-with-infinite-scroll.tsx
- components/gradient-path-background.tsx
- components/alert-dialog.tsx
- routeTree.gen.ts
- lazy-components.ts
- Separator
- FieldError
- compilerOptions
- components.json
- dialog/examples/demo.tsx
- components/theme-toggle-button.tsx
- InputOTP
- components/command.tsx
- Issue tracker: GitHub
- Slider
- multi-select-with-infinite-query-field.tsx
- template.sh
- Alert
- Examples
- components/navigation-menu.tsx
- cli.json
- scripts
- hover-card/examples/sides.tsx
- Progress
- ResizableHandle
- generate-lazy-components.ts
- tanstack-query.ts
- Kbd
- teach/SKILL.md
- ultracite
- Examples
- components/pdf-viewer.tsx
- components/lib/schemas/date.ts
- Process
- interface
- interface
- interface
- interface
- interface
- interface
- interface
- interface
- interface
- interface
- interface
- interface
- interface
- interface
- registry.json
- interface
- interface
- interface
- hitl-loop.template.sh
- interface
- interface
- interface
- interface
- interface
- interface
- interface
- interface
- fumadocs-mdx
- env.d.ts
- tiptap.d.ts
- commitlint.config.ts
- Triage
- Accordion
- Calendar
- FieldGroup
- Codebase Design
- During the session
- Card
- HTML Report Format
- Ask Matt
- scroll-area/examples/demo.tsx
- Switch
- Diagnosing Bugs
- Examples
- components/autocomplete.tsx
- Examples
- components/sonner.tsx
- Examples
- extension.ts
- Examples
- Test-Driven Development
- Process
- writing-for-agents/SKILL.md
- Repository Guidelines
- wayfinder/SKILL.md
- Examples
- Examples
- Examples
- Examples
- Examples
- Examples
- components/tilt-card.tsx
- to-spec/SKILL.md
- Examples
- Examples
- Examples
- Spinner
- component-preview.tsx
- components/animated-testimonial.tsx
- Process
- <Questionnaire title>
- Examples
- carousel.mdx
- Examples
- Examples
- Examples
- Process
- Examples
- Examples
- Examples
- Examples
- Examples
- card.mdx
- hover-card.mdx
- components/lib/schemas/file.ts
- tabs.mdx
- animated-text.mdx
- Domain Docs
- Issue tracker: Local Markdown
- date-picker.mdx
- link-button.tsx
- NumberInput
- PhoneNumberInput
- GLOSSARY.md Format
- field.mdx
- label.mdx
- navigation-menu.mdx
- sidebar.mdx
- animated-testimonial.mdx
- color-picker.mdx
- file-upload.mdx
- gradient-path-background.mdx
- highlighted-text.mdx
- loading-overlay.mdx
- number-input.mdx
- pagination.mdx
- phone-number-input.mdx
- theme-toggle-button.mdx
- tilt-card.mdx
- editor.mdx
- native-pdf-viewer.mdx
- pdf-viewer.mdx
- smart-filter.mdx
- smart-form.mdx
- installation.mdx
- agents/triage-labels.md
- README.md

## God Nodes (most connected - your core abstractions)
1. `Button()` - 288 edges
2. `lucide-react` - 145 edges
3. `Field()` - 138 edges
4. `react` - 135 edges
5. `FieldLabel()` - 101 edges
6. `cn` - 82 edges
7. `InputGroupAddon()` - 69 edges
8. `Input()` - 65 edges
9. `DropdownMenu()` - 63 edges
10. `FieldDescription()` - 62 edges

## Surprising Connections (you probably didn't know these)
- `Badge` --references--> `Badge()`  [INFERRED]
  content/docs/atoms/input.mdx → src/registry/atoms/badge/components/badge.tsx
- `Nested` --references--> `ButtonGroup()`  [INFERRED]
  content/docs/atoms/button-group.mdx → src/registry/atoms/button-group/components/button-group.tsx
- `Button Group` --references--> `ButtonGroup()`  [INFERRED]
  content/docs/atoms/input.mdx → src/registry/atoms/button-group/components/button-group.tsx
- `Separator` --references--> `ButtonGroupSeparator()`  [INFERRED]
  content/docs/atoms/button-group.mdx → src/registry/atoms/button-group/components/button-group.tsx
- `Split` --references--> `ButtonGroupSeparator()`  [INFERRED]
  content/docs/atoms/button-group.mdx → src/registry/atoms/button-group/components/button-group.tsx

## Import Cycles
- 2-file cycle: `src/registry/organisms/data-table/components/lib/table.ts -> src/registry/organisms/data-table/components/table/body.tsx -> src/registry/organisms/data-table/components/lib/table.ts`
- 2-file cycle: `src/registry/organisms/data-table/components/lib/table.ts -> src/registry/organisms/data-table/components/table/footer.tsx -> src/registry/organisms/data-table/components/lib/table.ts`
- 2-file cycle: `src/registry/organisms/data-table/components/lib/table.ts -> src/registry/organisms/data-table/components/table/additional-info.tsx -> src/registry/organisms/data-table/components/lib/table.ts`
- 2-file cycle: `src/registry/organisms/data-table/components/lib/table.ts -> src/registry/organisms/data-table/components/table/header.tsx -> src/registry/organisms/data-table/components/lib/table.ts`
- 2-file cycle: `src/registry/organisms/data-table/components/header/base.tsx -> src/registry/organisms/data-table/components/lib/table.ts -> src/registry/organisms/data-table/components/header/base.tsx`
- 2-file cycle: `src/registry/organisms/data-table/components/cell/checkbox.tsx -> src/registry/organisms/data-table/components/lib/table.ts -> src/registry/organisms/data-table/components/cell/checkbox.tsx`
- 2-file cycle: `src/registry/organisms/data-table/components/header/checkbox.tsx -> src/registry/organisms/data-table/components/lib/table.ts -> src/registry/organisms/data-table/components/header/checkbox.tsx`
- 2-file cycle: `src/registry/organisms/data-table/components/lib/table.ts -> src/registry/organisms/data-table/components/table/column-visibility-selection.tsx -> src/registry/organisms/data-table/components/lib/table.ts`
- 2-file cycle: `src/registry/organisms/data-table/components/lib/table.ts -> src/registry/organisms/data-table/components/table/row-selection.tsx -> src/registry/organisms/data-table/components/lib/table.ts`
- 2-file cycle: `src/registry/organisms/data-table/components/lib/table.ts -> src/registry/organisms/data-table/components/table/pagination.tsx -> src/registry/organisms/data-table/components/lib/table.ts`

## Communities (192 total, 43 thin omitted)

### Community 0 - "components/phone-number-input.tsx"
Cohesion: 0.06
Nodes (85): Avatar Group, Avatar Group Count, Avatar Group with Icon, Badge, Badge with icon, Basic, Dropdown, Examples (+77 more)

### Community 1 - "components/color-picker.tsx"
Cohesion: 0.14
Nodes (40): Groups, ButtonGroupSelect(), CURRENCIES, FieldSeparator(), FieldDemo(), months, years, InputForm() (+32 more)

### Community 2 - "CardContent"
Cohesion: 0.18
Nodes (26): API, Examples, Orientation, Plugins, Sizes, Spacing, Carousel(), CarouselApi (+18 more)

### Community 3 - "InputGroupAddon"
Cohesion: 0.19
Nodes (22): AutocompleteClear(), InputInputGroup(), InputGroup(), InputGroupAddon(), inputGroupAddonVariants, InputGroupButton(), inputGroupButtonVariants, InputGroupInput() (+14 more)

### Community 4 - "package.json"
Cohesion: 0.03
Nodes (83): dependencies, @base-ui/react@^1.9.0, class-variance-authority@^0.7.1, cmdk@^1.1.1, cn@^0.5.2, cnfast@^0.2.0, color@^5.0.3, embla-carousel-autoplay@^8.6.0 (+75 more)

### Community 5 - "ComboboxItem"
Cohesion: 0.15
Nodes (42): Combobox, ComboboxClear(), ComboboxCollection(), ComboboxContent(), ComboboxEmpty(), ComboboxGroup(), ComboboxInput(), ComboboxItem() (+34 more)

### Community 6 - "smart-filter/components/lib/form.ts"
Cohesion: 0.06
Nodes (59): Tabs(), TabsContent(), TabsList(), TabsTrigger(), TabsDemo(), TabsDisabled(), TabsIcons(), AdvancedFilter() (+51 more)

### Community 7 - "components/lib/table.ts"
Cohesion: 0.07
Nodes (51): Actions, Examples, Footer, Installation, Usage, @tanstack/react-table, CheckboxInTable(), tableData (+43 more)

### Community 8 - "useAppTable"
Cohesion: 0.06
Nodes (43): createAppColumnHelper, useAppTable, columnHelper, columns, data, DataTableActionCellDemo(), Row, columnHelper (+35 more)

### Community 9 - "SmartFormFieldContainer"
Cohesion: 0.17
Nodes (19): FieldErrorProps, FieldProps, CheckboxField(), DateField(), EditorField(), SmartFormFieldContainer(), SmartFormFieldContainerProps, FileFieldProps (+11 more)

### Community 10 - "image-button.tsx"
Cohesion: 0.11
Nodes (34): react-dropzone, sonner, @tanstack/react-form, zod, FileUpload(), FileUploadContent(), FileUploadContentProps, FileUploadContext (+26 more)

### Community 11 - "smart-form/examples/demo.tsx"
Cohesion: 0.05
Nodes (27): getAutocompleteFieldSchema(), CheckboxFieldInputValue, getCheckboxFieldSchema(), EditorFieldInputValue, getEditorFieldSchema(), GetEditorFieldSchemaArgs, getInputFieldSchema(), GetInputFieldSchemaArgs (+19 more)

### Community 12 - "lucide-react"
Cohesion: 0.10
Nodes (40): cn, lucide-react, @tiptap/react, BlockquoteButton(), BoldButton(), ImageAttributes, ResizingPosition, CustomYoutubeExtension (+32 more)

### Community 13 - "Button"
Cohesion: 0.08
Nodes (41): Button(), ButtonProps, buttonVariants, ButtonDemo(), ButtonIcon(), ButtonRounded(), ButtonSize(), ButtonLoading() (+33 more)

### Community 14 - "Popover"
Cohesion: 0.11
Nodes (31): color, ButtonGroupPopover(), ButtonGroupPopover(), DatePicker(), DatePickerProps, DateRangePicker(), DateRangePickerProps, DatePickerBasic() (+23 more)

### Community 15 - "AutocompleteInput"
Cohesion: 0.24
Nodes (22): Autocomplete, AutocompleteContent(), AutocompleteInput(), AutocompleteItem(), AutocompleteList(), AutocompleteAutoHighlight(), frameworks, AutocompleteBasic() (+14 more)

### Community 16 - "ContextMenuContent"
Cohesion: 0.16
Nodes (36): Basic, Checkboxes, Destructive, Examples, Groups, Icons, Installation, Radio (+28 more)

### Community 17 - "devDependencies"
Cohesion: 0.06
Nodes (34): config, @tanstack/react-start@1.169.3, devDependencies, @commitlint/cli@^21.2.3, @commitlint/config-conventional@^21.2.3, @commitlint/format@^21.2.3, husky@^9.1.7, lint-staged@^17.6.0 (+26 more)

### Community 18 - "drawer/examples/demo.tsx"
Cohesion: 0.11
Nodes (39): Custom Colors, Examples, Installation, Link, Usage, Variants, With Icon, With Spinner (+31 more)

### Community 19 - "components/sidebar.tsx"
Cohesion: 0.07
Nodes (35): Examples, Installation, No Close Button, Side, Usage, Sheet(), SheetClose(), SheetContent() (+27 more)

### Community 20 - "DropdownMenu"
Cohesion: 0.06
Nodes (110): Basic, Collapsed, Custom Separator, Dropdown, Examples, Installation, Link Component, Usage (+102 more)

### Community 21 - "class-variance-authority"
Cohesion: 0.14
Nodes (16): Toggle(), toggleVariants, ToggleDemo(), ToggleDisabled(), ToggleOutline(), ToggleSizes(), ToggleText(), ToggleGroup() (+8 more)

### Community 22 - "components/color-picker.tsx"
Cohesion: 0.20
Nodes (20): ColorPicker(), ColorPickerAlpha(), ColorPickerAlphaProps, ColorPickerContext, ColorPickerContextValue, ColorPickerEyeDropper(), ColorPickerEyeDropperProps, ColorPickerFormatProps (+12 more)

### Community 23 - "$.tsx"
Cohesion: 0.09
Nodes (22): fumadocs-ui, @tanstack/react-router, commandPrefixes, InstallationTabsProps, PackageManager, packageManagers, getMDXComponents(), MDXProvidedComponents (+14 more)

### Community 24 - "async-search-multiple-with-infinite-scroll.tsx"
Cohesion: 0.21
Nodes (14): @tanstack/react-query, @uidotdev/usehooks, axios, executeAxios(), infiniteQueryPageSize, infiniteQueryPageSize, resolveApiPath(), useGetOptionsQuery() (+6 more)

### Community 25 - "components/gradient-path-background.tsx"
Cohesion: 0.11
Nodes (15): AnimatedText(), AnimatedTextAnimation(), AnimatedTextProps, AnimatedTextDemo(), AnimatedTextHighlight(), AnimatedTextLink(), circuits, GradientPathBackground() (+7 more)

### Community 26 - "components/alert-dialog.tsx"
Cohesion: 0.26
Nodes (26): Basic, Destructive, Examples, Installation, Media, Small, Small with media, Usage (+18 more)

### Community 27 - "routeTree.gen.ts"
Cohesion: 0.09
Nodes (32): fumadocs-core@16.17.5, fumadocs-core, NotFound(), decodeMarkdownUrl(), getLLMText(), source, getRouter(), Route (+24 more)

### Community 28 - "lazy-components.ts"
Cohesion: 0.12
Nodes (40): Field, Field, CheckboxDemo(), CheckboxDescription(), Field(), FieldContent(), FieldDescription(), FieldLabel() (+32 more)

### Community 29 - "Separator"
Cohesion: 0.14
Nodes (9): buttonGroupVariants, ItemSeparator(), Separator(), SeparatorDemo(), SeparatorList(), SeparatorMenu(), SeparatorVertical(), SidebarSeparator() (+1 more)

### Community 30 - "FieldError"
Cohesion: 0.25
Nodes (27): ComboboxChip(), ComboboxChips(), ComboboxChipsInput(), ComboboxValue(), useComboboxAnchor(), ComboboxAsyncSearchMultipleInfiniteScroll(), ComboboxMultiple(), frameworks (+19 more)

### Community 31 - "compilerOptions"
Cohesion: 0.09
Nodes (22): compilerOptions, allowJs, esModuleInterop, forceConsistentCasingInFileNames, isolatedModules, jsx, jsxImportSource, lib (+14 more)

### Community 32 - "components.json"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 33 - "dialog/examples/demo.tsx"
Cohesion: 0.39
Nodes (16): Dialog(), DialogClose(), DialogContent(), DialogDescription(), DialogFooter(), DialogHeader(), DialogOverlay(), DialogPortal() (+8 more)

### Community 34 - "components/theme-toggle-button.tsx"
Cohesion: 0.18
Nodes (17): defaultThemeLocalStorageKey, getCircleBlurCx(), getCircleBlurCy(), getCircleCx(), getCircleCy(), getDefaultTheme(), observeTheme(), StartPosition (+9 more)

### Community 35 - "InputOTP"
Cohesion: 0.32
Nodes (13): input-otp, InputOTP(), InputOTPGroup(), InputOTPSeparator(), InputOTPSlot(), InputOTPAlphanumeric(), InputOTPControlled(), InputOTPDemo() (+5 more)

### Community 36 - "components/command.tsx"
Cohesion: 0.49
Nodes (14): Command(), CommandDialog(), CommandEmpty(), CommandGroup(), CommandInput(), CommandItem(), CommandList(), CommandSeparator() (+6 more)

### Community 37 - "Issue tracker: GitHub"
Cohesion: 0.06
Nodes (30): Before exploring, read these, Domain Docs, File structure, Flag ADR conflicts, Use the glossary's vocabulary, Conventions, Issue tracker: GitHub, Pull requests as a triage surface (+22 more)

### Community 38 - "Slider"
Cohesion: 0.15
Nodes (11): @base-ui/react, InputProps, Label(), LabelDemo(), Slider(), SliderControlled(), SliderDemo(), SliderDisabled() (+3 more)

### Community 39 - "multi-select-with-infinite-query-field.tsx"
Cohesion: 0.21
Nodes (13): ComboboxStatus(), updateSelectedItemReferencesAndGetItems(), fetchNextPage(), getNextPageParam(), useGetOptionsInfiniteQuery(), getSelectFieldSchema(), GetSelectFieldSchemaArgsWithoutRequired, GetSelectFieldSchemaArgsWithRequired (+5 more)

### Community 40 - "template.sh"
Cohesion: 0.23
Nodes (17): ask(), ask_secret(), banner(), _clear(), _existing(), finish(), note(), open_url() (+9 more)

### Community 41 - "Alert"
Cohesion: 0.36
Nodes (10): Alert(), AlertAction(), AlertDescription(), AlertTitle(), alertVariants, AlertActionExample(), AlertBasic(), AlertColors() (+2 more)

### Community 42 - "Examples"
Cohesion: 0.14
Nodes (13): Dropdown Menu, Examples, Input, Input Group, Installation, Nested, Orientation, Popover (+5 more)

### Community 43 - "components/navigation-menu.tsx"
Cohesion: 0.30
Nodes (11): NavigationMenu(), NavigationMenuContent(), NavigationMenuItem(), NavigationMenuLink(), NavigationMenuList(), NavigationMenuPositioner(), NavigationMenuTrigger(), navigationMenuTriggerStyle (+3 more)

### Community 44 - "cli.json"
Cohesion: 0.17
Nodes (11): aliases, componentsDir, cssDir, layoutDir, libDir, uiDir, baseDir, commands (+3 more)

### Community 45 - "scripts"
Cohesion: 0.17
Nodes (12): scripts, build, check, dev, fix, gen-lazy-components, lint-staged, postinstall (+4 more)

### Community 46 - "hover-card/examples/sides.tsx"
Cohesion: 0.44
Nodes (7): HoverCard(), HoverCardContent(), HoverCardTrigger(), HoverCardDemo(), HoverCardDemo(), HOVER_CARD_SIDES, HoverCardSides()

### Community 47 - "Progress"
Cohesion: 0.18
Nodes (13): Controlled, Examples, Installation, Label, Usage, Progress(), ProgressIndicator(), ProgressLabel() (+5 more)

### Community 48 - "ResizableHandle"
Cohesion: 0.25
Nodes (11): Examples, Handle, Installation, Usage, Vertical, ResizableHandle(), ResizablePanel(), ResizablePanelGroup() (+3 more)

### Community 49 - "generate-lazy-components.ts"
Cohesion: 0.24
Nodes (6): ExampleEntry, extractExportName(), generate(), OUTPUT_FILE, REGISTRY_DIR, toRegistryModulePath()

### Community 50 - "tanstack-query.ts"
Cohesion: 0.33
Nodes (3): axios@^1.20.0, axios, queryClient

### Community 51 - "Kbd"
Cohesion: 0.20
Nodes (12): Button, Examples, Group, Input Group, Installation, Tooltip, Usage, Kbd() (+4 more)

### Community 52 - "teach/SKILL.md"
Cohesion: 0.07
Nodes (25): Learning Record Format, Numbering, Optional sections, Supersession, Template, What does _not_ qualify, When to write a learning record, MISSION.md Format (+17 more)

### Community 53 - "ultracite"
Cohesion: 0.25
Nodes (6): oxfmt@^0.73.0, ultracite@^8.0.1, oxlint@^1.88.0, oxfmt, oxlint, ultracite

### Community 54 - "Examples"
Cohesion: 0.25
Nodes (7): Choice Card, Description, Disabled, Examples, Installation, Invalid, Usage

### Community 55 - "components/pdf-viewer.tsx"
Cohesion: 0.27
Nodes (5): @embedpdf/react-pdf-viewer@^2.15.1, @embedpdf/react-pdf-viewer, themeOption, PDFViewer(), PdfViewerDemo()

### Community 56 - "components/lib/schemas/date.ts"
Cohesion: 0.25
Nodes (6): DateFieldInputValue, getDateFieldSchema(), GetDateFieldSchemaArgsWithoutRequired, GetDateFieldSchemaArgsWithRequired, GetDateFieldSchemaWithoutRequired, GetDateFieldSchemaWithRequired

### Community 57 - "Process"
Cohesion: 0.07
Nodes (25): 1. State the question, 2. Isolate the logic in a portable module, 3. Build the shareable HTML file, 4. Hand it over, 5. Capture the answer and the prototype, Anti-patterns, Logic Prototype, Process (+17 more)

### Community 58 - "interface"
Cohesion: 0.33
Nodes (5): interface, display_name, short_description, policy, allow_implicit_invocation

### Community 59 - "interface"
Cohesion: 0.33
Nodes (5): interface, display_name, short_description, policy, allow_implicit_invocation

### Community 60 - "interface"
Cohesion: 0.33
Nodes (5): interface, display_name, short_description, policy, allow_implicit_invocation

### Community 61 - "interface"
Cohesion: 0.33
Nodes (5): interface, display_name, short_description, policy, allow_implicit_invocation

### Community 62 - "interface"
Cohesion: 0.33
Nodes (5): interface, display_name, short_description, policy, allow_implicit_invocation

### Community 63 - "interface"
Cohesion: 0.33
Nodes (5): interface, display_name, short_description, policy, allow_implicit_invocation

### Community 64 - "interface"
Cohesion: 0.33
Nodes (5): interface, display_name, short_description, policy, allow_implicit_invocation

### Community 65 - "interface"
Cohesion: 0.33
Nodes (5): interface, display_name, short_description, policy, allow_implicit_invocation

### Community 66 - "interface"
Cohesion: 0.33
Nodes (5): interface, display_name, short_description, policy, allow_implicit_invocation

### Community 67 - "interface"
Cohesion: 0.33
Nodes (5): interface, display_name, short_description, policy, allow_implicit_invocation

### Community 68 - "interface"
Cohesion: 0.33
Nodes (5): interface, display_name, short_description, policy, allow_implicit_invocation

### Community 69 - "interface"
Cohesion: 0.33
Nodes (5): interface, display_name, short_description, policy, allow_implicit_invocation

### Community 70 - "interface"
Cohesion: 0.33
Nodes (5): interface, display_name, short_description, policy, allow_implicit_invocation

### Community 71 - "interface"
Cohesion: 0.33
Nodes (5): interface, display_name, short_description, policy, allow_implicit_invocation

### Community 72 - "registry.json"
Cohesion: 0.40
Nodes (4): homepage, items, name, $schema

### Community 73 - "interface"
Cohesion: 0.50
Nodes (3): interface, display_name, short_description

### Community 74 - "interface"
Cohesion: 0.50
Nodes (3): interface, display_name, short_description

### Community 75 - "interface"
Cohesion: 0.50
Nodes (3): interface, display_name, short_description

### Community 76 - "hitl-loop.template.sh"
Cohesion: 0.83
Nodes (3): capture(), hitl-loop.template.sh script, step()

### Community 77 - "interface"
Cohesion: 0.50
Nodes (3): interface, display_name, short_description

### Community 78 - "interface"
Cohesion: 0.50
Nodes (3): interface, display_name, short_description

### Community 79 - "interface"
Cohesion: 0.50
Nodes (3): interface, display_name, short_description

### Community 80 - "interface"
Cohesion: 0.50
Nodes (3): interface, display_name, short_description

### Community 81 - "interface"
Cohesion: 0.50
Nodes (3): interface, display_name, short_description

### Community 82 - "interface"
Cohesion: 0.50
Nodes (3): interface, display_name, short_description

### Community 83 - "interface"
Cohesion: 0.50
Nodes (3): interface, display_name, short_description

### Community 84 - "interface"
Cohesion: 0.50
Nodes (3): interface, display_name, short_description

### Community 85 - "fumadocs-mdx"
Cohesion: 0.50
Nodes (3): fumadocs-mdx@15.4.7, fumadocs-mdx, docs

### Community 86 - "env.d.ts"
Cohesion: 0.50
Nodes (3): ImportMetaEnv, NodeJS, ProcessEnv

### Community 87 - "tiptap.d.ts"
Cohesion: 0.50
Nodes (3): Commands, FileAttributes, @tiptap/core

### Community 97 - "Triage"
Cohesion: 0.07
Nodes (25): Bad agent brief, Behavioral, not procedural, Complete acceptance criteria, Durability over precision, Examples, Explicit scope boundaries, Good agent brief (bug), Good agent brief (enhancement) (+17 more)

### Community 98 - "Accordion"
Cohesion: 0.17
Nodes (22): Basic, Borders, Card, Disabled, Examples, Installation, Multiple, Usage (+14 more)

### Community 99 - "Calendar"
Cohesion: 0.14
Nodes (10): react, react-day-picker, Calendar(), CalendarChevron(), CalendarDayButton(), CalendarRoot(), CalendarWeekNumber(), defaultClassNames (+2 more)

### Community 100 - "FieldGroup"
Cohesion: 0.24
Nodes (11): Fieldset, Checkbox(), CheckboxProps, CheckboxBasic(), CheckboxDisabled(), CheckboxGroup(), CheckboxInvalid(), FieldGroup() (+3 more)

### Community 101 - "Codebase Design"
Cohesion: 0.09
Nodes (21): 1. In-process, 2. Local-substitutable, 3. Remote but owned (Ports & Adapters), 4. True external (Mock), Deepening, Dependency categories, Seam discipline, Testing strategy: replace, don't layer (+13 more)

### Community 102 - "During the session"
Cohesion: 0.09
Nodes (19): ADR Format, Numbering, Optional sections, Template, What qualifies, When to offer an ADR, CONTEXT.md Format, Rules (+11 more)

### Community 103 - "Card"
Cohesion: 0.26
Nodes (17): bookedDates, CalendarBookedDates(), CalendarWithTime(), CalendarWithPresets(), CalendarWeekNumbers(), Card(), CardAction(), CardContent() (+9 more)

### Community 104 - "HTML Report Format"
Cohesion: 0.10
Nodes (18): Call-graph collapse, Candidate card, Cross-section (good for layered shallowness), Diagram patterns, Hand-built boxes-and-arrows (when Mermaid's layout fights you), Header, HTML Report Format, Mass diagram (good for "interface as wide as implementation") (+10 more)

### Community 105 - "Ask Matt"
Cohesion: 0.12
Nodes (14): Phase boundaries, Primary and secondary sources, The five options, The tree, These are judgement calls, Ask Matt, Codebase health, Context hygiene (+6 more)

### Community 106 - "scroll-area/examples/demo.tsx"
Cohesion: 0.18
Nodes (11): Examples, Horizontal, Installation, Usage, ScrollArea(), ScrollBar(), ScrollAreaDemo(), tags (+3 more)

### Community 107 - "Switch"
Cohesion: 0.17
Nodes (11): Choice Card, Description, Disabled, Examples, Installation, Invalid, Size, Usage (+3 more)

### Community 108 - "Diagnosing Bugs"
Cohesion: 0.13
Nodes (14): Completion criterion: a tight loop that goes red, Diagnosing Bugs, Minimise, Non-deterministic bugs, Phase 1: Build a feedback loop, Phase 2: Reproduce + minimise, Phase 3: Hypothesise, Phase 4: Instrument (+6 more)

### Community 109 - "Examples"
Cohesion: 0.12
Nodes (15): Badge, Basic, Button Group, Disabled, Examples, Field Group, File, Form (+7 more)

### Community 110 - "components/autocomplete.tsx"
Cohesion: 0.21
Nodes (10): Groups, AutocompleteCollection(), AutocompleteGroup(), AutocompleteLabel(), AutocompleteSeparator(), AutocompleteStatus(), getAutocompleteTitle(), AutocompleteGroups() (+2 more)

### Community 111 - "Examples"
Cohesion: 0.12
Nodes (15): Async Search With Infinite Scroll (Multiple), Async Search With Infinite Scroll (Single), Auto Highlight, Basic, Clear Button, Custom Items, Disabled, Examples (+7 more)

### Community 112 - "components/sonner.tsx"
Cohesion: 0.17
Nodes (9): Description, Examples, Installation, Position, Rich color, Types, Usage, Theme (+1 more)

### Community 113 - "Examples"
Cohesion: 0.14
Nodes (13): Action column, Cell Spanning, Client Side Pagination, Column Pinning, Column Visibility, Composition, Examples, Expanding (+5 more)

### Community 114 - "extension.ts"
Cohesion: 0.14
Nodes (13): @tiptap/extension-color@^3.32.0, @tiptap/extension-highlight@^3.32.0, @tiptap/extension-list@^3.32.0, @tiptap/extension-text-style@^3.32.0, @tiptap/starter-kit@^3.32.0, @tiptap/extension-color, @tiptap/extension-highlight, @tiptap/extension-list (+5 more)

### Community 115 - "Examples"
Cohesion: 0.20
Nodes (9): Auto highlight, Basic, Clear button, Disabled, Examples, Input group, Installation, Invalid (+1 more)

### Community 116 - "Test-Driven Development"
Cohesion: 0.15
Nodes (10): Designing for Mockability, When to Mock, Anti-patterns, Rules of the loop, Seams: where tests go, Test-Driven Development, What a good test is, Bad Tests (+2 more)

### Community 117 - "Process"
Cohesion: 0.15
Nodes (12): 1. Gather context, 2. Explore the codebase (optional), 3. Draft vertical slices, 4. Quiz the user, 5. Publish the tickets to the configured tracker, Acceptance criteria, Blocked by, <NN>: <Ticket title> (+4 more)

### Community 118 - "writing-for-agents/SKILL.md"
Cohesion: 0.15
Nodes (11): Context pointers, Information hierarchy, Leading words, Invocation, Router skills, Skill mechanics, Splitting by invocation, Pruning (+3 more)

### Community 119 - "Repository Guidelines"
Cohesion: 0.17
Nodes (11): Agent skills, Build, Test, and Development Commands, Coding Style & Naming Conventions, Commits & Pull Requests, Domain docs, Frontend Engineering Approach, Issue tracker, Project Structure & Module Organization (+3 more)

### Community 120 - "wayfinder/SKILL.md"
Cohesion: 0.17
Nodes (11): Chart the map, Fog of war, Invocation, Out of scope, Plan, don't do, Refer by name, The Map, The map body (+3 more)

### Community 121 - "Examples"
Cohesion: 0.17
Nodes (11): Basic, Booked Dates, Custom Cell Size, Date and Time Picker, Examples, Installation, Month and Year Selector, Presets (+3 more)

### Community 122 - "Examples"
Cohesion: 0.17
Nodes (11): Button, Custom Input, Dropdown, Examples, Icon, Installation, Kbd, Spinner (+3 more)

### Community 123 - "Examples"
Cohesion: 0.17
Nodes (11): Alphanumeric, Controlled, Disabled, Examples, Form, Four Digits, Installation, Invalid (+3 more)

### Community 124 - "Examples"
Cohesion: 0.20
Nodes (9): Examples, Icon, Installation, Rounded, Size, Spinner, Usage, Variant (+1 more)

### Community 125 - "Examples"
Cohesion: 0.20
Nodes (9): Basic, Description, Disabled, Examples, Group, Installation, Invalid State, Table (+1 more)

### Community 126 - "Examples"
Cohesion: 0.20
Nodes (9): Custom, Disabled, Examples, Installation, Outline, Size, Spacing, Usage (+1 more)

### Community 127 - "components/tilt-card.tsx"
Cohesion: 0.29
Nodes (7): TiltCard(), TiltCardContent(), TiltCardContentProps, TiltCardContext, TiltCardContextValue, TiltCardProps, GradientPathBackgroundDemo()

### Community 128 - "to-spec/SKILL.md"
Cohesion: 0.22
Nodes (8): Further Notes, Implementation Decisions, Out of Scope, Problem Statement, Process, Solution, Testing Decisions, User Stories

### Community 129 - "Examples"
Cohesion: 0.22
Nodes (8): Examples, Installation, Nested, Non Modal, Position, Snap Points, Swipe Handle, Usage

### Community 130 - "Examples"
Cohesion: 0.22
Nodes (8): Avatar, Card, Examples, Form, Installation, Table, Text, Usage

### Community 131 - "Examples"
Cohesion: 0.22
Nodes (8): Controlled, Disabled, Examples, Installation, Multiple thumbs, Range, Usage, Vertical

### Community 132 - "Spinner"
Cohesion: 0.10
Nodes (18): Badge, Button, Empty, Examples, Input Group, Installation, Size, Usage (+10 more)

### Community 133 - "component-preview.tsx"
Cohesion: 0.27
Nodes (9): componentCache, ComponentPreview(), ComponentPreviewProps, extractFileContentFn, FileContent(), FileContentProps, getComponent(), parseComponentPath() (+1 more)

### Community 134 - "components/animated-testimonial.tsx"
Cohesion: 0.33
Nodes (7): AnimatedTestimonial(), AnimatedTestimonialCanopy(), AnimatedTestimonialCanopyProps, AnimatedTestimonialCard(), AnimatedTestimonialCardProps, AnimatedTestimonialProps, AnimatedTextDemo()

### Community 135 - "Process"
Cohesion: 0.25
Nodes (7): 1. Pin the fixed point, 2. Identify the spec source, 3. Identify the standards sources, 4. Spawn both sub-agents in parallel, 5. Aggregate, Process, Why two axes

### Community 136 - "<Questionnaire title>"
Cohesion: 0.25
Nodes (7): Anything else?, Context, Document structure, How to answer, <Questionnaire title>, <Theme heading>, What load is the system expected to handle at launch?

### Community 137 - "Examples"
Cohesion: 0.25
Nodes (7): Action, Basic, Custom Colors, Destructive, Examples, Installation, Usage

### Community 139 - "Examples"
Cohesion: 0.25
Nodes (7): Basic, Examples, Groups, Installation, Scrollable, Shortcuts, Usage

### Community 140 - "Examples"
Cohesion: 0.25
Nodes (7): Disabled, Examples, Installation, Outline, Size, Usage, With Text

### Community 141 - "Examples"
Cohesion: 0.25
Nodes (7): Align Item With Trigger, Disabled, Examples, Installation, Invalid, Scrollable, Usage

### Community 142 - "Process"
Cohesion: 0.29
Nodes (6): 1. Scope the procedure, 2. Map each stage's journey, 3. Author the wizard, 4. Verify and hand off, Process, Wizard

### Community 143 - "Examples"
Cohesion: 0.29
Nodes (6): Custom Close Button, Examples, Installation, No Close Button, Sticky Footer, Usage

### Community 144 - "Examples"
Cohesion: 0.29
Nodes (6): Align, Basic, Examples, Installation, Usage, With Form

### Community 145 - "Examples"
Cohesion: 0.29
Nodes (6): Examples, Installation, List, Menu, Usage, Vertical

### Community 146 - "Examples"
Cohesion: 0.29
Nodes (6): Button, Disabled, Examples, Installation, Invalid, Usage

### Community 147 - "Examples"
Cohesion: 0.29
Nodes (6): Disabled Button, Examples, Installation, Side, Usage, With Keyboard Shortcut

### Community 148 - "card.mdx"
Cohesion: 0.33
Nodes (5): Examples, Image, Installation, Size, Usage

### Community 149 - "hover-card.mdx"
Cohesion: 0.33
Nodes (5): Basic, Examples, Installation, Sides, Usage

### Community 150 - "components/lib/schemas/file.ts"
Cohesion: 0.25
Nodes (5): FileFieldInputValue, GetFileFieldSchemaArgsWithoutRequired, GetFileFieldSchemaArgsWithRequired, GetFileFieldSchemaWithoutRequired, GetFileFieldSchemaWithRequired

### Community 151 - "tabs.mdx"
Cohesion: 0.33
Nodes (5): Disabled, Examples, Icons, Installation, Usage

### Community 152 - "animated-text.mdx"
Cohesion: 0.33
Nodes (5): Examples, Highlight, Installation, Link, Usage

### Community 153 - "Domain Docs"
Cohesion: 0.33
Nodes (5): Before exploring, read these, Domain Docs, File structure, Flag ADR conflicts, Use the glossary's vocabulary

### Community 154 - "Issue tracker: Local Markdown"
Cohesion: 0.33
Nodes (5): Conventions, Issue tracker: Local Markdown, Wayfinding operations, When a skill says "fetch the relevant ticket", When a skill says "publish to the issue tracker"

### Community 155 - "date-picker.mdx"
Cohesion: 0.40
Nodes (4): Examples, Installation, Range, Usage

### Community 156 - "link-button.tsx"
Cohesion: 0.25
Nodes (3): defaultLinkFormValue, LinkButton(), linkFormSchema

### Community 157 - "NumberInput"
Cohesion: 0.50
Nodes (3): NumberInput(), NumberInputProps, NumberInputDemo()

### Community 159 - "GLOSSARY.md Format"
Cohesion: 0.50
Nodes (3): GLOSSARY.md Format, Rules, Structure

## Knowledge Gaps
- **43 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Calendar` to `components/phone-number-input.tsx`, `components/color-picker.tsx`, `CardContent`, `InputGroupAddon`, `package.json`, `component-preview.tsx`, `ComboboxItem`, `components/lib/table.ts`, `Spinner`, `components/animated-testimonial.tsx`, `image-button.tsx`, `smart-filter/components/lib/form.ts`, `lucide-react`, `Button`, `Popover`, `SmartFormFieldContainer`, `ContextMenuContent`, `drawer/examples/demo.tsx`, `components/sidebar.tsx`, `DropdownMenu`, `class-variance-authority`, `components/color-picker.tsx`, `$.tsx`, `async-search-multiple-with-infinite-scroll.tsx`, `components/gradient-path-background.tsx`, `components/alert-dialog.tsx`, `lazy-components.ts`, `Separator`, `NumberInput`, `PhoneNumberInput`, `link-button.tsx`, `dialog/examples/demo.tsx`, `components/theme-toggle-button.tsx`, `InputOTP`, `components/command.tsx`, `Slider`, `Alert`, `Progress`, `Kbd`, `FieldGroup`, `Card`, `scroll-area/examples/demo.tsx`, `components/sonner.tsx`, `components/tilt-card.tsx`?**
  _High betweenness centrality (0.086) - this node is a cross-community bridge._
- **Are the 3 inferred relationships involving `Button()` (e.g. with `Inline` and `Button`) actually correct?**
  _`Button()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Should `components/phone-number-input.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.06060606060606061 - nodes in this community are weakly interconnected._
- **Why does `Button()` connect `Button` to `components/phone-number-input.tsx`, `components/color-picker.tsx`, `CardContent`, `InputGroupAddon`, `Spinner`, `ComboboxItem`, `smart-filter/components/lib/form.ts`, `components/lib/table.ts`, `useAppTable`, `image-button.tsx`, `smart-form/examples/demo.tsx`, `lucide-react`, `Popover`, `Examples`, `drawer/examples/demo.tsx`, `DropdownMenu`, `components/sidebar.tsx`, `components/color-picker.tsx`, `$.tsx`, `components/alert-dialog.tsx`, `lazy-components.ts`, `NumberInput`, `FieldError`, `Separator`, `link-button.tsx`, `dialog/examples/demo.tsx`, `components/theme-toggle-button.tsx`, `components/command.tsx`, `Alert`, `hover-card/examples/sides.tsx`, `Kbd`, `Calendar`, `Card`, `Examples`?**
  _High betweenness centrality (0.071) - this node is a cross-community bridge._
- **Are the 16 inferred relationships involving `Field()` (e.g. with `Basic` and `Disabled`) actually correct?**
  _`Field()` has 16 INFERRED edges - model-reasoned connections that need verification._
- **Should `components/color-picker.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14276094276094276 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `lucide-react` to `components/phone-number-input.tsx`, `components/color-picker.tsx`, `CardContent`, `InputGroupAddon`, `package.json`, `ComboboxItem`, `Spinner`, `components/lib/table.ts`, `smart-filter/components/lib/form.ts`, `useAppTable`, `image-button.tsx`, `Button`, `Popover`, `AutocompleteInput`, `ContextMenuContent`, `drawer/examples/demo.tsx`, `components/sidebar.tsx`, `DropdownMenu`, `class-variance-authority`, `components/color-picker.tsx`, `components/alert-dialog.tsx`, `link-button.tsx`, `FieldError`, `dialog/examples/demo.tsx`, `components/theme-toggle-button.tsx`, `InputOTP`, `components/command.tsx`, `Alert`, `components/navigation-menu.tsx`, `Accordion`, `Calendar`, `FieldGroup`, `Card`, `components/autocomplete.tsx`, `components/sonner.tsx`?**
  _High betweenness centrality (0.045) - this node is a cross-community bridge._
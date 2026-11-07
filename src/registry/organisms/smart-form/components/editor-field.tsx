import type { ComponentProps } from 'react'
import { Editor } from '@/components/organisms/editor/editor'
import SmartFormFieldContainer from './field-container'
import type { BaseSmartFormFieldComponentProps } from './lib/base'
import { useFieldContext } from './lib/form'
import type { EditorFieldInputValue } from './lib/schemas/editor'

export type EditorFieldProps = BaseSmartFormFieldComponentProps & {
  editorProps?: Omit<
    ComponentProps<typeof Editor>,
    | 'id'
    | 'name'
    | 'disabled'
    | 'required'
    | 'aria-invalid'
    | 'children'
    | 'render'
    | 'value'
    | 'onValueChange'
    | 'editable'
    | 'content'
    | 'onUpdate'
    | 'onBlur'
  >
}

export default function EditorField({
  label,
  disabled,
  editorProps,
  ...props
}: EditorFieldProps) {
  const field = useFieldContext<EditorFieldInputValue>()
  const invalid = field.state.meta.isTouched && !field.state.meta.isValid

  return (
    <SmartFormFieldContainer
      errors={field.state.meta.errors}
      invalid={invalid}
      label={label}
      name={field.name}
      {...props}
    >
      <Editor
        placeholder={`Enter ${typeof label === 'string' ? label.toLowerCase() : 'information'}`}
        id={`${field.form.formId}-${field.name}`}
        value={field.state.value}
        editable={!disabled}
        onValueChange={(value) => field.handleChange(value?.toString() ?? '')}
        {...editorProps}
      />
    </SmartFormFieldContainer>
  )
}

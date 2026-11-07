import type { ComponentProps } from 'react'
import type { DropzoneOptions } from 'react-dropzone'
import {
  FileUpload,
  FileUploadContent,
  FileUploadInput,
  FileUploadItem,
  type FileUploadProps,
  type FileUploadValue,
} from '@/components/molecules/file-upload/file-upload'
import SmartFormFieldContainer from './field-container'
import type { BaseSmartFormFieldComponentProps } from './lib/base'
import { useFieldContext } from './lib/form'
import type { MultiFileFieldInputValue } from './lib/schemas/multi-file'

const baseDropzoneOptions: DropzoneOptions = {
  maxFiles: 10,
}

export type MultiFileFieldProps = BaseSmartFormFieldComponentProps & {
  fileUploadProps?: Omit<
    FileUploadProps,
    'value' | 'onValueChange' | 'disabled' | 'children'
  >
  inputProps?: Omit<
    ComponentProps<typeof FileUploadInput>,
    'id' | 'aria-invalid' | 'children'
  >
}

export default function MultiFileField({
  label,
  disabled,
  fileUploadProps,
  inputProps,
  ...props
}: MultiFileFieldProps) {
  const field = useFieldContext<MultiFileFieldInputValue>()
  const invalid = field.state.meta.isTouched && !field.state.meta.isValid

  return (
    <SmartFormFieldContainer
      errors={field.state.meta.errors}
      invalid={invalid}
      label={label}
      name={field.name}
      {...props}
    >
      <FileUpload
        disabled={disabled}
        onValueChange={field.handleChange}
        value={field.state.value}
        {...baseDropzoneOptions}
        {...fileUploadProps}
      >
        <FileUploadInput
          aria-invalid={invalid}
          id={`${field.form.formId}-${field.name}`}
          {...inputProps}
        />
        <FileUploadContent>
          {(field.state.value as FileUploadValue).map((value, index) => (
            <FileUploadItem index={index} key={index} value={value} />
          ))}
        </FileUploadContent>
      </FileUpload>
    </SmartFormFieldContainer>
  )
}

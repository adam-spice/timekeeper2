import { FieldError, Label, SelectField } from '@redwoodjs/forms/dist'

const CustomSelect = ({ label, name, children, defaultValue }) => {
  return (
    <div className="col-span-6 sm:col-span-3">
      <Label
        name={name}
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        {label}
      </Label>
      <div className="mt-1 sm:mt-0 sm:col-span-2">
        <SelectField
          defaultValue={defaultValue}
          name={name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        >
          {children}
        </SelectField>
        <FieldError name={name} className="rw-field-error" />
      </div>
    </div>
  )
}

export default CustomSelect

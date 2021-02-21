import { DateField, FieldError, Label } from '@redwoodjs/forms/dist'

const CustomDateField = ({ name, label, defaultValue }) => {
  return (
    <>
      <Label
        name={name}
        className="rw-label"
        errorClassName="rw-label rw-label-error"
      >
        {label}
      </Label>
      <DateField
        name={name}
        defaultValue={defaultValue}
        className="rw-input"
        errorClassName="rw-input rw-input-error"
        validation={{ required: true }}
      />
      <FieldError name={name} className="rw-field-error" />
    </>
  )
}

export default CustomDateField

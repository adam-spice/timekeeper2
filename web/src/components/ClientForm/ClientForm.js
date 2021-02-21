import { Form, FormError, Submit } from '@redwoodjs/forms'
import CustomInputField from '../CustomInputField/CustomInputField'

const ClientForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.clientData?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
        <CustomInputField
          name="name"
          label="name"
          defaultValue={props.clientData?.name}
        />

        <CustomInputField
          name="location"
          label="Location"
          defaultValue={props.clientData?.location}
        />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ClientForm

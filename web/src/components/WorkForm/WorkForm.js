import { Form, FormError, Submit } from '@redwoodjs/forms'
import ClientSelectCell from 'src/components/ClientSelectCell'
import CustomSelect from 'src/components/CustomSelect'
import ProjectSelectCell from 'src/components/ProjectSelectCell'
import { formateDateForHtmlInput } from 'src/utils/date'
import CustomDateField from '../CustomDateField/CustomDateField'
import CustomInputField from '../CustomInputField/CustomInputField'
import CustomNumberField from '../CustomNumberField/CustomNumberField'

const WorkForm = (props) => {
  const workDate = props.work?.date
    ? formateDateForHtmlInput(props.work?.date)
    : null

  const onSubmit = (data) => {
    data.date = new Date(data.date)
    props.onSave(data, props?.work?.id)
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
          name="description"
          label="Description"
          defaultValue={props.work?.description}
        />

        <CustomDateField name="date" label="Date" defaultValue={workDate} />

        <CustomNumberField
          name="hoursWorked"
          label="Hours Worked"
          defaultValue={props.work?.hoursWorked}
        />

        <CustomSelect
          name="clientId"
          label="Client"
          defaultValue={props.work?.clientId}
        >
          <ClientSelectCell />
        </CustomSelect>

        <CustomSelect
          name="projectId"
          label="Project"
          defaultValue={props.work?.projectId}
        >
          <ProjectSelectCell />
        </CustomSelect>

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default WorkForm

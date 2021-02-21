import { Form, FormError, Submit } from '@redwoodjs/forms'
import ClientSelectCell from 'src/components/ClientSelectCell'
import PrioritySelectCell from 'src/components/PrioritySelectCell'
import { formateDateForHtmlInput } from 'src/utils/date'
import CustomDateField from '../CustomDateField/CustomDateField'
import CustomInputField from '../CustomInputField/CustomInputField'
import CustomSelect from '../CustomSelect/CustomSelect'

const ProjectForm = (props) => {
  const defaultDueDate = props.project?.due
    ? formateDateForHtmlInput(props.project?.due)
    : null

  console.log('props.project :>> ', props.project)

  const onSubmit = (data) => {
    data.due = new Date(data.due)
    props.onSave(data, props?.project?.id)
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
          label="Name"
          defaultValue={props.project?.name}
        />

        <CustomSelect
          name="priorityId"
          defaultValue={props.project?.priorityId}
          label="Priority"
        >
          <PrioritySelectCell />
        </CustomSelect>

        <CustomSelect
          name="clientId"
          defaultValue={props.project?.clientId}
          label="Client"
        >
          <ClientSelectCell />
        </CustomSelect>

        <CustomDateField name="due" label="Due" defaultValue={defaultDueDate} />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ProjectForm

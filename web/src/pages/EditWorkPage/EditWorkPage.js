import WorksLayout from 'src/layouts/WorksLayout'
import EditWorkCell from 'src/components/EditWorkCell'

const EditWorkPage = ({ id }) => {
  return (
    <WorksLayout>
      <EditWorkCell id={id} />
    </WorksLayout>
  )
}

export default EditWorkPage

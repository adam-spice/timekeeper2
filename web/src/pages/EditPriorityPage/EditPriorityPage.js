import PrioritiesLayout from 'src/layouts/PrioritiesLayout'
import EditPriorityCell from 'src/components/EditPriorityCell'

const EditPriorityPage = ({ id }) => {
  return (
    <PrioritiesLayout>
      <EditPriorityCell id={id} />
    </PrioritiesLayout>
  )
}

export default EditPriorityPage

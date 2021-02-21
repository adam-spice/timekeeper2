import PrioritiesLayout from 'src/layouts/PrioritiesLayout'
import PriorityCell from 'src/components/PriorityCell'

const PriorityPage = ({ id }) => {
  return (
    <PrioritiesLayout>
      <PriorityCell id={id} />
    </PrioritiesLayout>
  )
}

export default PriorityPage

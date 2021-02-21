import WorksLayout from 'src/layouts/WorksLayout'
import WorkCell from 'src/components/WorkCell'

const WorkPage = ({ id }) => {
  return (
    <WorksLayout>
      <WorkCell id={id} />
    </WorksLayout>
  )
}

export default WorkPage

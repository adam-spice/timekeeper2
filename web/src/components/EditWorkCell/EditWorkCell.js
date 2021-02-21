import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import WorkForm from 'src/components/WorkForm'

export const QUERY = gql`
  query FIND_WORK_BY_ID($id: Int!) {
    work: work(id: $id) {
      id
      description
      date
      hoursWorked
      clientId
      projectId
      createdAt
    }
  }
`
const UPDATE_WORK_MUTATION = gql`
  mutation UpdateWorkMutation($id: Int!, $input: UpdateWorkInput!) {
    updateWork(id: $id, input: $input) {
      id
      description
      date
      hoursWorked
      clientId
      projectId
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ work }) => {
  const { addMessage } = useFlash()
  const [updateWork, { loading, error }] = useMutation(UPDATE_WORK_MUTATION, {
    onCompleted: () => {
      navigate(routes.works())
      addMessage('Work updated.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      clientId: parseInt(input.clientId),
      projectId: parseInt(input.projectId),
    })
    updateWork({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Work {work.id}</h2>
      </header>
      <div className="rw-segment-main">
        <WorkForm work={work} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}

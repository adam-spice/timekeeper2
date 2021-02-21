import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PriorityForm from 'src/components/PriorityForm'

export const QUERY = gql`
  query FIND_PRIORITY_BY_ID($id: Int!) {
    priority: priority(id: $id) {
      id
      name
    }
  }
`
const UPDATE_PRIORITY_MUTATION = gql`
  mutation UpdatePriorityMutation($id: Int!, $input: UpdatePriorityInput!) {
    updatePriority(id: $id, input: $input) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ priority }) => {
  const { addMessage } = useFlash()
  const [updatePriority, { loading, error }] = useMutation(
    UPDATE_PRIORITY_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.priorities())
        addMessage('Priority updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    updatePriority({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Priority {priority.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <PriorityForm
          priority={priority}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}

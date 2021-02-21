import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import PriorityForm from 'src/components/PriorityForm'

import { QUERY } from 'src/components/PrioritiesCell'

const CREATE_PRIORITY_MUTATION = gql`
  mutation CreatePriorityMutation($input: CreatePriorityInput!) {
    createPriority(input: $input) {
      id
    }
  }
`

const NewPriority = () => {
  const { addMessage } = useFlash()
  const [createPriority, { loading, error }] = useMutation(
    CREATE_PRIORITY_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.priorities())
        addMessage('Priority created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    createPriority({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Priority</h2>
      </header>
      <div className="rw-segment-main">
        <PriorityForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPriority

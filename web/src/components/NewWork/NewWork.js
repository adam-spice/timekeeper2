import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import WorkForm from 'src/components/WorkForm'

import { QUERY } from 'src/components/WorksCell'

const CREATE_WORK_MUTATION = gql`
  mutation CreateWorkMutation($input: CreateWorkInput!) {
    createWork(input: $input) {
      id
    }
  }
`

const NewWork = () => {
  const { addMessage } = useFlash()
  const [createWork, { loading, error }] = useMutation(CREATE_WORK_MUTATION, {
    onCompleted: () => {
      navigate(routes.works())
      addMessage('Work created.', { classes: 'rw-flash-success' })
    },
  })

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      clientId: parseInt(input.clientId),
      projectId: parseInt(input.projectId),
    })
    createWork({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Work</h2>
      </header>
      <div className="rw-segment-main">
        <WorkForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewWork

import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/WorksCell'

const DELETE_WORK_MUTATION = gql`
  mutation DeleteWorkMutation($id: Int!) {
    deleteWork(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Work = ({ work }) => {
  const { addMessage } = useFlash()
  const [deleteWork] = useMutation(DELETE_WORK_MUTATION, {
    onCompleted: () => {
      navigate(routes.works())
      addMessage('Work deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete work ' + id + '?')) {
      deleteWork({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Work {work.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{work.id}</td>
            </tr>
            <tr>
              <th>Description</th>
              <td>{work.description}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{timeTag(work.date)}</td>
            </tr>
            <tr>
              <th>Hours worked</th>
              <td>{work.hoursWorked}</td>
            </tr>
            <tr>
              <th>Client id</th>
              <td>{work.clientId}</td>
            </tr>
            <tr>
              <th>Project id</th>
              <td>{work.projectId}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(work.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editWork({ id: work.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(work.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Work

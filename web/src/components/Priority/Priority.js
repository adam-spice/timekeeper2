import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

// import { QUERY } from 'src/components/PrioritiesCell'

const DELETE_PRIORITY_MUTATION = gql`
  mutation DeletePriorityMutation($id: Int!) {
    deletePriority(id: $id) {
      id
    }
  }
`

// const jsonDisplay = (obj) => {
//   return (
//     <pre>
//       <code>{JSON.stringify(obj, null, 2)}</code>
//     </pre>
//   )
// }

// const timeTag = (datetime) => {
//   return (
//     <time dateTime={datetime} title={datetime}>
//       {new Date(datetime).toUTCString()}
//     </time>
//   )
// }

// const checkboxInputTag = (checked) => {
//   return <input type="checkbox" checked={checked} disabled />
// }

const Priority = ({ priority }) => {
  const { addMessage } = useFlash()
  const [deletePriority] = useMutation(DELETE_PRIORITY_MUTATION, {
    onCompleted: () => {
      navigate(routes.priorities())
      addMessage('Priority deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete priority ' + id + '?')) {
      deletePriority({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Priority {priority.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{priority.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{priority.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPriority({ id: priority.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(priority.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default Priority

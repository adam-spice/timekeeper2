import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/PrioritiesCell'

const DELETE_PRIORITY_MUTATION = gql`
  mutation DeletePriorityMutation($id: Int!) {
    deletePriority(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const PrioritiesList = ({ priorities }) => {
  const { addMessage } = useFlash()
  const [deletePriority] = useMutation(DELETE_PRIORITY_MUTATION, {
    onCompleted: () => {
      addMessage('Priority deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete priority ' + id + '?')) {
      deletePriority({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {priorities.map((priority) => (
            <tr key={priority.id}>
              <td>{truncate(priority.id)}</td>
              <td>{truncate(priority.name)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.priority({ id: priority.id })}
                    title={'Show priority ' + priority.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editPriority({ id: priority.id })}
                    title={'Edit priority ' + priority.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete priority ' + priority.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(priority.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PrioritiesList

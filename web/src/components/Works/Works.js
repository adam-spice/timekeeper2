import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/WorksCell'

const DELETE_WORK_MUTATION = gql`
  mutation DeleteWorkMutation($id: Int!) {
    deleteWork(id: $id) {
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

const WorksList = ({ works }) => {
  const { addMessage } = useFlash()
  const [deleteWork] = useMutation(DELETE_WORK_MUTATION, {
    onCompleted: () => {
      addMessage('Work deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete work ' + id + '?')) {
      deleteWork({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Date</th>
            <th>Hours worked</th>
            <th>Client</th>
            <th>Project</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {works.map((work) => (
            <tr key={work.id}>
              <td>{truncate(work.id)}</td>
              <td>{truncate(work.description)}</td>
              <td>{timeTag(work.date)}</td>
              <td>{truncate(work.hoursWorked)}</td>
              <td>{truncate(work.client.name)}</td>
              <td>{truncate(work.project.name)}</td>
              <td>{timeTag(work.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.work({ id: work.id })}
                    title={'Show work ' + work.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editWork({ id: work.id })}
                    title={'Edit work ' + work.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete work ' + work.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(work.id)}
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

export default WorksList

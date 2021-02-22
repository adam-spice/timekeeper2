import { Link, routes } from '@redwoodjs/router'

import Works from 'src/components/Works'

export const QUERY = gql`
  query WORKS {
    works {
      id
      description
      date
      hoursWorked
      client {
        id
        name
      }
      project {
        id
        name
      }
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No works yet. '}
      <Link to={routes.newWork()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ works }) => {
  return <Works works={works} />
}

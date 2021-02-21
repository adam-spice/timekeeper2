import { Link, routes } from '@redwoodjs/router'

import Priorities from 'src/components/Priorities'

export const QUERY = gql`
  query PRIORITIES {
    priorities {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No priorities yet. '}
      <Link to={routes.newPriority()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ priorities }) => {
  return <Priorities priorities={priorities} />
}

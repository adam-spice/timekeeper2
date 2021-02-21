import Priority from 'src/components/Priority'

export const QUERY = gql`
  query FIND_PRIORITY_BY_ID($id: Int!) {
    priority: priority(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Priority not found</div>

export const Success = ({ priority }) => {
  return <Priority priority={priority} />
}

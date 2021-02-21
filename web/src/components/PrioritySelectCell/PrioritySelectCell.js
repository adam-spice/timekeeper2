export const QUERY = gql`
  query PrioritySelectQuery {
    priorities {
      id
      name
    }
  }
`

export const Loading = () => <option>Loading...</option>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ priorities }) => {
  return priorities.map((priority) => (
    <option key={priority.id} value={priority.id}>
      {priority.name}
    </option>
  ))
}

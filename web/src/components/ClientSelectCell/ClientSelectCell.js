export const QUERY = gql`
  query ClientSelectQuery {
    clients {
      id
      name
    }
  }
`

export const Loading = () => <option>Loading...</option>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ clients }) => {
  return clients.map((client) => (
    <option key={client.id} value={client.id}>
      {client.name}
    </option>
  ))
}

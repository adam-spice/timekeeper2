import Client from 'src/components/Client'

export const QUERY = gql`
  query FIND_CLIENT_BY_ID($id: Int!) {
    clientData: client(id: $id) {
      id
      name
      location
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Client not found</div>

export const Success = ({ clientData }) => {
  return <Client clientData={clientData} />
}

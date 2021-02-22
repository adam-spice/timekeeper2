import Work from 'src/components/Work'

export const QUERY = gql`
  query FIND_WORK_BY_ID($id: Int!) {
    work: work(id: $id) {
      id
      description
      date
      hoursWorked
      client {
        id
        name
      }
      project{
        id
        name
      }
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Work not found</div>

export const Success = ({ work }) => {
  return <Work work={work} />
}

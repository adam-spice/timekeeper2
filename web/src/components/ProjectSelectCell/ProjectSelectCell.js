export const QUERY = gql`
  query ProjectSelectQuery {
    projects {
      id
      name
    }
  }
`

export const Loading = () => <option>Loading...</option>

export const Empty = () => <option>Empty</option>

export const Failure = ({ error }) => <option>Error: {error.message}</option>

export const Success = ({ projects }) => {
  return projects.map((project) => (
    <option key={project.id} value={project.id}>
      {project.name}
    </option>
  ))
}

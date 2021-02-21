export const schema = gql`
  type Project {
    id: Int!
    name: String!
    priority: Priority!
    priorityId: Int!
    client: Client!
    clientId: Int!
    due: DateTime!
    createdAt: DateTime!
    Work: [Work]!
  }

  type Query {
    projects: [Project!]!
    project(id: Int!): Project
  }

  input CreateProjectInput {
    name: String!
    priorityId: Int!
    clientId: Int!
    due: DateTime!
  }

  input UpdateProjectInput {
    name: String
    priorityId: Int
    clientId: Int
    due: DateTime
  }

  type Mutation {
    createProject(input: CreateProjectInput!): Project!
    updateProject(id: Int!, input: UpdateProjectInput!): Project!
    deleteProject(id: Int!): Project!
  }
`

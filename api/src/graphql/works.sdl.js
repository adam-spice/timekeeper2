export const schema = gql`
  type Work {
    id: Int!
    description: String!
    date: DateTime!
    hoursWorked: Int!
    client: Client!
    clientId: Int!
    project: Project!
    projectId: Int!
    createdAt: DateTime!
  }

  type Query {
    works: [Work!]!
    work(id: Int!): Work
  }

  input CreateWorkInput {
    description: String!
    date: DateTime!
    hoursWorked: Int!
    clientId: Int!
    projectId: Int!
  }

  input UpdateWorkInput {
    description: String
    date: DateTime
    hoursWorked: Int
    clientId: Int
    projectId: Int
  }

  type Mutation {
    createWork(input: CreateWorkInput!): Work!
    updateWork(id: Int!, input: UpdateWorkInput!): Work!
    deleteWork(id: Int!): Work!
  }
`

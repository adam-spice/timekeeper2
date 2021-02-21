export const schema = gql`
  type Client {
    id: Int!
    name: String!
    location: String!
    projects: [Project]!
    createdAt: DateTime!
  }

  type Query {
    clients: [Client!]!
    client(id: Int!): Client
  }

  input CreateClientInput {
    name: String!
    location: String!
  }

  input UpdateClientInput {
    name: String
    location: String
  }

  type Mutation {
    createClient(input: CreateClientInput!): Client!
    updateClient(id: Int!, input: UpdateClientInput!): Client!
    deleteClient(id: Int!): Client!
  }
`

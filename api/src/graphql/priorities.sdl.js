export const schema = gql`
  type Priority {
    id: Int!
    name: String!
    projects: [Project]!
  }

  type Query {
    priorities: [Priority!]!
    priority(id: Int!): Priority
  }

  input CreatePriorityInput {
    name: String!
  }

  input UpdatePriorityInput {
    name: String
  }

  type Mutation {
    createPriority(input: CreatePriorityInput!): Priority!
    updatePriority(id: Int!, input: UpdatePriorityInput!): Priority!
    deletePriority(id: Int!): Priority!
  }
`

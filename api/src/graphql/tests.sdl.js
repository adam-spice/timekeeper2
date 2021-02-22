export const schema = gql`
  type Test {
    id: Int!
    description: String!
  }

  type Query {
    tests: [Test!]!
    test(id: Int!): Test
  }

  input CreateTestInput {
    description: String!
  }

  input UpdateTestInput {
    description: String
  }

  type Mutation {
    createTest(input: CreateTestInput!): Test!
    updateTest(id: Int!, input: UpdateTestInput!): Test!
    deleteTest(id: Int!): Test!
  }
`

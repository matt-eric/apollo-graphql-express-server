import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    users: [User!]
    user(id: ID!): User
    me: User

    effects: [Effect!]!
    effect(id: ID!): Effect!
  }

  type Mutation {
    createEffect(type: String!): Effect!
    deleteEffect(id: ID!): Boolean!
  }

  type User {
    id: ID!
    username: String!
    effects: [Effect!]
  }

  type Effect {
    id: ID!
    type: String!
    user: User!
  }
`;

import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    effects: [Effect!]!
    effect(id: ID!): Effect!
  }

  extend type Mutation {
    createEffect(type: String!): Effect!
    deleteEffect(id: ID!): Boolean!
  }

  type Effect {
    id: ID!
    type: String!
    displayName: String!
    bypass: Boolean!
    settings: [ParameterSpecifications]
    user: User!
  }

  type ParameterSpecifications {
    type: String!
    displayName: String!
    value: Int!
    max: Int!
    min: Int!
    step: Int!
  }
`;

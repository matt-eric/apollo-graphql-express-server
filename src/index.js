import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

import models from './models';
import resolvers from './resolvers';


const app = express();

app.use(cors());

const schema = gql`
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

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    models,
    me: models.users[1],
  },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});

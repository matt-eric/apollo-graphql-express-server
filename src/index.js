import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

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

  type User {
    id: ID!
    username: String!
  }

  type Effect {
    id: ID!
    type: String!
  }
`;

let users = {
  1: {
    id: '1',
    username: 'Matt',
  },
  2: {
    id: '2',
    username: 'Eric',
  },
};

const me = users[1];

let effects = {
  1: {
    id: '1',
    type: 'Waveform',
  },
  2: {
    id: '2',
    type: 'Grid Cells',
  },
};

const resolvers = {
  Query: {
    users: () => {
      return Object.values(users);
    },
    user: (parent, { id }) => {
      return users[id];
    },
    me: (parent, args, { me }) => {
      return me;
    },
    effects: () => {
      return Object.values(effects);
    },
    effect: (parent, { id }) => {
      return effects[id];
    },

  },
};

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: {
    me: users[1],
  },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});

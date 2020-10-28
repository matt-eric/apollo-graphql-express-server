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
    effects: [Effect!]
  }

  type Effect {
    id: ID!
    type: String!
    user: User!
  }
`;

let users = {
  1: {
    id: '1',
    username: 'Matt',
    effectIds: [1],
  },
  2: {
    id: '2',
    username: 'Eric',
    effectIds: [2],
  },
};

const me = users[1];

let effects = {
  1: {
    id: '1',
    type: 'Waveform',
    userId: '1',
  },
  2: {
    id: '2',
    type: 'Grid Cells',
    userId: '2',
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
  User: {
    effects: user => {
      return Object.values(effects).filter(
        effect => effect.userId === user.id,
      );
    },
  },
  Effect: {
    user: effect => {
      return users[effect.userId];
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

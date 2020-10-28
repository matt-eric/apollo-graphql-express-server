import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { v4 as uuidv4 } from 'uuid';

import models from './models';


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
  Mutation: {
    createEffect: (parent, { type }, { me }) => {
      const id = uuidv4();
      const effect = {
        id,
        type,
        userId: me.id,
      };

      effects[id] = effect;
      users[me.id].effectIds.push(id);

      return effect;
    },
    deleteEffect: (parent, { id }) => {
      const { [id]: effect, ...otherEffects } = effects;

      if (!effect) {
        return false;
      }

      effects = otherEffects;

      return true;
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
    models,
    me: models.users[1],
  },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});

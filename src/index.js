import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import models, { connectDb } from './graphQL/models';
import resolvers from './graphQL/resolvers';
import schema from './graphQL/schema'

import effects from './seedData/effects'
import users from './seedData/users'

const app = express();

app.use(cors());

app.use(morgan('dev'));

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async () => ({
    models,
    me: await models.user.findByLogin('Matt Eric'),
  }),
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const port = process.env.PORT;

connectDb().then(async () => {

  await Promise.all([
    models.user.deleteMany({}),
    models.effect.deleteMany({}),
  ]);

  createUsersWithEffects();

  httpServer.listen({ port }, () => {
    console.log(`Apollo Server on http://localhost:${port}/graphql`);
  });
});

const createUsersWithEffects = async () => {

  effects.noise['userId'] = users.user1.id
  effects.waveform['userId'] = users.user2.id
  effects.gridcells['userId'] = users.user2.id

  await effects.noise.save();
  await effects.waveform.save();
  await effects.gridcells.save();

  await users.user1.save();
  await users.user2.save();

};

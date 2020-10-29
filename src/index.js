import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import models, { connectDb } from './graphQL/models';
import resolvers from './graphQL/resolvers';
import schema from './graphQL/schema'

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
  const user1 = new models.user(
    {
      username: 'Matt Eric',
    },
  );

  const user2 = new models.user(
    {
      username: 'Matthew Eric',
    },
  );

  const effect1 = new models.effect({
    type: 'Waveform',
    userId: user1.id,
  });

  const effect2 = new models.effect({
    type: 'Waveform',
    userId: user2.id,
  });

  const effect3 = new models.effect({
    type: 'Grid Cells',
    userId: user2.id,
  });

  await effect1.save();
  await effect2.save();
  await effect3.save();

  await user1.save();
  await user2.save();

};

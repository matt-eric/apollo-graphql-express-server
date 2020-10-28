import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import models, { connectDb } from './models';
import resolvers from './resolvers';
import schema from './schema'

const app = express();

app.use(cors());

app.use(morgan('dev'));

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: async () => ({
    models,
    me: await models.User.findByLogin('Matt Eric'),
  }),
});

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

const isTest = !!process.env.TEST_DATABASE_URL;
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT || 8000;

connectDb().then(async () => {
  if (isTest || isProduction) {
    // reset database
    await Promise.all([
      models.User.deleteMany({}),
      models.Message.deleteMany({}),
    ]);

    createUsersWithEffects();
  }

  httpServer.listen({ port }, () => {
    console.log(`Apollo Server on http://localhost:${port}/graphql`);
  });
});

const createUsersWithEffects = async date => {
  const user1 = new models.User(
    {
      username: 'Matt Eric',
    },
  );

  const user2 = new models.User(
    {
      username: 'Matthew Eric',
    },
  );

  const effect1 = new models.Effect({
    type: 'Waveform',
    userId: user1.id,
  });

  const effect2 = new models.Effect({
    type: 'Waveform',
    userId: user2.id,
  });

  const effect3 = new models.Effect({
    type: 'Grid Cells',
    userId: user2.id,
  });

  await effect1.save();
  await effect2.save();
  await effect3.save();

  await user1.save();
  await user2.save();

};

import 'dotenv/config';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';

import models, { sequelize } from './models';
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

const eraseDatabaseOnSync = true;

sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
  if (eraseDatabaseOnSync) {
    createUsersWithMessages();
  }

  app.listen({ port: 8000 }, () => {
    console.log('Apollo Server on http://localhost:8000/graphql');
  });
});

const createUsersWithEffects = async () => {
  await models.User.create(
    {
      username: 'Matt Eric',
      effects: [
        {
          type: 'Waveform',
        },
      ],
    },
    {
      include: [models.Effect],
    },
  );

  await models.User.create(
    {
      username: 'Matthew Eric',
      effects: [
        {
          type: 'Waveform',
        },
        {
          type: 'Grid Cells',
        },
      ],
    },
    {
      include: [models.Effect],
    },
  );
};

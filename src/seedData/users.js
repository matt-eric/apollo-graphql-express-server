import models from '../graphQL/models';

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

const users = { user1, user2 }

export default users

export default {
  Query: {
    users: (parent, args, { models }) => {
      return Object.values(models.users);
    },
    user: (parent, { id }, { models }) => {
      return models.users[id];
    },
    me: (parent, args, { me }) => {
      return me;
    },
  },
  User: {
    effects: (user, args, { models }) => {
      return Object.values(models.effects).filter(
        effect => effect.userId === user.id,
      );
    },
  },
};
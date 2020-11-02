export default {
  Query: {
    users: async (parent, args, { models }) => {
      return await models.user.find();
    },
    user: async (parent, { id }, { models }) => {
      return await models.user.findById(id);
    },
    me: async (parent, args, { models, me }) => {
      return await models.user.findById(me.id);
    },
  },
  User: {
    effects: user => {
      return Object.values(effects).filter(
        effect => effect.userId === user.id,
      );
    },
  },
};

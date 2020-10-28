export default {
  Query: {
    users: async (parent, args, { models }) => {
      return await models.User.findAll();
    },
    user: async (parent, { id }, { models }) => {
      return await models.User.findByPk(id);
    },
    me: async (parent, args, { models, me }) => {
      return await models.User.findByPk(me.id);
    },
  },
  User: {
    effects: async (user, args, { models }) => {
      return await models.Effect.findAll({
        where: {
          userId: user.id,
        },
      });
    },
  },
};

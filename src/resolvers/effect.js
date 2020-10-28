import { v4 as uuidv4 } from 'uuid';

export default {
  Query: {
    effects: async (parent, args, { models }) => {
      return await models.Effect.findAll();
    },
    effect: async (parent, { id }, { models }) => {
      return await models.Effect.findByPk(id);
    },
  },
  Mutation: {
    createEffect: async (parent, { text }, { me, models }) => {
      return await models.Effect.create({
        type,
        userId: me.id,
      });
    },
    deleteEffect: (parent, { id }, { models }) => {
      const { [id]: effect, ...otherEffects } = models.effects;
    },
  },
  Effect: {
    user: async (effect, args, { models }) => {
      return await models.User.findByPk(effect.userId);
    },
  },
};

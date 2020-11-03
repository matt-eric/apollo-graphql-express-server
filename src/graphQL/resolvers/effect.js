import { v4 as uuidv4 } from 'uuid';

export default {
  Query: {
    effects: async (parent, args, { models }) => {
      return await models.effect.find();
    },
    effect: async (parent, { id }, { models }) => {
      return await models.effect.findById(id);
    },
  },
  Mutation: {
    createEffect: async (parent, { text }, { me, models }) => {
      return await models.effect.create({
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
      return await models.User.findById(effect.userId);
    },
  },
};

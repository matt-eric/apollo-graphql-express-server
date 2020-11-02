import { v4 as uuidv4 } from 'uuid';

export default {
  Query: {
    effects: async (parent, args, { models }) => {
      return await models.effect.findAll();
    },
    effect: async (parent, { id }, { models }) => {
      return await models.effect.findByPk(id);
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
      return await models.user.findByPk(effect.userId);
    },
  },
};

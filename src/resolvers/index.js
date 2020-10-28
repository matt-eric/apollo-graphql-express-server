import { v4 as uuidv4 } from 'uuid';

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
    effects: (parent, args, { models }) => {
      return Object.values(models.effects);
    },
    effect: (parent, { id }, { models }) => {
      return models.effects[id];
    },
  },
  Mutation: {
    createEffect: (parent, { text }, { me, models }) => {
      const id = uuidv4();
      const effect = {
        id,
        type,
        userId: me.id,
      };

      models.effects[id] = effect;
      models.users[me.id].effectIds.push(id);

      return effect;
    },
    deleteEffect: (parent, { id }, { models }) => {
      const { [id]: effect, ...otherEffects } = models.effects;

      if (!effect) {
        return false;
      }

      models.effects = otherEffects;

      return true;
    },
  },
  User: {
    effects: user => {
      return Object.values(effects).filter(
        effect => effect.userId === user.id,
      );
    },
  },
  Effect: {
    user: effect => {
      return users[effect.userId];
    },
  },
};

import { v4 as uuidv4 } from 'uuid';

export default {
  Query: {
    users: () => {
      return Object.values(users);
    },
    user: (parent, { id }) => {
      return users[id];
    },
    me: (parent, args, { me }) => {
      return me;
    },
    effects: () => {
      return Object.values(effects);
    },
    effect: (parent, { id }) => {
      return effects[id];
    },
  },
  Mutation: {
    createEffect: (parent, { type }, { me }) => {
      const id = uuidv4();
      const effect = {
        id,
        type,
        userId: me.id,
      };

      effects[id] = effect;
      users[me.id].effectIds.push(id);

      return effect;
    },
    deleteEffect: (parent, { id }) => {
      const { [id]: effect, ...otherEffects } = effects;

      if (!effect) {
        return false;
      }

      effects = otherEffects;

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

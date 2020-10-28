const effect = (sequelize, DataTypes) => {
  const Effect = sequelize.define('effect', {
    type: {
      type: DataTypes.STRING,
    },
  });

  Effect.associate = models => {
    Effect.belongsTo(models.Effect);
  };

  return Effect;
};

export default effect;

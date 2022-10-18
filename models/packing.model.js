module.exports = (sequelize, Sequelize) => {
  const Packing = sequelize.define("packing", {
    transport: {
      type: Sequelize.STRING,
    },
    arrived: {
      type: Sequelize.STRING
    },
  });

  return Packing;
};

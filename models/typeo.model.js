module.exports = (sequelize, Sequelize) => {
  const Typeo = sequelize.define("typeo", {
    name: {
      type: Sequelize.STRING,
    },
  });

  return Typeo;
};

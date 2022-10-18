module.exports = (sequelize, Sequelize) => {
  const Factory = sequelize.define("factories", {
    name: {
      type: Sequelize.STRING,
    },
    pit: {
      type: Sequelize.INTEGER,
    },
    row: {
      type: Sequelize.INTEGER,
    },
    leg: {
      type: Sequelize.INTEGER,
    },
    typo: {
      type: Sequelize.INTEGER,
    },
    timeplant: {
      type: Sequelize.STRING
    },
    finishplant: {
      type: Sequelize.STRING
    },
    intendant: {
      type: Sequelize.INTEGER
    }
  });

  return Factory;
};

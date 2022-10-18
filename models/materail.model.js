module.exports = (sequelize, Sequelize) => {
  const Materail = sequelize.define("materails", {
    name: {
      type: Sequelize.STRING,
    },
    type: {
      type: Sequelize.INTEGER
    },
    date: {
      type: Sequelize.STRING
    },
    hr_id: {
      type:Sequelize.INTEGER
    }
  });

  return Materail;
};

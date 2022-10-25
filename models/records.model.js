module.exports = (sequelize, Sequelize) => {
  const Records = sequelize.define("records", {
    qty: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    tel: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    company: {
      type: Sequelize.STRING,
    },
    tax: {
      type: Sequelize.STRING,
    },
    date: {
      type: Sequelize.STRING,
    },
    room_name: {
      type: Sequelize.STRING,
    },
    cutain: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    width: {
      type: Sequelize.INTEGER,
    },
    height: {
      type: Sequelize.INTEGER,
    },
    pattern: {
      type: Sequelize.INTEGER,
    },
    font_curtain: {
      type: Sequelize.INTEGER,
    },
    rail_price: {
      type: Sequelize.INTEGER,
    },
    ocpacity_cutain_price: {
      type: Sequelize.INTEGER,
    },
    dark: {
      type: Sequelize.INTEGER,
    },
  });

  return Records;
};

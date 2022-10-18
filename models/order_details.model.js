module.exports = (sequelize, Sequelize) => {
  const Order_details = sequelize.define("order_details", {
    date: {
      type: Sequelize.STRING,
    },
    amount: {
      type: Sequelize.INTEGER,
    },
    order_id: {
      type: Sequelize.INTEGER,
    },
    product_id: {
      type: Sequelize.INTEGER,
    },
  });

  return Order_details;
};

module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("orders", {
    customers_id : {
      type: Sequelize.INTEGER
    },
    order_ditials_id: {
      type:Sequelize.INTEGER
    },
  });

  return Order;
};

module.exports = (sequelize, Sequelize) => {
  const Order_ditials = sequelize.define("order_detials", {
    date: {
      type: Sequelize.STRING,
    },
    amount: {
      type: Sequelize.INTEGER
    },
    order_id: {
      type: Sequelize.INTEGER
    },
    product_id:{
       type: Sequelize.INTEGER
    }
  });

  return Order_ditials;
};

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  "postgresql://pak_local:aa010203@localhost:5432/pak_local?sslmode=disable"
);

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle,
//   },
// });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.customers = require("./customers.model")(sequelize, Sequelize);
db.hrs = require("./hrs.model")(sequelize, Sequelize);
db.factories = require("./factories.model")(sequelize, Sequelize);
db.products = require("./products.model")(sequelize, Sequelize);
db.order_detials = require("./order_detials.model")(sequelize, Sequelize);
db.orders = require("./order.model")(sequelize, Sequelize);
db.shippings = require("./shippings.model")(sequelize, Sequelize);
db.vondors = require("./vondor.model")(sequelize, Sequelize);
db.packing = require("./packing.model")(sequelize, Sequelize);
db.materails = require("./materail.model")(sequelize, Sequelize);
db.assets = require("./assets.model")(sequelize, Sequelize);
db.typeo = require("./typeo.model")(sequelize, Sequelize);


module.exports = db;

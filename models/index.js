const Sequelize = require("sequelize");
// const sequelize = new Sequelize(
//   "postgresql://pak_local:aa010203@localhost:5432/pak_local?sslmode=disable"
// );

const sequelize = new Sequelize(
  "pak_local", // นี่เป็นชื่อ DB ของเราน
  "postgres", // user ที่ใช้สรการเข้าไปยัง db
  "12345678", // password
  {
    host: "localhost", // host ของ db ที่เราสร้างเอาไว้
    dialect: "postgres", // 'mysql' | 'mariadb' | 'postgres' | 'mssql'   พวกนี้ใช่ก็ใช้ได้นะจ๊ะ
    define: {
      timestamps: false, //ส่วนตรงนี้ก็เป็นการตั้งค่าเพิ่มเติม
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

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

// ส่วนนี้เป็นการตั้งต่า relation โดยเป็นการบอกว่าใน 1 team มีได้หลาย player ง่ายๆ ก็คือ relation แบบ 1:M
//   db.team.hasMany(
//     db.player,
//     {
//         foreignKey: { name: 'tid', field: 'tid' }, //name ตรงสำคัญพยายามตั่งให้เป็นชื่อเดียวกับ FK ใน table ที่นำไปใช้นะครับ
//     }
//   };

// ส่วนนี้เป็นการตั้ง relation แบบกลับกันกับด้านบน จริงแล้วเราไม่ตั้งก็ได้แต่แนะนำให้ตั้งเอาไว้ เพราะเวลาที่เราไม่ได้ใส่
// line นี้จะทำให้เราสามารถใช้  team ในการหา player ได้อย่างเดียวและไม่สามารถใช้ player หา team ได้
//   db.player.belongsTo(db.team, { foreignKey: 'tid' });

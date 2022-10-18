require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("./logger");

const db = require("./models");

const customers = require("./controllers/customers.controller");
const hrs = require("./controllers/hrs.controller");
const factories = require("./controllers/factories.controller");
const products = require("./controllers/products.controller");
const order_details = require("./controllers/order_details.controller");
const orders = require("./controllers/orders.controller");
const shippings = require("./controllers/shippings.controller");
const vendors = require("./controllers/vendors.controller");
const packings = require("./controllers/packings.controller");
const materials = require("./controllers/materials.controller");
const assets = require("./controllers/assets.controller");
const roles = require("./controllers/roles.controller");
const types = require("./controllers/types.controller");

const app = express();
const PORT = process.env.PORT || 4000;
const pathApi = "/api";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(logger.requestLogger);

db.sequelize
  .sync() //{ force: true } reset database on save
  .then(() => {
    console.log("Synced db.");
    console.log("Ready for Rock !! 👾 🤖");
    console.log(`Pak Server started... port ${PORT}`);
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// testing api
app.get(pathApi + "/", (req, res) => {
  res.json("Hello World form server pak");
});

// role api
{
  app.post(pathApi + "/roles" + "/create", roles.create);
  app.get(pathApi + "/roles" + "/", roles.findAll);
  app.get(pathApi + "/roles" + "/:id", roles.findOne);
  app.put(pathApi + "/roles" + "/edit/:id", roles.update);
  app.delete(pathApi + "/roles" + "/delete/:id", roles.delete);
}
// customer api
{
  app.post(pathApi + "/customers" + "/create", customers.create);
  app.get(pathApi + "/customers" + "/", customers.findAll);
  app.get(pathApi + "/customers" + "/:id", customers.findOne);
  app.put(pathApi + "/customers" + "/edit/:id", customers.update);
  app.delete(pathApi + "/customers" + "/delete/:id", customers.delete);
}

// hrs api
{
  app.post(pathApi + "/hrs" + "/create", hrs.create);
  app.get(pathApi + "/hrs" + "/", hrs.findAll);
  app.get(pathApi + "/hrs" + "/:id", hrs.findOne);
  app.put(pathApi + "/hrs" + "/edit/:id", hrs.update);
  app.delete(pathApi + "/hrs" + "/delete/:id", hrs.delete);
}
// fatories api
{
  app.post(pathApi + "/factories" + "/create", factories.create);
  app.get(pathApi + "/factories" + "/", factories.findAll);
  app.get(pathApi + "/factories" + "/:id", factories.findOne);
  app.put(pathApi + "/factories" + "/edit/:id", factories.update);
  app.delete(pathApi + "/factories" + "/delete/:id", factories.delete);
}
// products api
{
  app.post(pathApi + "/products" + "/create", products.create);
  app.get(pathApi + "/products" + "/", products.findAll);
  app.get(pathApi + "/products" + "/:id", products.findOne);
  app.put(pathApi + "/products" + "/edit/:id", products.update);
  app.delete(pathApi + "/products" + "/delete/:id", products.delete);
}
// Order_detials api
{
  app.post(pathApi + "/order_detials" + "/create", order_details.create);
  app.get(pathApi + "/order_detials" + "/", order_details.findAll);
  app.get(pathApi + "/order_detials" + "/:id", order_details.findOne);
  app.put(pathApi + "/order_detials" + "/edit/:id", order_details.update);
  app.delete(pathApi + "/order_detials" + "/delete/:id", order_details.delete);
}
// Order
{
  app.post(pathApi + "/order" + "/create", orders.create);
  app.get(pathApi + "/order" + "/", orders.findAll);
  app.get(pathApi + "/order" + "/:id", orders.findOne);
  app.put(pathApi + "/order" + "/edit/:id", orders.update);
  app.delete(pathApi + "/order" + "/delete/:id", orders.delete);
}
// shipping api
{
  app.post(pathApi + "/shipping" + "/create", shippings.create);
  app.get(pathApi + "/shipping" + "/", shippings.findAll);
  app.get(pathApi + "/shipping" + "/:id", shippings.findOne);
  app.put(pathApi + "/shipping" + "/edit/:id", shippings.update);
  app.delete(pathApi + "/shipping" + "/delete/:id", shippings.delete);
}
// vondor api
{
  app.post(pathApi + "/vondor" + "/create", vendors.create);
  app.get(pathApi + "/vondor" + "/", vendors.findAll);
  app.get(pathApi + "/vondor" + "/:id", vendors.findOne);
  app.put(pathApi + "/vondor" + "/edit/:id", vendors.update);
  app.delete(pathApi + "/vondor" + "/delete/:id", vendors.delete);
}
// packing api
{
  app.post(pathApi + "/packing" + "/create", packings.create);
  app.get(pathApi + "/packing" + "/", packings.findAll);
  app.get(pathApi + "/packing" + "/:id", packings.findOne);
  app.put(pathApi + "/packing" + "/edit/:id", packings.update);
  app.delete(pathApi + "/packing" + "/delete/:id", packings.delete);
}
// materail api
{
  app.post(pathApi + "/materail" + "/create", materials.create);
  app.get(pathApi + "/materail" + "/", materials.findAll);
  app.get(pathApi + "/materail" + "/:id", materials.findOne);
  app.put(pathApi + "/materail" + "/edit/:id", materials.update);
  app.delete(pathApi + "/materail" + "/delete/:id", materials.delete);
}
// asset api
{
  app.post(pathApi + "/asset" + "/create", assets.create);
  app.get(pathApi + "/asset" + "/", assets.findAll);
  app.get(pathApi + "/asset" + "/:id", assets.findOne);
  app.put(pathApi + "/asset" + "/edit/:id", assets.update);
  app.delete(pathApi + "/asset" + "/delete/:id", assets.delete);
}
// type api
{
  app.post(pathApi + "/type" + "/create", types.create);
  app.get(pathApi + "/type" + "/", types.findAll);
  app.get(pathApi + "/type" + "/:id", types.findOne);
  app.put(pathApi + "/type" + "/edit/:id", types.update);
  app.delete(pathApi + "/type" + "/delete/:id", types.delete);
}

// Run the server
app.listen(PORT, () => {
  console.log(`Pak Server started... port ${PORT}`);
});

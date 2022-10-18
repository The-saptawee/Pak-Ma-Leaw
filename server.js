const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("./logger");
const db = require("./models");
const tutorials = require("./controllers/tutorial.controller");
const customers = require("./controllers/customers.controller");
const hrs = require("./controllers/hrs.controller");
const factories = require("./controllers/factories.controller");
const products = require("./controllers/products.controller");
const order_detials = require("./controllers/order_detials.controller");
const order = require("./controllers/order.controller");
const shipping = require("./controllers/shippings.controller");
const vondor = require("./controllers/vondors.controller");
const packing = require("./controllers/packing.controller");
const materail = require("./controllers/materail.controller");
const asset = require("./controllers/assets.controller");
const roles = require("./controllers/role.controller");
const typeo = require("./controllers/typeo.controller");



const app = express();
///tutorials
const PORT = process.env.PORT || 3000;
const pathApi = "/api";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(logger.requestLogger);

db.sequelize
  .sync() //{ force: true } reset database on save
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get(pathApi + "/", (req, res) => {
  res.json("Hello World form server pak");
});

//toturials api
// {
//   app.post(pathApi + "/tutorial" + "/create", tutorials.create);
//   app.get(pathApi + "/tutorial" + "/", tutorials.findAll);
//   app.get(pathApi + "/tutorial" + "/:id", tutorials.findOne);
//   app.put(pathApi + "/tutorial" + "/:id", tutorials.update);
//   app.delete(pathApi + "/tutorial" + "/:id", tutorials.delete);
// }
// role api
{
  app.post(pathApi+"/roles"+"/create",roles.create);
  app.get(pathApi+"/roles"+"/",roles.findAll);
  app.get(pathApi+"/roles"+"/:id",roles.findOne);
  app.put(pathApi+"/roles"+"/:id",roles.update);
  app.delete(pathApi + "/roles" + "/delete" + "/:id", roles.delete);
}
// customer api
{
  app.post(pathApi+"/customers"+"/create",customers.create);
  app.get(pathApi+"/customers"+"/",customers.findAll);
  app.get(pathApi+"/customers"+"/:id",customers.findOne);
  app.put(pathApi+"/customers"+"/:id",customers.update);
  app.delete(pathApi + "/customers" + "/delete" + "/:id", customers.delete);
}

// hrs api
{
  app.post(pathApi+"/hrs"+"/create",hrs.create);
  app.get(pathApi+"/hrs"+"/",hrs.findAll);
  app.get(pathApi+"/hrs"+"/:id",hrs.findOne);
  app.put(pathApi+"/hrs"+"/:id",hrs.update);
  app.delete(pathApi + "/hrs" + "/delete" + "/:id", hrs.delete);
}
// fatories api
{
  app.post(pathApi+"/factories"+"/create",factories.create);
  app.get(pathApi+"/factories"+"/",factories.findAll);
  app.get(pathApi+"/factories"+"/:id",factories.findOne);
  app.put(pathApi+"/factories"+"/:id",factories.update);
  app.delete(pathApi + "/factories" + "/delete" + "/:id", factories.delete);
}
// products api
{ 
  app.post(pathApi+"/products"+"/create",products.create);
  app.get(pathApi+"/products"+"/",products.findAll);
  app.get(pathApi+"/products"+"/:id",products.findOne);
  app.put(pathApi+"/products"+"/:id",products.update);
  app.delete(pathApi + "/products" + "/delete" + "/:id", products.delete);  
}
// Order_detials api
{
  app.post(pathApi+"/order_detials"+"/create",order_detials.create);
  app.get(pathApi+"/order_detials"+"/",order_detials.findAll);
  app.get(pathApi+"/order_detials"+"/:id",order_detials.findOne);
  app.put(pathApi+"/order_detials"+"/:id",order_detials.update);
  app.delete(pathApi + "/order_detials" + "/delete" + "/:id", order_detials.delete);  
}
// Order
{
  app.post(pathApi+"/order"+"/create",order.create);
  app.get(pathApi+"/order"+"/",order.findAll);
  app.get(pathApi+"/order"+"/:id",order.findOne);
  app.put(pathApi+"/order"+"/:id",order.update);
  app.delete(pathApi + "/order" + "/delete" + "/:id", order.delete);
}
// shipping api
{
  app.post(pathApi+"/shipping"+"/create",shipping.create);
  app.get(pathApi+"/shipping"+"/",shipping.findAll);
  app.get(pathApi+"/shipping"+"/:id",shipping.findOne);
  app.put(pathApi+"/shipping"+"/:id",shipping.update);
  app.delete(pathApi + "/shipping" + "/delete" + "/:id", shipping.delete);
}
// vondor api
{
  app.post(pathApi+"/vondor"+"/create",vondor.create);
  app.get(pathApi+"/vondor"+"/",vondor.findAll);
  app.get(pathApi+"/vondor"+"/:id",vondor.findOne);
  app.put(pathApi+"/vondor"+"/:id",vondor.update);
  app.delete(pathApi + "/vondor" + "/delete" + "/:id", vondor.delete);
}
// packing api
{
  app.post(pathApi+"/packing"+"/create",packing.create);
  app.get(pathApi+"/packing"+"/",packing.findAll);
  app.get(pathApi+"/packing"+"/:id",packing.findOne);
  app.put(pathApi+"/packing"+"/:id",packing.update);
  app.delete(pathApi + "/packing" + "/delete" + "/:id", packing.delete);
}
// materail api
{
  app.post(pathApi+"/materail"+"/create",materail.create);
  app.get(pathApi+"/materail"+"/",materail.findAll);
  app.get(pathApi+"/materail"+"/:id",materail.findOne);
  app.put(pathApi+"/materail"+"/:id",materail.update);
  app.delete(pathApi + "/materail" + "/delete" + "/:id", materail.delete);
}
// asset api
{
  app.post(pathApi+"/asset"+"/create",asset.create);
  app.get(pathApi+"/asset"+"/",asset.findAll);
  app.get(pathApi+"/asset"+"/:id",asset.findOne);
  app.put(pathApi+"/asset"+"/:id",asset.update);
  app.delete(pathApi + "/asset" + "/delete" + "/:id", asset.delete);
}
// type api
{
  app.post(pathApi+"/type"+"/create",typeo.create);
  app.get(pathApi+"/type"+"/",typeo.findAll);
  app.get(pathApi+"/type"+"/:id",typeo.findOne);
  app.put(pathApi+"/type"+"/:id",typeo.update);
  app.delete(pathApi + "/type" + "/delete" + "/:id", typeo.delete);
}

// Run the server
app.listen(PORT, () => {
  console.log(`Pak Server started... port ${PORT}`);
});

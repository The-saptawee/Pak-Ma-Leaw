const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("./logger");
const db = require("./models");
const tutorials = require("./controllers/tutorial.controller");

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
{
  app.post(pathApi + "/tutorial" + "/create", tutorials.create);
  app.get(pathApi + "/tutorial" + "/", tutorials.findAll);
  app.get(pathApi + "/tutorial" + "/:id", tutorials.findOne);
  app.put(pathApi + "/tutorial" + "/:id", tutorials.update);
  app.delete(pathApi + "/tutorial" + "/:id", tutorials.delete);
}

// Run the server
app.listen(PORT, () => {
  console.log(`Pak Server started... port ${PORT}`);
});

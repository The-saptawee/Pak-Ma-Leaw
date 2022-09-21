const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const Pool = require("pg").Pool;

const app = express();

const PORT = process.env.PORT || 5000;
const pathApi = "/api";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, () => {
  console.log(`Start server at port ${PORT}.....`);
});

const pool = new Pool({
  user: "me",
  host: "localhost",
  database: "api",
  password: "password",
  port: 5432,
});

// app.get(pathApi + "/", (req, res) => {
//   res.json("Hello World form server pak");
// });

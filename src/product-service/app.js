const express = require("express");
var cors = require("cors");
const port = 8001;
const app = express();
const route = require("./routes/index");
const bodyParser = require("body-parser");
const connect = require("./config/database");

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use("/", route);

connect();

app.listen(port, () => {
  console.log("Server product listening on " + port);
});

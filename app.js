const express = require("express");
const app = express();
require("dotenv").config();
const client = require("./config/redis");
const port = process.env.PORT || 3000;
const dbConnection = require("./config/postgres");

app.get("/", (req, res) => {
  res.send("Hello World!");
});
client.set("framework", "ReactJS");

let check = client.get("framework");
console.log("check", check);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

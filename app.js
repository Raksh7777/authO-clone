const express = require("express");
const app = express();
require("dotenv").config();
const bodyParser=require("body-parser")
const port = process.env.PORT || 3000;
const router=require('./routes/index')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1",router);




app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

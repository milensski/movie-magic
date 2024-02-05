let dotenv = require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes");
const configHandlebar = require("./configs/configHandlebar");

const app = express();
configHandlebar(app);

app.use(express.static("src/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB successfully!");
  app.listen(process.env.PORT, () => {
    console.log("Server is listening on port 3000...");
  });
});

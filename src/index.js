const exp = require("constants");
const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const router = require("./routes")
const app = express();

app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("src/public"));

app.use(router)


app.listen(3000, () => {
  console.log("Server is listnening on port 3000...");
});

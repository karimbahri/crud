const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");

dotenv.config({ path: `${__dirname}/config.env` });
const app = express();
const port = process.env.PORT || 5000;

app.use("/css", express.static(path.resolve(__dirname, "asserts/css")));
app.use("/img", express.static(path.resolve(__dirname, "asserts/img")));
app.use("/js", express.static(path.resolve(__dirname, "asserts/js")));

app.set("view engine", "ejs");

app
  .get("/", (req, res) => {
    res.render("index");
  })
  .get("/add-user", (req, res) => {
    res.render("add_user");
  })
  .get("/update-user", (req, res) => {
    res.render("update_user");
  });

// app.use(morgan("dev")); // development mode
app.listen(port, () => {
  console.log(`Listenning to server in port: ${port}`);
});

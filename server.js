const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const routes = require('./server/routes/routes');
const connect = require('./server/database/connections');

dotenv.config({ path: `${__dirname}/_config.env` });
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/css", express.static(path.resolve(__dirname, "asserts/css")));
app.use("/img", express.static(path.resolve(__dirname, "asserts/img")));
app.use("/js", express.static(path.resolve(__dirname, "asserts/js")));

app.set("view engine", "ejs");

app.use('/', routes);

connect();

// app.use(morgan("dev")); // development mode
app.listen(port, () => {
  console.log(`Listenning to server in port: ${port}`);
});

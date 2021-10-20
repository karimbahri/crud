const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config({ path: `${__dirname}/config.env` });
const app = express();
const port = process.env.PORT || 5000;

// app.use(morgan("dev")); // development mode
app.listen(port, () => {
  console.log(`Listenning to server in port: ${port}`);
});

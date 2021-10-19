const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: `${__dirname}/config.env` });
const app = express();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Listenning to server in port: ${port}`);
});

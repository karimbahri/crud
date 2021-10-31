const routes = require('express').Router();
const routesControllers = require('../contorllers/render');


routes
  .get("/", routesControllers.home_page)
  .get("/add-user", routesControllers.add_user)
  .get("/update-user", routesControllers.update_user);

module.exports = routes;

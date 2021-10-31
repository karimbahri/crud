const routes = require('express').Router();
const routesControllers = require('../contorllers/render');
const apiControllers = require('../contorllers/controllers');

routes
  .get("/", routesControllers.home_page)
  .get("/add-user", routesControllers.add_user)
  .get("/update-user", routesControllers.update_user);

// api crud requests handling
routes
  .post('/api/users', apiControllers.createUser)
  .get('/api/users', apiControllers.findUser)
  .put('/api/users/:id', apiControllers.updateUser)
  .delete('/api/users/:id', apiControllers.deleteUser)

module.exports = routes;

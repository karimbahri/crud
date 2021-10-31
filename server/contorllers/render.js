const axios = require('axios');

exports.home_page = (req, res) => {
    axios
      .get('http://127.0.0.1:8080/api/users')
        .then(usrs => {
          res.render("index", { users: usrs.data.data});
        })
        .catch(err => {
          res.send(err);
        })
  }

exports.add_user = (req, res) => {
    res.render("add_user");
  }

exports.update_user = (req, res) => {
    res.render("update_user");
  }


const userModel = require('../model/model');

exports.createUser = (req, res) => {
    if (!req.body) {
        return res
        .status(404)
        .json({
            status: 'Failure',
            message: 'Cannot post empty object'
        })
    }
    const user = new userModel({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });

    user
    .save()
    .then(data => {
        res
          .status(200)
          .json({
              status: 'Success',
              data
          })

    })
    .catch(err => {
        res
          .status(404)
          .json({
            status: 'Failure',
            message: err.message || 'Error during user creation'
          })
    })
}
exports.findUser = (req, res) => {
    let filter_object = {}
    if (req.query)
      filter_object = req.query;
    userModel
      .find(filter_object)
      .then(data => {
          res
            .status(200)
            .json({
                status: 'Success',
                length: data.length,
                data
            })
      })
      .catch(err => {
        res
          .status(404)
          .json({
            status: 'Failure',
            message: err.message || 'Error during finding users'
          })
        })
}

exports.updateUser = (req, res) => {
    if (!req.body) {
        return res
          .status(404)
          .json({
            status: 'Failure',
            message: 'Cannot put empty object'
        })
    }
    userModel
      .findByIdAndUpdate(req.params.id, req.body, {useFindAndModify: false})
      .then(data => {
          if (!data) {
            return res
            .status(400)
            .json({
              status: 'Failure',
              message: 'Cannot update user! User not found'
          })
          }
          else {
            res
              .status(200)
              .json({
                status: 'Success',
                data
            })
          }
      })
      .catch(err => {
        return res
        .status(400)
        .json({
            status: 'Failure',
            message: err.message || 'Error during updating user'
        })
    })
}
exports.deleteUser = (req, res) => {
    userModel
      .findByIdAndDelete(req.params.id)
      .then(data => {
          if (data) {
              res
                .status(200)
                .json({
                    status: 'success',
                    data
                })
          }
          else {
              res
                .status(400)
                .json({
                    status: 'failure',
                    message: 'Cannot delete user! user not found'
                })
          }
      })
      .catch(err => {
          res
            .status(400)
            .json({
                status: 'failure',
                message: err.message
            })
      })
}
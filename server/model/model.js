const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Missing Name !']
    },
    email: {
        type: String,
        required: [true, 'Missing Email'],
        unique: true
    },
    gender: {
        type: String,
        default: 'Male'
    },
    status: {
        type: String,
        default: 'Active'
    }

})

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;

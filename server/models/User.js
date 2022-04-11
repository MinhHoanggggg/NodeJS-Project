const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    username: String,
    password: String,
    roleid: String,
}, {
    timestamps: true,
});

module.exports = MyModel = mongoose.model('users', User);

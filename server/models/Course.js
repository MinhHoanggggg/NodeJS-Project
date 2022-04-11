const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    title: String,
    description: String,
    post: {
        type: Schema.Types.ObjectId,
        ref: 'posts' ,
    }
});

module.exports = MyModel = mongoose.model('course', Course);
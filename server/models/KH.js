const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true, //user bat buoc phai co username
        
    },
    phonenumber: {
        type: String,
        unique: true // khong ai co name giong nhau
    },
    
    email: {
        type: String,
        unique: true // khong ai co name giong nhau
    }
})

module.exports = mongoose.model('KHs', UserSchema)
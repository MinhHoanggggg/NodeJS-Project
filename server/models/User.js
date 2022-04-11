const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: {
        type: String,
        required: true, //user bat buoc phai co username
        unique: true // khong ai co name giong nhau
    },
    password: {
        type: String,
        required: true
    },
    roleid:{
        type: String,
        enum: ['1','0']
        
        
        },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('users', UserSchema)
///users la table


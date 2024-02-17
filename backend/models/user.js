const mongoose = require('mongoose')

const userSchema = new mongose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: Buffer,


})

model.esport = mongoose.model('User', userSchema)
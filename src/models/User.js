const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
{
    nome:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        unique: true
    },
    password:
    {
        type: String,
        select: false
    }
})

module.exports = mongoose.model('User', UserSchema)
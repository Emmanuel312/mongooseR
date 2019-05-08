const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
{
    description:
    {
        type: String,
        required: true
    },
    Date:
    {
        type: Date,
        default: Date.now()
    },
    User:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Post', PostSchema)
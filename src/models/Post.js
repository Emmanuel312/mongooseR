const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema(
{
    description:
    {
        type: String,
        required: true
    },
    date:
    {
        type: Date,
        default: Date.now()
    },
    user_fk:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Post', PostSchema)
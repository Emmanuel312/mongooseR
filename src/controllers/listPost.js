const Post = require('../models/Post')

class Posts
{
    async list(req,res)
    {
        try
        {
            const post = await Post.find({})
            res.json(post)
        }
        catch(e)
        {
            res.status(300).send({err: `erro ao listar posts ${e}`})
        }
    }
}

module.exports = new Posts
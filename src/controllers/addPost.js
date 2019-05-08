const Post = require('../models/Post')

class Posts
{
    async store(req,res)
    {
        try
        {
            const post = await Post.create(req.body)
            res.json(post)
        }
        catch(e)
        {
            res.status(300).send({err: `erro ao postar ${e}`})
        }
    }
}

module.exports = new Posts
const User = require('../models/User')

class Users
{
    async store(req,res)
    {
        try
        {
            const post = await User.create(req.body)
            res.json(post)
        }
        catch(e)
        {
            res.status(300).send({err: `erro ao add usuario ${e}`})
        }
    }
}

module.exports = new Users 
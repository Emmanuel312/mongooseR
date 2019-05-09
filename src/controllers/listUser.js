const User = require('../models/User')

class Users
{
    async list(req,res)
    {
        try
        {
            const post = await User.find({})
            res.json(post)
        }
        catch(e)
        {
            res.status(300).send({err: `erro ao listar usuarios ${e}`})
        }
    }
}

module.exports = new Users
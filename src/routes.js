const express = require('express')
const router = express.Router()
const addPost = require('./controllers/addPost')
const addUser = require('./controllers/addUser')
const listPost = require('./controllers/listPost')
const listUser = require('./controllers/listUser')

router.post('/post', addPost.store)
router.get('/post', listPost.list)

router.get('/user', listUser.list)
router.post('/user', addUser.store)


module.exports = router
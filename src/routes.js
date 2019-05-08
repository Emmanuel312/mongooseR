const express = require('express')
const router = express.Router()
const addPost = require('./controllers/addPost')
const addUser = require('./controllers/addUser')
const listPost = require('./controllers/listPost')
const listUser = require('./controllers/listUser')

router.post('/user', addPost.store)
/*
router.get('/user')

router.post('/post')
router.get('/post')
*/

module.exports = router
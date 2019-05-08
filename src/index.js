const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/relacao', {useNewUrlParser: true})

app.use(express.json())
app.use(require('./routes'))

app.listen(3000, () => console.log("server on"))
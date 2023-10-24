const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const {MONGODB_URI, PORT} = require('./utils/config')
const blogsRouter = require('./controllers/blogs')


const mongoUrl = MONGODB_URI

mongoose.connect(mongoUrl)

app.use(cors())
app.use(express.json())
app.use(blogsRouter)

module.exports = app
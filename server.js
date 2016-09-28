'use strict'

// const bodyParser = require('body-parser')
const express = require('express')
// const mongoose = require('mongoose')

const app = express()
// const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/tinderassemble'
const port = process.env.PORT || 3000
app.set('port', port)

// const message = require('./models/message')
// const user = require('./models/user')

app.get

app.listen(port, () =>
  console.log(`Listening on port: ${port}`)
)

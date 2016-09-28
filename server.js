'use strict'

const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const {connect} = require('./db/database')

const app = express()
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/tinderassemble'
const port = process.env.PORT || 3000
app.set('port', port)

const message = require('./models/message')
const user = require('./models/user')

//middlewares
app.use(express.static('client'))

//routes

connect()
	.then((req, res) => {
	app.listen(port, () => {
	console.log(`listening on ${port}`);
})
})
.catch(console.error)

'use strict'

const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const {connect} = require('./db/database')
const routes = require('./routes/index')

const app = express()

const port = process.env.PORT || 3000
app.set('port', port)

const message = require('./models/message')
const user = require('./models/user')

//middlewares
app.use(express.static('client'))

//routes
app.use(routes)

connect()
	.then((req, res) => {
		app.listen(port, () => {
		console.log(`listening on ${port}`);
	})
})
.catch(console.error)

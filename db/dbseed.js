'use strict'

const {connect, disconnect} = require('./database')

const user = require('../models/user')

connect()


.then(()=> user.remove({}))
.then(()=> user.insertMany({}))




.catch(console.error)
.then(disconnect)

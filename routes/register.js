'use strict'

const { Router } = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user')

const router = Router()

router.get('/register', (req, res) => {
	res.send('register')
})

router.post('/register', (req, res) => {
	User
		.create(req.body)
		.then(user => res.json(user))
})

module.exports = router

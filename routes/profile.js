'use strict'

const { Router } = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const { json } = require('body-parser')
const router = Router()

router.get('/profile', (req, res) => {
	res.send('profile')
})

router.post('/profile/:id', (req, res, err) => {
	User
		.create(req.body)
		.then(user => res.send(user))
		.catch(err)
})

module.exports = router

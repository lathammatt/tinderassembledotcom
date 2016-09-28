'use strict'

const { Router } = require('express')
const bcrypt = require('bcrypt')

const router = Router()

router.get('/register', (req, res) => {
	res.send('register')
})

router.post('/register', (req, res, err) => {
	User
		.create(req.body)
		.then(user => res.json(user))
		.catch(err)
})

module.exports = router

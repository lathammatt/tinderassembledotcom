'use strict'

const { Router } = require('express')
const bcrypt = require('bcrypt')

const router = Router()

router.get('/register', (req, res) => {
	res.send('register')
})

router.post('/register', (req, res) => {
	//code
})

module.exports = router

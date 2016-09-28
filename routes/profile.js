'use strict'

const { Router } = require('express')
const bcrypt = require('bcrypt')

const router = Router()

router.get('/profile', (req, res) => {
	res.send('profile')
})

router.put('/profile/:id', (req, res) => {
	
})

module.exports = router

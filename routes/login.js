'use strict';

const {Router} = require('express')
const router = Router()
const User = require('../models/user')

router.get('/login', (req, res) => {
  res.send('login')
})

router.post('/login', ({ body: {email, password } }, res, err) => {
	User.findOne({ email })
		.then(user => {
			if (user && password === user.password) {
				res.json('/')
			}
			else if(user) {
				res.json('login', { msg: "Password does not match" })
			}
			else {
				res.json('login', { msg: "Email does not exist" })
			}
		})
		.catch(err)
})


module.exports = router

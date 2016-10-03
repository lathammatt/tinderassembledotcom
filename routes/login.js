'use strict';

const {Router} = require('express')
const router = Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const passport = require('passport')

router.get('/login', (req, res) => {
  res.send('login')
})

router.post('/login', 
	passport.authenticate('local'), 
	function( req, res ) {
		console.log('req.user', req.user)
		console.log('yes')
		res.json({user: req.user})
	}	
)

module.exports = router

'use strict'

const { Router } = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user')

const router = Router()

router.get('/register', (req, res) => {
	res.send('register')
})

router.post('/register', ({body: {email, password}}, res, err) => {
  User.findOne({email})
    .then((user) => {
      if (user) {
        res.render('register')
      } else {
        return new Promise((resolve, reject) => {
          bcrypt.hash(password, 13, (err, hash) => {
            if (err){
              reject(err)
            } else {
              resolve(hash)
            }
          })
        })
      }
    })
    .then((hash) => User.create({email, password: hash}))
    .then(() => res.redirect('/login'))
    .catch(err)
})

module.exports = router

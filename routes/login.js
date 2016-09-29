'use strict';

const {Router} = require('express')
const router = Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')


router.get('/login', (req, res) => {
  res.send('login')
})

router.post('/login', ({session, body: {email, password}}, res, err) => {
  User.findOne({email})
    .then(user => {
      if (user) {
        return new Promise((resolve, reject)=> {
          bcrypt.compare(password, user.password, (err, matches) => {
            if (err){
              reject(err)
            } else {
              resolve(matches)
            }
          })
        })
      } else {
        console.log('Email not found')
        res.json('login')
      }
    })
    .then((matches) => {
      if (matches) {
        session.email = email
        res.json({ email })
      } else {
        console.log("Password didn't match")
        res.send('login')
      }
    })
    .catch(err)
})


module.exports = router

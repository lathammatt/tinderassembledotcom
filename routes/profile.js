'use strict'

const { Router } = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const { json } = require('body-parser')
const router = Router()

router.get('/profile', (req, res) => {
  User
    .find()
    .then(user => res.json(user))
})

router.patch('/profile', (req, res, err) => {
  let postID = req.body._id
  let body = req.body
  User
    .update({_id: postID}, body)
    .then(user => res.json(user))
})

module.exports = router

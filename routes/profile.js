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

router.post('/profile/:id', (req, res, err) => {
  User
    .create(req.body)
    .then(user => res.json(user))
})

module.exports = router

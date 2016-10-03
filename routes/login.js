'use strict';

const {Router} = require('express')
const router = Router()
const { loginPost } = require('../controllers/login')

router.get('/login', (req, res) => {
  res.send('login')
})

router.post('/login', loginPost)

module.exports = router

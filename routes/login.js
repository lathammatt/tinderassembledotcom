'use strict';

const {Router} = require('express')
const router = Router()

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {
  //
})


module.exports = router
'use strict';

const {Router} = require('express')
const router = Router()

router.get('/login', (req, res) => {
  res.send('login')
})

router.post('/login', (req, res) => {

})


module.exports = router
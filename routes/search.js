'use strict';

const {Router} = require('express')

const router = Router()

router.get('/search', (req, res) => {
  res.send('/search')
})


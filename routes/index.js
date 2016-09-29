"use strict";

const {Router} = require('express')

const router = Router()


// router.use(require("./login"))
router.use(require("./register"))
// router.use(require("./profile"))
// router.use(require("./message"))
// router.use(require("./search"))

module.exports = router

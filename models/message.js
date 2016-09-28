'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Message', {
	id_: String,
	messengers: Array,
	content: Array
})

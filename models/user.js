'use strict'

const mongoose = require('mongoose')

const HTML5_EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

module.exports = mongoose.model('User', {
  username: {
    type: String,
    // required: true,
    // index: {unique: true},
  },
  email: {
    type: String,
    lowercase: true,
    // required: true,
    match: [HTML5_EMAIL_REGEX, 'Please enter a valid email address'],
    // index: { unique: true },
  },
  password: {
    type: String,
    // required: true,
  },
  gender: String,
  birthday: String,
  orientation: String,
  universe: String,
  height: String,
  weight: String,
  name: String,
  tagline: String,
  messageStreams: Array
})

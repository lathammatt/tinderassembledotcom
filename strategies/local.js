'use strict'

const passport = require('passport')
const { Strategy } = require('passport-local')
const { compare } = require('bcrypt')
const User = require('../models/user')

passport.serializeUser((user, done) => done(null, user.id))
passport.deserializeUser((_id, done) => User.findOne({ _id }, done))

passport.use(new Strategy({
        usernameField: 'email',
        passwordField: 'password'
    },
    function(user, pass, done) {
        User.findOne({ email: user }, (err, email) => {
            if (err) {
                return done(err)
            }
            if (!email) return done(null, false)
            compare(pass, email.password, (err, matches) => {
                if (err) {
                    console.log('this is the error inside the compare *********')    
                    return done(err)
                }
                if (!matches) {
                    return done(null, false)
                } else {
                    // need to pass more than just user
                    return done(null, email)
                }
            })
        })
    }
))

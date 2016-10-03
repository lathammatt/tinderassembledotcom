'use strict'

const User = require('../models/user')
const bcrypt = require('bcrypt')
const passport = require('passport')

module.exports.loginPost = passport.authenticate('local', { successRedirect: '/profile',
                                                            failureRedirect: '/login' })


// module.exports.loginPost = ({session, body: {email, password}}, res, err) => {
//   console.log('login route /route')
//   var userID = ''
//   User.findOne({email})
//     .then(user => {
//       if (user) {
//         userID = user._id
//         return new Promise((resolve, reject)=> {
//           bcrypt.compare(password, user.password, (err, matches) => {
//             if (err){
//               reject(err)
//             } else {
//               resolve(matches)
//             }
//           })
//         })
//       } else {
//         console.log('Email not found')
//         res.json('login')
//       }
//     })
//     .then((matches) => {
//       if (matches) {
//         session.email = email
//         console.log('email', email)
//         console.log('userID', userID)
//         console.log('session.email', session.email)
//         res.json({ email, userID})
//       } else {
//         console.log("Password didn't match")
//         res.json('login')
//       }
//     })
//     .catch(err)
// }
'use strict'
// using node v6

const { json } = require('body-parser')
const express = require('express')
const session = require('express-session')
var RedisStore = require('connect-redis')(session)
const { connect } = require('./db/database')
const routes = require('./routes/index')

const app = express()

const port = process.env.PORT || 3000
app.set('port', port)

if(process.env.NODE_ENV !== 'production'){
  app.locals.pretty = true
}
app.locals.company = 'login test'
app.locals.errors = {}
app.locals.body = {}

app.use(session({
  store: new RedisStore({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
  }),
  secret: "secretuserkey"
}))

app.use((req, res, next) => {
  app.locals.email = req.session.email
  next()
})

//middlewares
app.use(express.static('client'))
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(json())

//routes
app.use('/api', routes)

app.use('/api', (req, res) =>
  res.status(404).send({ code: 404, status: 'Not Found' })
)

app.use((req, res) =>
  res.sendFile(process.cwd() + '/client/index.html')
)

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`listening on ${port}`);
    })
  })
  .catch(console.error)

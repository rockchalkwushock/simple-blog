/* eslint-disable no-console */
const Express = require('express')

const config = require('./config')

const { database, env, middlewares, routes } = config

const app = new Express()

database(env.MONGO_URI)
middlewares(app)
routes(app)

app.listen(env.PORT, err => {
  if (err) throw err
  console.log(
    `Express Server running on ${env.PORT} in ${process.env.NODE_ENV}`
  )
})

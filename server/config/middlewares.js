const bodyParser = require('body-parser')
const cors = require('cors')
const expressSanitizer = require('express-sanitizer')
const helmet = require('helmet')
const methodOverride = require('method-override')
const morgan = require('morgan')

const isTest = process.env.NODE_ENV === 'test'
const isDev = process.env.NODE_ENV === 'development'

module.exports = app => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(expressSanitizer())
  app.use(helmet())
  app.use(cors())
  app.use(methodOverride('_method'))
  if (isDev && !isTest) {
    app.use(morgan('dev'))
  }
  app.set('view engine', 'ejs')
}

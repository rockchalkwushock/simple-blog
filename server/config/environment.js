require('dotenv-safe').load()

const devConfig = {
  MONGO_URI: process.env.MONGO_URI
}

const testConfig = {
  MONGO_URI: process.env.MONGO_URI
}

const prodConfig = {
  MONGO_URI: process.env.MONGO_URI
}

const defaultConfig = {
  PORT: process.env.PORT || 3000
}

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig
    case 'test':
      return testConfig
    default:
      return prodConfig
  }
}

module.exports = {
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV)
}

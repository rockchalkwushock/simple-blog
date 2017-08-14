/* eslint-disable no-param-reassign */
module.exports = ({ body, sanitize }, res, next) => {
  body.post.content = sanitize(body.post.content)
  next()
}

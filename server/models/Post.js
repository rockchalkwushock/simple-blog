const mongoose = require('mongoose')

const postSchema = new mongoose.Schema(
  {
    content: String,
    image: String,
    title: String
  },
  { timestamps: true }
)

module.exports = mongoose.model('posts', postSchema)

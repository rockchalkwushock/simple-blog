const { Post } = require('../models')
const filterPost = require('../utils')

module.exports = app => {
  app.get('/', (req, res) => res.redirect('/posts'))
  app.get('/posts', async (req, res) => {
    try {
      const posts = await Post.find({})
      res.render('index', { posts })
    } catch (e) {
      throw e
    }
  })
  app.get('/posts/new', (req, res) => {
    res.render('new')
  })
  app.post('/posts', filterPost, async ({ body }, res) => {
    const { post } = body
    try {
      await Post.create({ ...post })
      res.redirect('/posts')
    } catch (e) {
      throw e
    }
  })
  app.get('/posts/:id', async ({ params }, res) => {
    try {
      const post = await Post.findById(params.id)
      res.render('show', { post })
    } catch (e) {
      throw e
    }
  })
  app.get('/posts/:id/edit', async ({ params }, res) => {
    try {
      const post = await Post.findById(params.id)
      res.render('edit', { post })
    } catch (e) {
      throw e
    }
  })
  app.put('/posts/:id', filterPost, async ({ body, params }, res) => {
    const { post } = body
    try {
      await Post.findByIdAndUpdate({ _id: params.id }, { ...post })
      res.redirect(`/posts/${params.id}`)
    } catch (e) {
      throw e
    }
  })
  app.delete('/posts/:id', async ({ params }, res) => {
    try {
      await Post.findByIdAndRemove(params.id)
      res.redirect('/posts')
    } catch (e) {
      throw e
    }
  })
}

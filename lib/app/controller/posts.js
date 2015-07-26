var Post = require('../models/post')

var me = module.exports = {}

me.test = function(req, res, next) {
  Post.getPosts(function(err, posts) {
    if (err) return next(err)
    req.posts = posts
    next()
  })
}

me.render = function(req, res, next) {
  res.render('posts', {posts: req.posts})
}

var Post = require('../models/post')

var me = module.exports = {}

me.test = function(req, res, next) {
  Post.getPosts(function(err, posts) {
    if (err) return next(err)
    res.json(posts)
  })
}

me.getPost = function(req, res, next) {
  Post.getPostById(req.query.q, function(err, post) {
    if (err) return next(err)
    res.render('preview', {post: post})
  })
}

me.savePost = function(req, res, next) {
  Post.savePost(req.body, function(err, post) {
    if (err) return next(err)
    res.json(post)
  })
}

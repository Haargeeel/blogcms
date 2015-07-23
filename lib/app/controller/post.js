var Post = require('../models/post')

var me = module.exports = {};

me.test = function(req, res, next) {
  Post.getPosts(function(err, posts) {
    if (err) return next(err)
    res.json(posts);
  })
}

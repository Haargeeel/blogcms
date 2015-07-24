var db = require('../plugins/mongo')

var me = module.exports = {}

me.getPosts = function(cb) {
  db.get('blog', function(err, blogDB) {
    blogDB.collection('posts', function(err, coll) {
      if (err) return cb(err)
      coll.find().toArray(cb)
    })
  })
}

me.savePost = function(post, cb) {
  db.get('blog', function(err, blogDB) {
    blogDB.collection('posts', function(err, coll) {
      if (err) return cb(err)
      coll.save(post, {w: 1}, function(err, result) {
        if (err) return cb(err)
        cb(null, post)
      })
    })
  })
}

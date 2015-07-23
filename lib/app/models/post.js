var db = require('../plugins/mongo')

var me = module.exports = {}

me.getPosts = function(cb) {
  db.get('blog', function(err, blogDB) {
    blogDB.collection('posts', function(err, coll) {
      if (err) return cb(err)
      coll.findOne(cb)
    })
  })
}

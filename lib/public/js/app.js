var post = require('./post')
  , posts = require('./posts')

window.onload = function() {
  console.log('jetzt geht los')
  post.init()
  posts.init()
}

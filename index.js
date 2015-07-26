var express = require('express')
  , stylus = require('stylus')
  , bodyParser = require('body-parser')

var post = require('./lib/app/controller/post')
  , posts = require('./lib/app/controller/posts')

var app = express()

app.set('views', __dirname + '/build/views')
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/build/public'))
app.use(bodyParser.json())

app.post('/post',
  post.savePost)

app.get('/', function(req, res) {
  res.render('index')
})

app.get('/newpost', function(req, res) {
  res.render('post')
})

app.get('/post',
  post.test)

app.get('/posts',
  posts.test,
  posts.render)

app.get('/preview',
  post.getPost)

var server = app.listen(3000, function() {
  var host = server.address().address
  var port = server.address().port
  console.log('Server running at http://%s:%s', host, port)
})

var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')

var post = require('./lib/app/controller/post')

var app = express()

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

app.set('views', __dirname + '/build/views')
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/build/public'))

app.get('/', function(req, res) {
  res.render('index')
})

app.get('/newpost', function(req, res) {
  res.render('post')
})

app.get('/post',
  post.test)
//app.get('/post', function(req, res) {
  //res.json({test: 'test'})
//})

var server = app.listen(3000, function() {
  var host = server.address().address
  var port = server.address().port
  console.log('Server running at http://%s:%s', host, port)
})

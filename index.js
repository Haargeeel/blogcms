var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib')

var app = express()

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}

app.set('views', __dirname + '/lib/views')
app.set('view engine', 'jade')
app.use(stylus.middleware(
  { src: __dirname + '/lib'
  , compile: compile
  }
)) 
app.use(express.static(__dirname + '/lib'))

app.get('/', function(req, res) {
  res.render('index')
})

app.get('/post', function(req, res) {
  res.render('post')
})

var server = app.listen(3000, function() {
  var host = server.address().address
  var port = server.address().port
  console.log('Server running at http://%s:%s', host, port)
})

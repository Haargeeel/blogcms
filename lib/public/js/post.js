var request = require('superagent')

module.exports.init = function() {

  var submitButton = document.getElementById('post-submit')
  if (submitButton)
    submitButton.addEventListener('click', submit)

  function submit() {
    var title = document.getElementById('post-title').value
      , content = document.getElementById('post-content').value
      , author = 'Ray Gläske'
      , date = new Date()
      , urlTitle = title.replace(' ', '-').toLowerCase()
      , month = (date.getMonth() + 1).toString()
      , keywords = document.getElementById('post-keywords').value.split(' ')

    if (month.length < 2)
      month = 0 + month

    var url = '/' + date.getFullYear() 
      + '/' + month 
      + '/' + date.getDate() 
      + '/' + urlTitle

    var post = {
      title: title,
      content: content,
      author: author,
      date: date,
      keywords: keywords,
      url: url}
    console.log(post)

    request
      .post(window.location.origin + '/post')
      .send(post)
      .end(function(err, res) {
        if (err) return
        console.log(res.body)
      })
  }
}

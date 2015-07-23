window.onload = function() {
  console.log('jetzt geht los')
}

function submit() {
  var title = document.getElementById('post-title').value
    , content = document.getElementById('post-content').value
    , author = 'Ray Gläske'
    , date = new Date()
    , urlTitle = title.replace(' ', '-').toLowerCase()
    , month = (date.getMonth() + 1).toString()

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
    url: url}
  console.log(post)
}

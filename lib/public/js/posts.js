
module.exports.init = function() {

  var tbody = document.getElementsByTagName('tbody')[0]
  if (tbody) {
    var rows = tbody.getElementsByTagName('tr')
      , ids = tbody.getElementsByTagName('noscript')
    if (rows && ids) {
      for (var i = 0; i < rows.length; i++) {
        rows[i].addEventListener('click', preview(ids[i].textContent))
      }
    }
  }

  function preview(id) {
    return function() {
      window.location.href = window.location.origin + '/preview?q=' + id;
    }
  }
}

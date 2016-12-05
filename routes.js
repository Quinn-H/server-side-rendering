var db = require('./db')

module.exports = {
  // home: home,
  getReposName: getReposName
}

// function home (req, res) {
//   var data = db.getHomeData()
//   data.showList = req.query.showlist
//   res.render('home', data)
// }

function getReposName (req, res) {
  var data = db.getName()
  res.render('home', data)
}

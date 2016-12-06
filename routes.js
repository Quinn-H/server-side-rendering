var db = require('./db')


// var repos = require('./github')

module.exports = {
  getRepoName: getRepoName,
  getId: getId
}


//To get Repos names
function getRepoName(req, res) {
  db.getName(function(err, vm){
    res.render('home', vm)
  })
}

function getId(req, res) {
  db.getData(function(err, repos){
    var matching = repos.filter(function(repo) {
      return repo.id == req.params.id
    })
    res.render('details', matching[0])
  })
}

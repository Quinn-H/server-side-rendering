var fs = require('fs')
var path = require('path')

module.exports = {
  getHomeData: getHomeData,
  getName: getName
}
// var repos = require('./github')

var dataPath = path.join(__dirname, 'github.json')


function getHomeData () {
  return {
    title: 'Awesome title',
    headerText: 'Welcome to Awesome',
    fruitList: [{
      name: 'apples',
      colour: 'red'
    }, {
      name: 'oranges',
      colour: 'orange'
    }, {
      name: 'bananas',
      colour: 'yellow'
    }]
  }
}

function getName (callback) {
  getData(function(err, repos){
    var data = {
      repos: repos
    }
    callback(err, data)
  })
}

//To read github.json
function getData (callback) {
  fs.readFile(dataPath, function(err, data){
    var repos = JSON.parse(data)
    callback(null, repos)
  })
}

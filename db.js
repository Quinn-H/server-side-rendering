var fs = require('fs')
var path = require('path')

module.exports = {
  getHomeData: getHomeData,
  getName: getName,
  getData: getData
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

  // Read the contents of the JSON file.
  fs.readFile(dataPath, function (err, data) {

    // If readFile gives an error pass on that error.
    if (err) {
      callback(err)
      return
    }

    // Parse file contents into a javascript object.
    var repos = JSON.parse(data)

    // Give the javascript object to the callback.
    callback(null, repos)
  })

  // fs.readFile(dataPath, parseJSON)
  //
  // function parseJSON(err, data){
  //   var repos = JSON.parse(data)
  //   callback(null, repos)
  // }
}

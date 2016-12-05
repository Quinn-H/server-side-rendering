module.exports = {
  // getHomeData: getHomeData,
  getName: getName
}

var repos = require('./github')

// function getHomeData () {
//   return {
//     title: 'Awesome title',
//     headerText: 'Welcome to Awesome',
//     fruitList: [{
//       name: 'apples',
//       colour: 'red'
//     }, {
//       name: 'oranges',
//       colour: 'orange'
//     }, {
//       name: 'bananas',
//       colour: 'yellow'
//     }]
//   }
// }

function getName () {
  var data = {
    repos: repos
  }
  return data
}

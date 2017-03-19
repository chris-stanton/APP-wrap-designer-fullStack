myApp.factory('FactoryFactory',['$http',function($http) {
console.log('FactoryFactory running');

var blankFactory = { list: [] };

// getBlanks();
//
// //gets blanks for drop down options
// function getBlanks() {
//     $http.get('/spacing')
//       .then(function(response) {
//         console.log(response);
//         self.blankFactory.list = response.data;
//     })//end of .then
// }//end of blanks()







  return {
//blank list for spacing view select options
    blankFactory : blankFactory

  }
}]);

myApp.controller('OneController',['FactoryFactory',function(FactoryFactory) {

console.log('OneController running');

var self = this;
self.testMessage = 'This is the view-1 test message';

// self.NewArrayOne = [];
//
// getFunction();
//
// function getFunction('<sample-perameter-object>;') {
//   $http.get('</sample-url>')
//     .then(function(response) {
//       console.log(response);
//       self.NewArrayOne = response.data;
//     })//end of .then
// }//end of getHeroes()
//
// self.deleteFunction = function('<sample-perameter-object>;') {
//   $http.delete('</sample-url/>' + object.id)
//     .then(function(response) {
//       console.log('deleteFunction');
//       getFunction();
//     })//end of .then
// }//end of self.deleteHero()
// }]);//end of controller


}]);//end of myApp.controller

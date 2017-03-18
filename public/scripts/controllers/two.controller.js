myApp.controller('TwoController',['FactoryFactory',function(FactoryFactory) {

  console.log('TwoController running');
  var self = this;
  this.testMessage = 'This is the view-2 test message';

//   self.newArray = [];
//
//   getFunction();
//
//   function getFunction() {
//     $http.get('</sample-url>')
//       .then(function(response) {
//         console.log(response);
//         self.newArray = response.data;
//       })//end of .then
//   }//end of getHeroes()
//
//
// //deletes by ID
//   self.deleteFunction = function('<sample-perameter-object>;') {
//     $http.delete('</sample-url>' + object.id)
//       .then(function(response) {
//         console.log('deleteHero()');
//         getHeroes();
//       })//end of .then
//   }//end of self.deleteHero()
//   }]);//end of controller

}]);//end of myApp.controller

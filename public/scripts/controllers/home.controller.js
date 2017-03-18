myApp.controller('HomeController', ['FactoryFactory',function(FactoryFactory) {
  console.log('homeController running');
  var self = this;
  self.testMessage = 'Hello World, this is the home controller test message';

  // self.newObject = {};
  // self.newArrayHome = [];
  //
  // nameFunction();
  //
  // self.addHero = function() {
  //     $http.post('</sample-url>', self.newObject)
  //       .then(function(response) {
  //         console.log("HomeController addHero");
  //         self.newObject = {};
  //       })//end of .then
  //   }//end of addHero()
  //
  //
  //   function nameFunction() {
  //     $http.get('</sample-url>')
  //       .then(function(response) {
  //         self.newArrayHome = response.data;
  //         console.log("HomeController nameFunction");
  //         })//end .then
  //     }//end of getPowers()
  //   }]);//end controller


}]); // end controller code block

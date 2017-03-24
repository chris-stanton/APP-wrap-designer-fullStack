myApp.controller('NavController',['FactoryFactory',function(FactoryFactory) {

  console.log('NavController running');
  var self = this;
  this.testMessage = 'NC WORKING STATUS';


//google authenticate
  self.authUser = FactoryFactory.authUser;
//google de-authedicate
  self.deAuthUser = FactoryFactory.DeAuthUser;
//google register
self.registerUser = function(){
  console.log('button click');
  window.open('https://www.google.com');
}



}]);//end of myApp.controller

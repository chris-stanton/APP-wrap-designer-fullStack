myApp.controller('NavController',['FactoryFactory',function(FactoryFactory) {

  console.log('NavController running');
  var self = this;
  this.testMessage = 'NC WORKING STATUS';

//google authenticate
  self.authUser = FactoryFactory.authUser;
//google de-authedicate
  self.deAuthUser = FactoryFactory.DeAuthUser;


}]);//end of myApp.controller

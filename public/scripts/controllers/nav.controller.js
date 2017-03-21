myApp.controller('InputController',['FactoryFactory',function($firebaseAuth, FactoryFactory) {

  console.log('NavController running');
  var self = this;
  this.testMessage = 'IC WORKING STATUS';

//google authenticate
  self.authUser = function(){
    FactoryFactory.authUser();
  };

//google de-authedicate
  self.deAuthUser = function(){
    FactoryFactory.DeAuthUser();
  };



deAuthUser()


}]);//end of myApp.controller

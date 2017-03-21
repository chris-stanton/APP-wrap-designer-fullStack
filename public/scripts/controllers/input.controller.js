myApp.controller('InputController',['FactoryFactory',function($firebaseAuth, FactoryFactory) {

  console.log('InputController running');
  var self = this;
  this.testMessage = 'IC WORKING STATUS';

//new blank pass-through to factory
  self.newBlankOrder = FactoryFactory.addBlank;
//new thread pass-through to factory
  self.newThreadOrder = FactoryFactory.addThread;

}]);//end of myApp.controller

myApp.controller('InputController',['FactoryFactory',function(FactoryFactory) {

  console.log('InputController running');
  var self = this;
  self.testMessage = 'IC WORKING STATUS';
  self.newBlankOrder = {};
  self.newThreadOrder = {};

//new blank pass-through to factory
  self.addBlanks = function(){
    FactoryFactory.addBlanks(self.newBlankOrder);
  };

//new thread pass-through to factory
  self.addThreads = function(){
    console.log(self.newThreadOrder)
    FactoryFactory.addThreads(self.newThreadOrder);
  };

//google authenticate
  self.authUser = function(){
    console.log("auth clicked");
   //FactoryFactory.authUser;
  };

//google de-authedicate
  self.deAuthUser = function(){
    console.log("de-auth clicked");
    //FactoryFactory.deAuthUser;
  };


}]);//end of myApp.controller

myApp.controller('InputController',['FactoryFactory',function(FactoryFactory) {

  console.log('InputController running');
  var self = this;
  self.testMessage = 'IC WORKING STATUS';
  self.newBlankOrder = {};
  self.newThreadOrder = {};
  console.log("Input controller: " + self.newBlankOrder);

//new blank pass-through to factory
  self.addBlanks = function(){
    FactoryFactory.addBlanks(self.newBlankOrder);
  };
//new thread pass-through to factory
  self.addThreads = function(){
    FactoryFactory.addThreads(self.newThreadOrder);
  };


}]);//end of myApp.controller

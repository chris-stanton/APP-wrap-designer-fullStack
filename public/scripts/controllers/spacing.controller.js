myApp.controller('SpacingController', ['FactoryFactory', function(FactoryFactory) {

console.log('SpacingController running');

var self = this;
self.testMessage = 'SC WORKING STATUS';

//object from drop down menu
self.newBlank = {};

//unused path to call getBlanks function located at factory - missing the button to trigger
self.getBlanks = FactoryFactory.getBlanks;
//returned object from the factory
self.onLoad = FactoryFactory.blankFactoryObject;
//button click to call all blanks factory function
self.getSpecificBlank = FactoryFactory.getSpecificBlank;
//returned object from factory
self.specificBlankObject = FactoryFactory.specificBlankObject;


//print function
self.print = function(){
  window.print();
}


}]);//end of myApp.controller

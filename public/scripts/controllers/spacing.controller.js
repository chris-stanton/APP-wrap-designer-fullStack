myApp.controller('SpacingController', ['FactoryFactory',function($firebaseAuth, FactoryFactory) {

console.log('SpacingController running');

var self = this;
self.testMessage = 'SC WORKING STATUS';
self.newBlank = {};
self.blankData = [];

//self.blankData = FactoryFactory.blankFactoryObject;
console.log(self.blankData);


//gets all blanks
self.getBlanks = function(newBlank) {
  FactoryFactory.getBlanks();
}




}]); // end controller code block

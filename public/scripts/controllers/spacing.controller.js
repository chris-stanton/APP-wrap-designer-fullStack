myApp.controller('SpacingController', ['FactoryFactory',function($firebaseAuth, FactoryFactory) {

console.log('SpacingController running');

var self = this;
self.testMessage = 'SC WORKING STATUS';
self.newBlankOrder = {};
self.blankData = [];

self.blankData = FactoryFactory.blankFactoryObject;
console.log(self.blankData);


//gets all blanks
self.blankData = function() {
  FactoryFactory.getBlanks();
}





}]); // end controller code block

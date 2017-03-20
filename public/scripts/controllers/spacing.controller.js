myApp.controller('SpacingController', ['FactoryFactory',function($firebaseAuth, FactoryFactory) {

console.log('SpacingController running');

var self = this;
self.testMessage = 'SC WORKING STATUS';

self.newBlank = {};

//gets all blanks
self.blankData = function() {
  FactoryFactory.getBlanks(self.newBlank);
}





}]); // end controller code block

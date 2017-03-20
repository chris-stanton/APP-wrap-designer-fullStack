myApp.controller('SpacingController', ['FactoryFactory',function($firebaseAuth, FactoryFactory) {

console.log('SpacingController running');

var self = this;
self.testMessage = 'SC WORKING STATUS';
console.log(self.newblank)

//self.newBlank = FactoryFactory.blankFactory.list;

//gets all blanks
self.blankData = function() {
  FactoryFactory.getBlanks();
}





}]); // end controller code block

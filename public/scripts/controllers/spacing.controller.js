myApp.controller('SpacingController', ['FactoryFactory',function(FactoryFactory) {

console.log('SpacingController running');

var self = this;
self.testMessage = 'SC WORKING STATUS';
//returned object from the factory
self.onLoad = FactoryFactory.blankFactoryObject;

self.getBlanks = FactoryFactory.getBlanks;
//button click to call all blanks factory function
self.getSpecificBlank = FactoryFactory.getSpecificBlank;
//returned object from factory
self.getSpecificBlankObject = FactoryFactory.getSpecificBlankObject;
//object from drop down menu
self.newBlank = {};


}]); //end controller code block

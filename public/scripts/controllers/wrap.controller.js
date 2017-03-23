myApp.controller('WrapController',['FactoryFactory',function(FactoryFactory) {

console.log('WrapController running');

var self = this;
self.testMessage = 'WC WORKING STATUS';

// update button click function
self.updateColors = FactoryFactory.updateColor;
//return color object from factory
self.colorObject = FactoryFactory.colorFactoryObject;

self.blankColorFactoryObject = FactoryFactory.blankColorFactoryObject;

//thread color selecter value container
self.newColor = {};
//blank color selecter value container
self.newColorBlank = {};

}]);//end of myApp.controller

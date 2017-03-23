myApp.controller('WrapController',['FactoryFactory',function(FactoryFactory) {

console.log('WrapController running');

var self = this;
self.testMessage = 'WC WORKING STATUS';

// update button click function
self.updateColors = FactoryFactory.updateColor;
//return color object from factory
self.colorObject = FactoryFactory.colorFactoryObject;
//selecter value container
self.newColor = {};
console.log(self.newColor)
}]);//end of myApp.controller

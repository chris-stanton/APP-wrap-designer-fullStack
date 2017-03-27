myApp.controller('WrapController',['FactoryFactory',function(FactoryFactory) {

console.log('WrapController running');

var self = this;
self.testMessage = 'WC WORKING STATUS';

// update button click function
self.updateColors = FactoryFactory.updateColor;
//return thread color object from factory
self.colorObject = FactoryFactory.colorFactoryObject;
//return blank color object from factory
self.blankColorFactoryObject = FactoryFactory.blankColorFactoryObject;
//print function
self.print = function(){
  window.print();
}

//thread color selecter value container
self.newColor = {};
//blank color selecter value container
self.newColorBlank = {};


}]);//end of myApp.controller

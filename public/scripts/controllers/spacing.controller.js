myApp.controller('SpacingController', ['FactoryFactory',function(FactoryFactory) {

console.log('SpacingController running');

var self = this;
self.testMessage = 'SC WORKING STATUS';

//object from drop down menu
self.newBlank = {};

//returned object from the factory
self.onLoad = FactoryFactory.blankFactoryObject;
//unused path to call getBlanks function located at factory - missing the button to trigger
self.getBlanks = FactoryFactory.getBlanks;
//button click to call all blanks factory function
self.getSpecificBlank = FactoryFactory.getSpecificBlank;
//returned object from factory
self.getSpecificBlankObject = FactoryFactory.getSpecificBlankObject;
//print function
self.print = function(){
  window.print();
}


}]); //end controller code block




//matching selects with database - gives a true or false return
// self.getSpecificBlank = function(){
//   var onLoad = self.onLoad.list;
//   var newBlank = self.newBlank
//   console.log("view side: ", newBlank)
//   console.log("factory side: ", onLoad);
//
//     var batKicks = onLoad.filter(function (el) {
//       var newTwo =  (el.blankname === newBlank.blankName);
//       console.log(newTwo)
//     });
// }

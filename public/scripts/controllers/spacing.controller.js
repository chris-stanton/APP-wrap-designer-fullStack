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



// console.log("factory side: ", onLoad);
// self.getSpecificBlank = function(){
//   console.log("view side: ", self.newBlank)
// //array of objects from DB
//   var onload = self.onLoad.list;
// //object from view
//   var submit = self.newBlank;
//
//   for (var i = 0; i < onload.length-1; i++) {
//     var batKicks = onload.filter(function (el) {
//       var newTwo =  (el.blankname === submit.blankName);
//       console.log('newTwo: ', newTwo)
//   })
//   if (true) {
//     var newOne = true;
//   }
// //console.log(newOne)
// }
// }


}]);//end of myApp.controller

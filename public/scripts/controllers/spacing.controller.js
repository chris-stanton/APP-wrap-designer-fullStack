myApp.controller('SpacingController', ['FactoryFactory', function(FactoryFactory) {

console.log('SpacingController running');

var self = this;
self.testMessage = 'SC WORKING STATUS';

//object from drop down menu
self.newBlank = {};

//unused path to call getBlanks function located at factory - missing the button to trigger
self.getBlanks = FactoryFactory.getBlanks;
//returned object from the factory
self.onLoad = FactoryFactory.blankFactoryObject;
//button click to call all blanks factory function
self.getSpecificBlank = FactoryFactory.getSpecificBlank;
//returned object from factory
self.specificBlankObject = FactoryFactory.specificBlankObject;

//print function
self.print = function(){
  window.print();
}

//broken
// self.getSpecificBlank = function(){
//   var newBlank = self.newBlank;
//   console.log("newBlank", newBlank);
//   FactoryFactory.getSpecificBlank(newBlank);
// }


}]);//end of myApp.controller



// self.getSpecificBlank = function(){
// console.log(FactoryFactory.specificBlankObject)
// }



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

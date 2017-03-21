myApp.factory('FactoryFactory',['$http',function($http) {

  console.log('FactoryFactory running');
  var blankFactory = { list: [] };

//gets blanks on startup
  getBlanks();
//gets blanks for drop down options on spacing view
  function getBlanks() {
      $http({
        method: 'GET',
        url: '/spacing'
      }).then(function(response) {
          console.log("getBlanks Request: ", response);
          blankFactory.list = response.data;
      });//end of .then
    }//end of getblanks()

//adds blank to database from input view inputs
  function addBlank() {
      $http({
        method: 'POST',
        url: '/add',
        data: newBlankOrder
      }).then(function(response){
        console.log("addBlank Request: ", response);
        //self.newblankOrder = {};
        //getBlanks();
      });//end of .then
    }//end of addBlank()

  //adds thread color to database from input view inputs
  function addThread() {
      $http({
        method: 'POST',
        url: '/add',
        data: newThreadOrder
      }).then(function(response){
        console.log("addThread Request: ", response);
        //self.newThreadOrder = {};
        //getBlanks();
      });//end of .then
    }





  return {
//blank list for spacing view select options - object
    blankFactory : blankFactory,
//database blank submission - function
    addBlank : addBlank,
//database blank submission - function
    addThread : addThread
  }
}]);

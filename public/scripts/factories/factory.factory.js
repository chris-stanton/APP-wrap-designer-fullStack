myApp.factory('FactoryFactory',['$http',function($http) {

  console.log('FactoryFactory running');
  var blankFactoryObject = { list: [] };
  var updateAuth = { list: [] };
  var updateDeAuth = { list: [] };

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
  function addBlanks(newBlankOrder) {
      $http({
        method: 'POST',
        url: '/add',
        data: newBlankOrder
      }).then(function(response){
        console.log("addBlank Request: ", response);
        self.newblankOrder = {};
        //getBlanks();
      });//end of .then
    }//end of addBlank()

//adds thread color to database from input view inputs
  function addThreads(newThreadOrder) {
      $http({
        method: 'POST',
        url: '/add',
        data: newThreadOrder
      }).then(function(response){
        console.log("addThread Request: ", response);
        self.newThreadOrder = {};
        //getBlanks();
      });//end of .then
    }

//google authenticate login
  function authUser() {
      $http({
        method: 'GET',
        url: '/auth'
      }).then(function(response) {
        console.log("authUser Request: ", response);
        updateAuth.list = response.data;//not sure about this line
      });//end of .then
    }//end of authUser()

//google authenticate logout
  function deAuthUser() {
      $http({
        method: 'GET',
        url: '/auth'
      }).then(function(response) {
        console.log("deAuthUser Request: ", response);
        updateDeAuth.list = response.data;//not sure about this line
      });//end of .then
    }//end of deAuthUser()




  return {
//blank list for spacing view select options - object
    blankFactoryObject : blankFactoryObject,
//database blank submission - function
    addBlanks : addBlanks,
//database blank submission - function
    addThreads : addThreads,
//authenticated function - function
    authUser : authUser,
//deauthenticate function - function
    deAuthUser : deAuthUser,
//return after google authentication login - object
    updateAuth : updateAuth, //not sure about this line
//return after google authentication logout - object
    updateDeAuth : updateDeAuth //not sure about this line
  }
}]);

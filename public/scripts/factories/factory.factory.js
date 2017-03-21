myApp.factory('FactoryFactory',['$http',function($http) {

  console.log('FactoryFactory running');

  var blankFactoryObject = { list: [] };
  var updateAuth = { list: [] };
  var updateDeAuth = { list: [] };
  var getSpecificBlankObject = { list: [] };

//gets blanks on startup
  getBlanks();
//gets blanks for drop down options on spacing view
  function getBlanks() {
      $http({
        method: 'GET',
        url: '/spacing'
      }).then(function(response) {
          console.log("getBlanks Request: ", response.data);
          blankFactoryObject.list = response.data;
      });//end of .then
    }//end of getblanks()

// gets results from spacing view drop down menu
  function getSpecificBlank() {
      $http({
        method: 'GET',
        url: '/spacing'
      }).then(function(response) {
          console.log("getSpecificBlank: ", response.data);
          getSpecificBlankObject.list = response.data;
      });//end of .then
    }//end of getblanks()

//adds blank to database from input view inputs
  function addBlanks(newBlankOrder) {
      $http({
        method: 'POST',
        url: '/add/addBlank',
        data: newBlankOrder
      }).then(function(response){
        console.log("addBlank Request: ", response);
        self.newblankOrder = {};
      });//end of .then
    }

//adds guides to database from input view
  function addBlanks(newBlankOrder) {
      $http({
        method: 'POST',
        url: '/add/addGuide',
        data: newBlankOrder
      }).then(function(response){
        console.log("addGuide Request: ", response);
        self.newblankOrder = {};
      });//end of .then
    }

//adds guide measurments to database from input view
  function addBlanks(newBlankOrder) {
      $http({
        method: 'POST',
        url: '/add/addGuideMeasurement',
        data: newBlankOrder
      }).then(function(response){
        console.log("addGuideMeasurement Request: ", response);
        self.newblankOrder = {};
      });//end of .then
    }

//adds thread color to database from input view inputs
  function addThreads(newThreadOrder) {
      $http({
        method: 'POST',
        url: '/add/addThread',
        data: newThreadOrder
      }).then(function(response){
        console.log("addThread Request: ", response);
        self.newThreadOrder = {};
      });//end of .then
    }

//google authenticate login
  function authUser() {
      $http({
        method: 'GET',
        url: '/auth'
      }).then(function(response) {
        console.log("authUser Request: ", response);
        updateAuth.list = response.data;
      });//end of .then
    }//end of authUser()

//google authenticate logout
  function deAuthUser() {
      $http({
        method: 'GET',
        url: '/auth'
      }).then(function(response) {
        console.log("deAuthUser Request: ", response);
        updateDeAuth.list = response.data;
      });//end of .then
    }//end of deAuthUser()




  return {
//gets blank stats for spacing view 
    getBlanks : getBlanks,
//gets specific blank info from select menu dropdowns for spacing view - object
    getSpecificBlank : getSpecificBlank,
//adds stats to DOM on spacing view - object
    getSpecificBlankObject : getSpecificBlankObject,
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
    updateAuth : updateAuth,
//return after google authentication logout - object
    updateDeAuth : updateDeAuth
  }
}]);

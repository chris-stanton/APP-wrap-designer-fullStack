myApp.factory('FactoryFactory',['$http',function($http) {

  console.log('FactoryFactory running');
  
//object containers
  var blankFactoryObject = { list: [] };
  var updateAuth = { list: [] };
  var updateDeAuth = { list: [] };
  var getSpecificBlankObject = { list: [] };
  var colorFactoryObject = { list: [] };
  var blankColorFactoryObject = { list: [] };

//gets blanks on startup
  getBlanks();
  updateColor();
  updateColorBlank()

//gets blanks for drop down options on spacing view
  function getBlanks() {
    $http({
      method: 'GET',
      url: '/spacing/allBlanks'
    }).then(function(response) {
      console.log("getBlanks Request: ", response.data);
      blankFactoryObject.list = response.data;
    });//end of .then
  }//end of getblanks()

//gets all thread colors for wrap view selecters
  function updateColor() {
    $http({
      method: 'GET',
      url: '/color/thread'
    }).then(function(response) {
      console.log("update colors Request: ", response.data);
      colorFactoryObject.list = response.data;
    });//end of .then
  }//end of updatecolor()

//gets all blank colors for wrap view selecters
  function updateColorBlank() {
    $http({
      method: 'GET',
      url: '/color/blank'
    }).then(function(response) {
      console.log("update blank colors Request: ", response.data);
      blankColorFactoryObject.list = response.data;
    });//end of .then
  }//end of updatecolor()

//gets results from spacing view drop down menu
  function getSpecificBlank() {
    $http({
      method: 'GET',
      url: '/spacing/specificBlanks'
    }).then(function(response) {
      console.log("getSpecificBlank: ", response.data);
      getSpecificBlankObject.list = response.data;
    });//end of .then
  }//end of getblanks()

//add blank stats to Database
  function addBlanks(newBlankOrder) {
    //adds blank to database from input view inputs
    $http({
      method: 'POST',
      url: '/add/blank',
      data: newBlankOrder
    }).then(function(response){
      console.log("addBlank Request: ", response);
      self.newblankOrder = {};
    });//end of .then

//adds guides to database from input view
    $http({
      method: 'POST',
      url: '/add/guide',
      data: newBlankOrder
    }).then(function(response){
      console.log("addGuide Request: ", response);
      self.newblankOrder = {};
    });//end of .then

//adds guide measurments to database from input view
    $http({
      method: 'POST',
      url: '/add/guideMeasurement',
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
      updateColor();
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
    updateDeAuth : updateDeAuth,
    //calling function from button click on warp view - function
    updateColor : updateColor,
    //return of all thread colors from DB - object
    colorFactoryObject : colorFactoryObject,
    //return of all blank colors from DB - object
    blankColorFactoryObject: blankColorFactoryObject
  }
}]);

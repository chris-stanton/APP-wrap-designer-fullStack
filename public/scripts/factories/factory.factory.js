myApp.factory('FactoryFactory',['$http',function($http) {

  console.log('FactoryFactory running');

//--- object containers ---//
  var blankFactoryObject = { list: [] };
  var updateAuth = { list: [] };
  var updateDeAuth = { list: [] };
  var specificBlankObject = { list: [] };
  var colorFactoryObject = { list: [] };
  var blankColorFactoryObject = { list: [] };

//--- gets all data on starup ---//
  init();

  function init(){
//--- gets blanks, blank/color and thread colors on startup ---//
    getBlanks();
    updateColor();
    updateColorBlank()
  }//end of init()

//--- gets blanks for drop down options on spacing view ---//
  function getBlanks() {
    $http({
      method: 'GET',
      url: '/spacing/allBlanks'
    }).then(function(response) {
      //console.log("getBlanks Request: ", response.data);
      blankFactoryObject.list = response.data;
    });
  }//end of getblanks()

//--- gets all thread colors for wrap view selecters ---//
  function updateColor() {
    $http({
      method: 'GET',
      url: '/color/thread'
    }).then(function(response) {
      //console.log("update colors Request: ", response.data);
      colorFactoryObject.list = response.data;
    });
  }//end of updatecolor()

//--- gets all blank colors for wrap view selecters ---//
  function updateColorBlank() {
    $http({
      method: 'GET',
      url: '/color/blank'
    }).then(function(response) {
      //console.log("update blank colors Request: ", response.data);
      blankColorFactoryObject.list = response.data;
    });
  }//end of updatecolor()

//--- gets results from spacing view drop down menu ---//
  function getSpecificBlank(newBlank) {
    $http({
      method: 'GET',
      url: '/spacing/specificBlanks/' + newBlank.blankName
    }).then(function(response) {
      specificBlankObject.list = response.data;
    });
  }//end of getblanks()

//--- add blank stats to Database ---//
  function addBlanks(newBlankOrder) {
    firebase.auth().currentUser.getToken().then(function(idToken) {
      //adds blank to database from input view inputs
      $http({
        method: 'POST',
        url: '/add/blank',
        data: newBlankOrder,
        headers: {
            id_token: idToken
          }
        }).then(function(response){
          swal("Blank Database Updated!", "Good job!", "success");
          //console.log("addBlank Request: ", response);
          getBlanks();
          self.newblankOrder = {};
        }).catch(function(error) {
          console.log('error authenticating', error);
        });//end of catch
    });//end of firebase.auth()
  }//end of addBlank()

//--- adds thread color to database from input view inputs ---//
  function addThreads(newThreadOrder) {
    firebase.auth().currentUser.getToken().then(function(idToken) {
      $http({
        method: 'POST',
        url: '/add/addThread',
        data: newThreadOrder,
        headers: {
            id_token: idToken
          }
        }).then(function(response){
          //console.log("addThread Request: ", response);
          swal("Thread Database Updated!", "Good job!", "success");
          self.newThreadOrder = {};
          updateColor();
        }).catch(function(error) {
          console.log('error authenticating', error);
        });//end of catch
    });//end of firebase.auth()
  }//end of addThreads()


  //these are original button click POSTs - commented out because of ussing one DB now
  //--- adds guides to database from input view ---//
      // $http({
      //   method: 'POST',
      //   url: '/add/guide',
      //   data: newBlankOrder
      // }).then(function(response){
      //   console.log("addGuide Request: ", response);
      //   self.newblankOrder = {};
      // });
    //  }

  //--- adds guide measurments to database from input view ---//
    //   $http({
    //     method: 'POST',
    //     url: '/add/guideMeasurement',
    //     data: newBlankOrder
    //   }).then(function(response){
    //     console.log("addGuideMeasurement Request: ", response);
    //     self.newblankOrder = {};
    //     getBlanks()
    //   });
    // }//end of guides post


//--- local functions ---//
  // function login() {
  //     $location.path('/spacing_view');
  //   }
  //
  //   function wrapView() {
  //     $location.path('/wrap_view');
  //   }



//--- API ---//
  return {
//gets blank stats for spacing view
    getBlanks : getBlanks,
//gets specific blank info from select menu dropdowns for spacing view - object
    getSpecificBlank : getSpecificBlank,
//adds stats to DOM on spacing view - object
    specificBlankObject : specificBlankObject,
//blank list for spacing view select options - object
    blankFactoryObject : blankFactoryObject,
//database blank submission - function
    addBlanks : addBlanks,
//database blank submission - function
    addThreads : addThreads,
//authenticated function - function  DELETE
//     authUser : authUser,
// //deauthenticate function - function  DELETE
//     deAuthUser : deAuthUser,
// //return after google authentication login - object  DELETE
//     updateAuth : updateAuth,
// //return after google authentication logout - object  DELETE
//     updateDeAuth : updateDeAuth,
// //calling function from button click on warp view - function
    updateColor : updateColor,
//return of all thread colors from DB - object
    colorFactoryObject : colorFactoryObject,
//return of all blank colors from DB - object
    blankColorFactoryObject : blankColorFactoryObject
  }//end of return

}]);//end of myApp.factory

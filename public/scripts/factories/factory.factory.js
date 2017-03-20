myApp.factory('FactoryFactory',['$http',function($http) {
console.log('FactoryFactory running');

var blankFactory = { list: [] };



//gets blanks for drop down options from spacing vi
function getBlanks() {
    $http.get('/spacing')
      .then(function(response) {
        console.log("getBlanks Request: ", sresponse);
        self.blankFactory.list = response.data;
    })//end of .then
}//end of blanks()

//adds blank to database from input view
function addBlank(someNewTask) { //update line
    $http({
      method: 'POST', //update line
      url: '/tasks', //update line
      data: someNewTask //update line
    }).then(function(response){
      console.log("addBlank Request: ", response);
      //getBlanks();
    });
  }

  //adds thread color to database from input view
  function addThread(someNewTask) { //update line
      $http({
        method: 'POST', //update line
        url: '/tasks', //update line
        data: someNewTask //update line
      }).then(function(response){
        console.log("addThread Request: ", response);
        //getBlanks();
      });
    }


  return {
//blank list for spacing view select options
    blankFactory : blankFactory,
//database blank submission
    addBlank : addBlank,
//database blank submission
    addThread : addThread,
  }
}]);

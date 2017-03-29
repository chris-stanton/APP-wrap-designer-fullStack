myApp.controller('InputController',['FactoryFactory', '$firebaseAuth', '$location', function(FactoryFactory, $firebaseAuth, $location) {

  console.log('InputController running');
  var self = this;
  self.testMessage = 'IC WORKING STATUS';
  self.newBlankOrder = {};
  self.newThreadOrder = {};

//new blank pass-through to factory
  self.addBlanks = function(){
    FactoryFactory.addBlanks(self.newBlankOrder);
  };

//new thread pass-through to factory
  self.addThreads = function(){
    console.log(self.newThreadOrder)
    FactoryFactory.addThreads(self.newThreadOrder);
  };


  function wrapView() {
             $location.path('/input_view');
  }//wrapView()

//google authenticate bellow
  var auth = $firebaseAuth();

  self.authUser = function(){
    // console.log("auth clicked");
    auth.$signInWithPopup("google").then(function(firebaseUser) {
              wrapView();
              console.log("Firebase Authenticated as: ", firebaseUser.user.displayName);
          }).catch(function(error) {
              console.log("Authentication failed: ", error);
          });
  };//end of self.authUser()

//google de-authedicate
  self.deAuthUser = function(){
    // console.log("de-auth clicked");
    auth.$signOut().then(function() {
             console.log('Logging the user out!');
     });
  };//end of self.deAuthUser()



}]);//end of myApp.controller

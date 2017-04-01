myApp.controller('InputController',['FactoryFactory', '$firebaseAuth', '$location', function(FactoryFactory, $firebaseAuth, $location) {

  console.log('InputController running');
  var self = this;
  self.testMessage = 'IC WORKING STATUS';

//new blank pass-through to factory
  self.addBlanks = function(){
    FactoryFactory.addBlanks(self.newBlankOrder);
    self.newBlankOrder = {};
  };
//new thread pass-through to factory
  self.addThreads = function(){
    FactoryFactory.addThreads(self.newThreadOrder);
    self.newThreadOrder = {};
  };

//redirect after authentication
  function wrapView() {
    $location.path('/input_view');
  }//wrapView()

//google authenticate bellow
  var auth = $firebaseAuth();

  self.authUser = function(){
    // console.log("auth clicked");
    auth.$signInWithPopup("google").then(function(firebaseUser) {
      wrapView();
        swal("You Are Logged In!", "", "success");
        console.log("Firebase Authenticated as: ", firebaseUser.user.displayName);
        self.photo = firebaseUser.user.photoURL;
        //console.log("Firebase Authenticated as: ", firebaseUser.user.email);
    }).catch(function(error) {
        console.log("Authentication failed: ", error);
    });
  };//end of self.authUser()

//google de-authedicate
  self.deAuthUser = function(){
    // console.log("de-auth clicked");
    auth.$signOut().then(function() {
        swal("You've Logged Out!", "", "success");
        console.log('Logging the user out!');
     });
  };//end of self.deAuthUser()


}]);//end of myApp.controller()

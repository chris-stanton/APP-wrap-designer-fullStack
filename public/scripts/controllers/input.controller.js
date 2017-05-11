myApp.controller('InputController',['FactoryFactory', '$firebaseAuth', '$location', function(FactoryFactory, $firebaseAuth, $location) {

  console.log('InputController running');

  var self = this;

  self.testMessage = 'IC WORKING STATUS';

//redirect after authentication
  function wrapView() {
    $location.path('/input_view');
  }//wrapView()

//redirect after logout
  function spacingView() {
    $location.path('/spacing_view');
  }//wrapView()

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

//google authenticate global variable
  var auth = $firebaseAuth();
//notyf global variable
  var notyf = new Notyf();

//google login authentication
  self.authUser = function(){
    // console.log("auth clicked");
    auth.$signInWithPopup("google").then(function(firebaseUser) {
      wrapView();
        notyf.confirm('You Are Logged In');
        console.log("Firebase Authenticated as: ", firebaseUser.user.displayName);
          self.photo = firebaseUser.user.photoURL;
          self.email = firebaseUser.user.email;
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
        spacingView();
     });
  };//end of self.deAuthUser()


}]);//end of myApp.controller()

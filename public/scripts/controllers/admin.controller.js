myApp.controller('AdminController', ['FactoryFactory', function(FactoryFactory) {

  console.log('AdminController running');

  var self = this;

  self.message = "Admin View Works";
//all blanks object from factory
  self.adminBlankFactoryObject = FactoryFactory.adminBlankFactoryObject;
//all threads object from factory
  self.adminThreadFactoryObject = FactoryFactory.adminThreadFactoryObject;
//all admin level email addresses
  //self.adminEmailList = FactoryFactory.adminEmailFactoryObject;

  getAdminStuff();

//button cick function to get all blanks
  function getAdminStuff(){
    FactoryFactory.getAdminBlanks();
    FactoryFactory.getAdminThreads();
  }
//sends to DB after admin updated/approved
  self.updateAdmin = function(blank){
    //console.log("updating blank ID number: ", blank);
    FactoryFactory.updateAdmin(blank);
  }

//deletes garbage
  self.deleteAdmin = function(blank){
    //console.log("deleting blank ID number: ", blank);
    FactoryFactory.deleteAdmin(blank);
  }

//sends to DB after admin updated/approved
  self.updateThread = function(thread){
    //console.log("updating thread ID number: ", thread);
    FactoryFactory.updateThread(thread);
  }

//deletes the garbage
  self.deleteThread = function(thread){
    //console.log("deleting thread ID number: ", thread);
    FactoryFactory.deleteThread(thread);
  }


}]);//end of myApp.controller()

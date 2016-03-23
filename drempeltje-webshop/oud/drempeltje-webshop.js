Tasks = new Mongo.Collection('tasks');
 
if (Meteor.isClient) {
 
 
   Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

   
  angular.module('drempeltje-webshop',['angular-meteor','accounts.ui']);
 


  function onReady() {
    angular.bootstrap(document, ['drempeltje-webshop']);
  }
 
  if (Meteor.isCordova)
    angular.element(document).on('deviceready', onReady);
  else
    angular.element(document).ready(onReady);

  angular.module('drempeltje-webshop').controller('WebshopCtrl', ['$scope', '$meteor',
    function ($scope, $meteor) {
 
     
      $scope.tasks = $meteor.collection( function() {
        return Tasks.find({}, { sort: { createdAt: -1 } })
      });
 
      
      $scope.addTask = function (newTask) {
        $scope.tasks.push( {
           text: newTask,
            createdAt: new Date(),             // current time
            owner: Meteor.userId(),            // _id of logged in user
            username: Meteor.user().username }  // username of logged in user
        );
      };
 
    }]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

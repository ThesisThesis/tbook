angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, $location) {
 
  $scope.loginData = {};
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  $scope.login = function() {
    $scope.modal.show();
  };
  $scope.doLogin = function() {
    //console.log('Doing login', $scope.loginData);
    $http.post( "http://localhost/test/back/MyApi/login" , $scope.loginData)
      .success( function (reply) {
          //$scope.servPostRep = Res;
          if (reply.length > 0) {
            console.log("Login Sucess");
              //console.log($location.path());
              //$location.path("/browse");
              //console.log($location.path());
            }
          else {
            console.log("Login Failed");

          }

          console.log(reply)

        } )
        .error(function ( error ) {
          alert('error Res:' + error.message);
          //console.log('error Res:' + error.message);
        });

     

  //   $timeout(function() {
  //     $scope.closeLogin(); 
  //   }, 1000);
  };
})

.controller('LoginCtrl', function($scope, $http, $location){
$scope.loginData = {};
$scope.signin = function(){
  //console.log("naka login ko", $scope.loginData);
  $http.post("http://localhost/test/back/MyApi/login" , $scope.loginData)
  .success( function (reply) {
          //$scope.servPostRep = Res;
          if (reply.length > 0) {
            console.log("Login Sucess");
              $location.path("/app/homepage");
            }
          else {
            console.log("Login Failed");
          }


        } )
        .error(function ( error ) {
          alert('error Res:' + error.message);
          console.log('error Res:' + error.message);
        });
};
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})


.controller('AddClassCtrl', function($scope, $ionicModal, $timeout) {

  // Form data for the login modal
  //$scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/addClass.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeAddClass = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.addClass = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

  //   // Simulate a login delay. Remove this and replace with your login
  //   // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});


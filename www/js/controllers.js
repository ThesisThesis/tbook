angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

//ROOTSCOPE MEANS GLOBAL VARIABLE....
 
})

.controller('PlaylistsCtrl', function($scope, $rootScope) {
//declare rootscope to where and which controller cya gamiton...
})


.controller('loginCtrl', function($scope, $rootScope, $http, $state) {
 $rootScope.loginData = {};
 $rootScope.newAcc = {}; 
 // $rootScope.newAcc = 
 //  { 
 //    firstame: "",
 //    lastame: "",
 //    middlename: "",
 //    email: "",
 //    username: "",
 //    password: ""
 //  };
  $scope.signup = function(){
    //console.log("naka click ka"); 
    $http.post("http://localhost/FINAL/back/MyApi/register" , $rootScope.newAcc)
    .success( function (reply) {
      console.log(reply); 
        alert("You are successfully registered!");
         $rootScope.newAcc = {}; 
         $rootScope.newAcc = 
          { 
            firstame: "",
            lastame: "",
            middlename: "",
            email: "",
            username: "",
            password: ""
          };
    })
        
  };

  $scope.doLogin = function() {
  	 // $http.post("http://localhost/FINAL/back/MyApi/login" , $rootScope.loginData)
  	 // .success( function (reply) {
    //       if (reply.length > 0) {
    //         console.log("Login Sucess");
    //           $state.go('app.playlists');
    //         }
    //       else {
    //         console.log("Login Failed");
    //       }


    //     })
    //     .error(function ( error ) {
    //       alert('error Res:' + error.message);
    //       console.log('error Res:' + error.message);
    //     });
   //console.log('Doing login', $rootScope.loginData);
   $state.go('app.playlists');
     };
})

.controller('ClassCtrl', function($scope, $http){
  $scope.classData={};
  $scope.chaaaar={};
  $scope.addClass= function(){
     $http.post("http://localhost/FINAL/back/MyApi/addClass" , $scope.classData)
    .success(function (reply ){
      alert('naka add naka');
  })
  };

   $scope.getData = function getData (){
    $http.get("http://localhost/back/MyApi/testGet") // kong unsa ang url sa api. sa c.i kai /name_of_ci_proj/controller/method
                                                    // note ayaw kalimti ang "http://" sa url kai ma horot imong bohuk ug bitad
        .success( function ( response ) { // ang kining Respose(variable na ni) kai maoy gi reply sa server
          console.log( "Server Response: " + response.reply );   
          // alert( "Server Response: " + Response );   
          //$scope.servGetRep = response.reply;  //  out put nato, miggy watchout sa lettercase :)
        } )
        .error(function ( error ) {
          alert('error Res:' + error.message);
          console.log('error Res:' + error.message);
        });
  };

  // $scope.getClass = function(){
  //    $http.get("http://localhost/FINAL/back/MyApi/viewSem")
  //   .success(function (reply)){
  //     console.log(reply);
  //   }
  // }
 
    
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});

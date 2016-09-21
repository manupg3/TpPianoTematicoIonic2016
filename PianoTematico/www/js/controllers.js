angular.module('starter.controllers', [])

.controller('instrumentosCtrl', function($scope,$cordovaNativeAudio, $cordovaVibration,$ionicPlatform) {
  
$ionicPlatform.ready(function(){
       $cordovaNativeAudio
      .preloadComplex('guitarra', 'sonidos/guitarraElectrica.mp3', 1, 1)
      .then(function (msg) {
        console.log(msg);
      }, function (error) {
        console.error(error);
       }); 
         $cordovaNativeAudio
      .preloadComplex('flauta', 'sonidos/flauta.mp3', 1, 1)
      .then(function (msg) {
        console.log(msg);
      }, function (error) {
        console.error(error);
       }); 
   $cordovaNativeAudio
      .preloadComplex('arpa', 'sonidos/arpa.mp3', 1, 1)
      .then(function (msg) {
        console.log(msg);
      }, function (error) {
        console.error(error);
       }); 
     $cordovaNativeAudio
      .preloadComplex('platillos', 'sonidos/platillos.mp3', 1, 1)
      .then(function (msg) {
        console.log(msg);
      }, function (error) {
        console.error(error);
       }); 
     $cordovaNativeAudio
      .preloadComplex('violin', 'sonidos/violin.mp3', 1, 1)
      .then(function (msg) {
        console.log(msg);
      }, function (error) {
        console.error(error);
       });  
   $cordovaNativeAudio
      .preloadComplex('piano', 'sonidos/piano.mp3', 1, 1)
      .then(function (msg) {
        console.log(msg);
      }, function (error) {
        console.error(error);
       });   

});

   $scope.reproducir=function(rep){
       
    if(rep==0){

     $cordovaNativeAudio.play('guitarra');

    }
        if(rep==1){
      
     $cordovaNativeAudio.play('flauta');

    }
        if(rep==2){
     
     $cordovaNativeAudio.play('arpa');

    }
    if(rep==3){
   
     $cordovaNativeAudio.play('platillos');

    }
        if(rep==4){
  
     $cordovaNativeAudio.play('violin');

    }
        if(rep==5){
    
     $cordovaNativeAudio.play('piano');

    }


   };





})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

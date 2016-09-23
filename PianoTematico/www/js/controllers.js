angular.module('starter.controllers', [])

.controller('instrumentosCtrl', function($scope,$cordovaNativeAudio, $cordovaVibration,$ionicPlatform,$cordovaFile,$state) {
     var arrySecuencia=[];
     var arrayJSON;
    
$ionicPlatform.ready(function(){

      try{
    
          $cordovaFile.createFile(cordova.file.externalApplicationStorageDirectory, "sonidosPiano.txt", true)
      .then(function (success) {
        alert("archivo creado"+path);
      }, function (error) {
          alert("archivo no creado"+path);
      });

       $cordovaNativeAudio
      .preloadSimple('guitarra', 'sonidos/guitarraElectrica.mp3')
      .then(function (msg) {
        console.log(msg);
      }, function (error) {
        console.error(error);
       }); 
         $cordovaNativeAudio
      .preloadSimple('flauta', 'sonidos/flauta.mp3')
      .then(function (msg) {
        console.log(msg);
      }, function (error) {
        console.error(error);
       }); 
   $cordovaNativeAudio
      .preloadSimple('arpa', 'sonidos/arpa.mp3')
      .then(function (msg) {
        console.log(msg);
      }, function (error) {
        console.error(error);
       }); 
     $cordovaNativeAudio
      .preloadSimple('platillos', 'sonidos/platillos.mp3')
      .then(function (msg) {
        console.log(msg);
      }, function (error) {
        console.error(error);
       }); 
     $cordovaNativeAudio
      .preloadSimple('violin', 'sonidos/violin.mp3')
      .then(function (msg) {
        console.log(msg);
      }, function (error) {
        console.error(error);
       });  
   $cordovaNativeAudio
      .preloadSimple('piano', 'sonidos/piano.mp3')
      .then(function (msg) {
        console.log(msg);
      }, function (error) {
        console.error(error);
       });
       } catch(ex){
        alert(ex);
       }


});

   $scope.reproducir=function(rep){
         

    if(rep==0){
         arrySecuencia.push("guitarra");
     $cordovaNativeAudio.play('guitarra');
    }
        if(rep==1){

      
         arrySecuencia.push("flauta");
     $cordovaNativeAudio.play('flauta');
    

    }
        if(rep==2){
  
      
         arrySecuencia.push("arpa");
     $cordovaNativeAudio.play('arpa');
    
    }
    if(rep==3){
 
        arrySecuencia.push("platillos");
    
     $cordovaNativeAudio.play('platillos');
    
   
    }
        if(rep==4){
     arrySecuencia.push("violin");
    
     $cordovaNativeAudio.play('violin');
   
    }
        if(rep==5){
        arrySecuencia.push("piano");
    
     $cordovaNativeAudio.play('piano');

    }
      arrayJSON=JSON.stringify(arrySecuencia);
    try{
           $cordovaFile.createFile(cordova.file.externalApplicationStorageDirectory, "SecuenciaPiano.txt", true)
      .then(function (success) {
        alert("ARCHIVO CREADO");
      }, function (error) {
        // error
      });
        $cordovaFile.writeFile(cordova.file.externalApplicationStorageDirectory, "SecuenciaPiano.txt", arrayJSON,true)
      .then(function (success) {
      }, function (error) {
      });
    }
    catch(ex){
      alert(ex);
    }


   };

 $scope.repSecuencia=function(){
       var array=[];
      $cordovaFile.readAsText(cordova.file.externalApplicationStorageDirectory, "SecuenciaPiano.txt")
      .then(function (success) {
       array=JSON.parse(success);  
          $state.go('tab.secuencia',{nombres:array});   

         }, function (error) {
        alert("error");
      });
    

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

.controller('secuenciaCtrl', function($scope,$state) {
  var arrayAcount=[
    
  ];
  $scope.sonidos="SECUENCOA DE SONIDOS=";
  arrayAcount=$state.params.nombres.split(",");
   for( var i=0;i<arrayAcount.length ;i++){
      $scope.sonidos+=arrayAcount[i]+"-";
   }

});

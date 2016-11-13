(function(){
 'use strict';

   angular.module('myFirstApp',[])
   .controller('myFirstController',function($scope){
       $scope.nom ="Belizaire";
       $scope.prenom = "Gerald";
   });
   
   

})();
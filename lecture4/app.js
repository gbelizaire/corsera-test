(function(){
 'use strict';

   angular.module('myFirstApp',[])
   .controller('myFirstController',function($scope){
       $scope.nom ="Belizaire";
       $scope.prenom = "Gerald";
       console.log('Je suis la et je vis par la grace de Dieu');
   });
   
   

})();
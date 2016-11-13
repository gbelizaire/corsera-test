(function(){
 'use strict';

   angular.module('LunchCheck',[])
   .controller('LunchCheckController',LunchCheckCtrl);


   
   LunchCheckCtrl.$inject =['$scope'];
   function LunchCheckCtrl($scope){
      console.log('Je suis la ');

   }
   
   

})();
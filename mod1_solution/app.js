(function(){
 'use strict';

   angular.module('LunchCheck',[])
   .controller('LunchCheckController',LunchCheckCtrl);



   LunchCheckCtrl.$inject =['$scope'];
   function LunchCheckCtrl($scope){
       $scope.items ="Mais, du riz, pois, manioc";
       console.log('Je suis la ');
       $scope.message ="Test...";
       $scope.listItems =[];


      // function CheckIfTooMuch
      $scope.CheckIfTooMuch = function(){
       console.log($scope.items);
        $scope.message = $scope.items.split(",").length;
      }

   }
   
   

})();
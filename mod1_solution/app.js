(function(){
 'use strict';

   angular.module('LunchCheck',[])
   .controller('LunchCheckController',LunchCheckCtrl);

   LunchCheckCtrl.$inject =['$scope'];
   function LunchCheckCtrl($scope){
       $scope.items ="Mais, du riz, pois, manioc";
       $scope.message ="Test...";
       $scope.nbItems = 0;
      


      // function CheckIfTooMuch
      $scope.CheckIfTooMuch = function(){
       console.log($scope.items);
       $scope.nbItems =NombreItems();
       if($scope.nbItems<=3){
           $scope.message = "Enjoy!";
       }else{
           $scope.message = "Too much!";
       }
       
      }
      function NombreItems(){
          return $scope.items.split(",").length;
      }

   }
   
   

})();
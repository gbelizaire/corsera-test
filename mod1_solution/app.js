(function(){
 'use strict';

   angular.module('LunchCheck',[])
   .controller('LunchCheckController',LunchCheckCtrl);

   LunchCheckCtrl.$inject =['$scope'];
   function LunchCheckCtrl($scope){
       $scope.items ="Mais, du riz, pois, manioc";
       $scope.message ="Test...";
       $scope.nbItems = 0;
       $scope.CheckIfTooMuch_Click = false;
      


      // function CheckIfTooMuch
      $scope.CheckIfTooMuch = function(){
          $scope.CheckIfTooMuch_Click = true;
       console.log($scope.items);
       $scope.nbItems =NombreItems();
            if($scope.nbItems == 0){
                $scope.message = "Please enter data first";
            } else if($scope.nbItems<=3){
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
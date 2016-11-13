(function(){
 'use strict';

   angular.module('LunchCheck',[])
   .controller('LunchCheckController',LunchCheckCtrl);

   LunchCheckCtrl.$inject =['$scope'];
   function LunchCheckCtrl($scope){
       $scope.items ="Mais, du riz, pois, manioc";
       $scope.message ="Test...";
       $scope.nbItems = -1;
       $scope.CheckIfTooMuch_Click = false;

    // function CheckIfTooMuch
      $scope.CheckIfTooMuch = function(){
          $scope.CheckIfTooMuch_Click = true;
       console.log($scope.items);
         if($scope.items.length>0){ 
            $scope.nbItems =NombreItems();
            if($scope.nbItems<=3){
                $scope.message = "Enjoy!";
            }else{
                $scope.message = "Too much!";
            }
         }else{
              $scope.message = "Please enter data first"; 
               $scope.nbItems = 0;
         }  
      }
      function NombreItems(){
         var i =0;
         // return $scope.items.split(",").length;
        $scope.items.split(",").forEach(function(Item){
            if(Item.trim().length>0){
                i++;
            }
        });
        return i;
      }

   }
   
   

})();
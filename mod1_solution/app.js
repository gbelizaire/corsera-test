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
        console.log( $scope.items.split(",").length);
        $scope.message = $scope.listItems.length.toString();
        
      //  console.log( $scope.listItems.length);
     //   $scope.message = $scope.listItems.length.toString();
      }

   }
   
   

})();
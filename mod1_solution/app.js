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
       $cope.couleurBordure = -1; 
       //$scope.c

    // function CheckIfTooMuch
      $scope.CheckIfTooMuch = function(){
          $scope.CheckIfTooMuch_Click = true;
       console.log($scope.items);
         if($scope.items.length>0){ 
            $scope.nbItems =NombreItems();
            if($scope.nbItems<=3){
                $scope.message = "Enjoy!";
                $cope.couleurBordure = 1; // vert
                
            }else{
                $scope.message = "Too much!";
                $cope.couleurBordure = 1; //vert
                
            }
         }else{
              $scope.message = "Please enter data first"; 
               $scope.nbItems = 0;
                $cope.couleurBordure = 2; //rouge
         }  
      }

      /**
       *  fonction pour colorier la border du champ input
       */
        function colorierBordure(){

        } 

      /**
       *  fonction retournant le nombre d'Items' 
       * */
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
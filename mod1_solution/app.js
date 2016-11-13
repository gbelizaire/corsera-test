(function(){
 'use strict';

   angular.module('LunchCheck',[])
   .controller('LunchCheckController',LunchCheckCtrl);

   LunchCheckCtrl.$inject =['$scope'];
   function LunchCheckCtrl($scope){
       $scope.items ="";
       $scope.message ="...";
       $scope.nbItems = -1;
       $scope.CheckIfTooMuch_Click = false;
       $scope.couleurBordure = -1; 
       
    // Fonction pour reinnitialiser les variables
     $scope.reInit =function(){
          $scope.message ="...";
          $scope.nbItems = -1;
          $scope.CheckIfTooMuch_Click = false;
          $scope.couleurBordure = -1; 
     }
    // function CheckIfTooMuch
      $scope.CheckIfTooMuch = function(){
          $scope.CheckIfTooMuch_Click = true;
       console.log($scope.items);
         if($scope.items.length>0){ 
            $scope.nbItems =NombreItems();
            if($scope.nbItems<=3){
                $scope.message = "Enjoy!";
                $scope.couleurBordure = 1; // vert
                
            }else{
                $scope.message = "Too much!";
                $scope.couleurBordure = 1; //vert
                
            }
         }else{
              $scope.message = "Please enter data first"; 
               $scope.nbItems = 0;
                $scope.couleurBordure = 2; //rouge
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
           $scope.items.split(",").forEach(function(Item){
            if(Item.trim().length>0){
                i++;
            }
        });
        return i;
      }

   }
   
   

})();
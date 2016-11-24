(function(){
 'use strict';
 
  /**
   * Creation du module
   */
   angular.module('NarrowItDownApp',[])
   .controller('NarrowItDownController',NarrowItDownController)
   .service('MenuSearchService',MenuSearchService)
   .directive('foundItems',foundItems);

   /** defintion du controller NarrowItDownController */

    NarrowItDownController.$inject =['MenuSearchService','$timeout'];
    function NarrowItDownController(MenuSearchService,$timeout){
        var NarrowIt = this;
         

        NarrowIt.Init = function(){
              NarrowIt.Buttonclicked = false;
              NarrowIt.EmptyOrUndefined = false;
              NarrowIt.searchTerm="";
              NarrowIt.found = [];
        };

        NarrowIt.Init();

        /** Methode getMatchedMenuItems  */
        NarrowIt.getMatchedMenuItems = function(S){
           NarrowIt.Buttonclicked=true;
                    
                    if(typeof S == "undefined" ){ 
                        NarrowIt.EmptyOrUndefined = true;
                    }else if(S.trim().length == 0){
                       NarrowIt.EmptyOrUndefined = true;
                    }else{ 
                            NarrowIt.Buttonclicked=false;
                            MenuSearchService.getMatchedMenuItems(S).then(function(d){
                                NarrowIt.found = d;
                                NarrowIt.Buttonclicked=true;
                            },function(erreur){  console.log(erreur); }
                            );
                    }
        };

        /** Methode permettant de retirer un element de la liste */
        NarrowIt.SuppimerCetElement = function(index){
           NarrowIt.found.splice(index,1); 
        }

     } // fin du controlleur NarrowItDownController


    /** Creation du service MenuSearchService  */
      MenuSearchService.$inject=['$http'];
     function MenuSearchService($http){
        var MenuSearch = this;
       /**  declaration de la methode getMatchedMenuItems(searchTerm) */
        MenuSearch.getMatchedMenuItems= function(searchTerm){
             return $http.get('https://davids-restaurant.herokuapp.com/menu_items.json').then(function(res){
                     return res.data.menu_items.filter(function(el){ return el.description.toLowerCase().includes(searchTerm.toLowerCase());});
                   });
        };
     }

     /** Controlleur pour le directive foundItems */
      function foundItemsDirController(){
         var dirCtrl = this;
      }

     /** Creation d'un directive foundItems ' */
     function foundItems(){
         var DDO ={
             restrict:"EA",
             scope:{
                 found:"<",
                 haveBeenClicked:"<clicked",
                 remove:"&onRemove"
             },
             controller:foundItemsDirController,
             bindToController:true,
             controllerAs:"dirCtrl",
             templateUrl:"foundItems.html"
            };

         return DDO;
     } // fin de la directive foundItems 
})();
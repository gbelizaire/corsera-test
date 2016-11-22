(function(){
 'use strict';
 /**
  *  Je dois avoir 2 controlleurs, un pour gerer le 'tobuy list'
     et un autre pour gerer
  */
   angular.module('ShoppingListCheckOff',[])
   .controller('ToBuyController',ToBuyController )
   .controller('AlreadyBoughtController',AlreadyBoughtController)
   .service('ShoppingListCheckOffService',ShoppingListCheckOffService);
   

  
   /**
    *  Creation du premier controlleur
    */
   ToBuyController.$inject= ['ShoppingListCheckOffService'];
   function ToBuyController (ShoppingListCheckOffService){
    var toBuy = this;
        toBuy.ListeArticles = ShoppingListCheckOffService.ListItemsToBuy();
       toBuy.message = "tout est ok";
    /** Fonction BuyThisItem */
     toBuy.BuyThisItem = function(index){
        ShoppingListCheckOffService.BuyThisItem(index);
     }

   }

   /**
    *  Creation du sceond controlleur
    */  
    AlreadyBoughtController.$inject= ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
       var alreadyBought = this;
       alreadyBought.ListeArticlesAchetes =ShoppingListCheckOffService.ListItemsBought();
    }


   /**
    * Creation d'' une service , un singleton
    */
    function ShoppingListCheckOffService(){
       var Shop = this;
       Shop.tobuyItems =  [{name: "Chemise(s)", quantity: 10} ,
                              {name: "T-Shirt(s)", quantity: 10 },
                              {name: "Pantalon(s)", quantity: 10 },
                              {name: "Anneaux", quantity: 10 },
                              {name: "Pair(s) de Chaussure", quantity: 10 }
                              ];

       Shop.boughtItems = [];  

       /** Fonction AddToBoughtItems */
       Shop.AddToBoughtItems = function(item , quantity){
         var item ={
             name:item,
             quantity :quantity
         };
          Shop.tobuyItems.push(item); 
       } ;
     
       /** fonction ListItemsToBuy */
       Shop.ListItemsToBuy  = function(){
           return Shop.tobuyItems;
       };                

        /** fonction ListItemsToBuy */
       Shop.ListItemsBought  = function(){
           return Shop.boughtItems;
       };  

       /** fonction retournant l"item a un index donnee */

       Shop.getItemAtIndex= function(index){
          return Shop.tobuyItems[index];
       }

       /** fonction  BuyThisItem */
       Shop.BuyThisItem = function(ItemIndex){
           Shop.tobuyItems = Shop.tobuyItems.splice(ItemIndex,1);
           // Ajouter dans boughtItems
           Shop.boughtItems.push(Shop.getItemAtIndex(ItemIndex));
      }

    }



})();
(function(){
 'use strict';
 /**
  *  Je dois avoir 2 controlleurs, un pour gerer le 'tobuy list'
     et un autre pour gerer
  */
   angular.module('ShoppingListCheckOff',[])
   .controller('ToBuyController ',ToBuyController )
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

   }

   /**
    *  Creation du sceond controlleur
    */  
    AlreadyBoughtController.$inject= ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
       var alreadyBought = this;
       alreadyBought.ListeArticles =[];
    }


   /**
    * Creation d'' une service , un singleton
    */
    function ShoppingListCheckOffService(){
       var Shop = this;
       Shop.tobuyItems =  [{name: "Chemise", quantity: 10} ,
                              {name: "T-Shirt", quantity: 10 },
                              {name: "Pantalon", quantity: 10 },
                              {name: "Anneaux", quantity: 10 },
                              {name: "Chaussure", quantity: 10 }
                              ];

       Shop.boughtItems = [];  

       /** Fonction AddToBoughtItems */
       Shop.AddToBoughtItems = function(item , quantity){
         var item ={
             name:item,
             quantity :quantity
         };
          Shop.tobuyItems.push(item); 
       } 

       /** fonction ListItemsToBuy */
       Shop.ListItemsToBuy  = function(){
           return Shop.tobuyItems;
       }                  


    }
})();
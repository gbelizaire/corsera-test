(function(){
     angular.module('MenuApp')
     .controller('itemsController',itemsController);

  itemsController.$inject=['items_'];
   function itemsController(items_){
       var itemsCtrl = this;
       itemsCtrl.items = items_.data;
    
     console.log("Items :",items_.data);
   }
})();
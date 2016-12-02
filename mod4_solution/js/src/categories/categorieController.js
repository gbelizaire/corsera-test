(function(){
     angular.module('MenuApp')
     .controller('categoriesController',categoriesController);

     /** definction de la fonction categoriesController */
     categoriesController.$inject=['categories'];
     function categoriesController(categories){
         var catCtrl = this;
         catCtrl.categories = categories.data;
         console.log(catCtrl.categories);
     }

})();
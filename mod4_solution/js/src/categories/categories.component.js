(function(){
	'use strict';
  angular.module('MenuApp')
	.component('categories',
	           {
				   templateUrl:'js/src/categories/categoriesComponent.html',
				   bindings:{
					   list:'<'
				   }
				   
			   });
})();
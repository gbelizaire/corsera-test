(function(){
	'use strict';
	angular.module('MenuApp')
	.component('items',
	           {
				   templateUrl:'js/src/items/itemsComponent.html',
				   bindings:{
					   itemscategorie:'<'
				   }
			   });
})();
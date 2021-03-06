(function(){
	angular.module('data')
	.service('MenuDataService',MenuDataService);
	
	
	MenuDataService.$inject =['$http'];
	function MenuDataService($http){
	  var menudata = this;
		menudata.getAllCategories = function(){
			return $http.get('https://davids-restaurant.herokuapp.com/categories.json');
		};
		
		menudata.getItemsForCategory= function(categoryShortName){
			return $http({
			   method:'GET',
			   url:'https://davids-restaurant.herokuapp.com/menu_items.json',
               params:{
				 category:categoryShortName  
			   }			   
			});
			
		};
		
	}
})();
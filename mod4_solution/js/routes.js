(function(){
   'use strict';
   
   angular.module('MenuApp')
    .config(RoutesConfig);

	RoutesConfig.$inject =['$stateProvider','$urlRouterProvider'];
	function RoutesConfig($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		
		$stateProvider
		.state('home',{
			url:'/',
			templateUrl:'vues/home.html'
		})

		.state('categories',{
			url:'/categories',
			templateUrl:'vues/categories.html',
			controller:"categoriesController as catCtrl",
			resolve:{
				categories:['MenuDataService',function(MenuDataService){
					return MenuDataService.getAllCategories();
				}]
			}
		})

		.state('items',{
			url:'/items/{categorie_shortname}',
			templateUrl:'vues/items.html',
			controller:'itemsController as itemsCtrl',
			resolve:{
				items_ :['$stateParams','MenuDataService',function($stateParams,MenuDataService){
					return MenuDataService.getItemsForCategory($stateParams.categorie_shortname);
				}]
			}
		 });
	}
	
})();

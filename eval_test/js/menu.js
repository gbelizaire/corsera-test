(function(){

        angular.module('menfp_evaluation')
        .config(RouteConfig);

        /** Creation de la configuration */
        RouteConfig.$inject=['$stateProvider','$urlRouterProvider'];
        function RouteConfig($stateProvider,$urlRouterProvider){
              
               $urlRouterProvider.otherwise('/login');
               $stateProvider
               .state('departement',{
                   url:'/departement',
                   templateUrl:'vues/departements.html'
               })
               .state('login',{
                   url:'/login',
                   templateUrl:'vues/login.html'
               });

        }
})();
(function(){
 
      angular.module('menfp_evaluation')
      .factory('menfp_evaluation_service',menfp_evaluation);


      /** Creation d'un service menfp_evaluation' */

      function menfp_evaluation(){
             var menfp_service = {};
             var lesDepts =[
                                {code:'01',libelle:'Ouest'},
                                {code:'02',libelle:'Sud-est'},
                                {code:'03',libelle:'Nord'},
                                {code:'04',libelle:'Nord-est'},
                                {code:'05',libelle:'Artibonite'},
                                {code:'06',libelle:'Centre'},
                                {code:'07',libelle:'Sud'},
                                {code:'08',libelle:'Grand-Anse'},
                                {code:'10',libelle:'Les Nippes'},
                                {code:'09',libelle:'Nord-Ouest'}
                         ];
             menfp_service.getAllDept = function(){ return lesDepts;}
          
          return menfp_service;
      }

})();
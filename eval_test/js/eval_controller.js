(function(){
    angular.module('menfp_evaluation')
     .controller('eval_controller',eval_controller);

    eval_controller.$inject = ['menfp_evaluation_service'];
    function eval_controller(menfp_evaluation_service){
        var evalCtrl = this;
        evalCtrl.message ="ceci est un test";
        evalCtrl.lesDepts = menfp_evaluation_service.getAllDept();
       
       /** fonction permettant de selectionner un departement */
       evalCtrl.selectionner = function(r){
            console.log(r.code +"    "+r.libelle);
       };



    };

})();
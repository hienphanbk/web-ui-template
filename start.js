/**
 * Created by HienPT9 on 1/3/2017.
 */
/**
 * Created by HienPT9 on 1/3/2017.
 */
(function(){
    'use strict';
    angular.module('app').run(start);
    /**
     * Run application
     */
    start.$inject = ['$state','$rootScope','setting'];


    function start($state,$rootScope,setting) {
        //Listen path change
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            console.log("change path from: "+current+" to: "+next);
        });

        console.log("| [OK] Application ready.");
        console.log("+------------------------------------------------+");

        //Go to login page.
        $state.go(setting.states.LOGIN.name);
    }
})();
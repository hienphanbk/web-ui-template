/**
 * Created by HienPT9 on 1/3/2017.
 */
(function(){
    'use strict';
    angular.module('app').config(config);

    /**
     * Config application
     */
    config.$inject = ['$stateProvider','$compileProvider', 'setting'];
    function config($stateProvider, $compileProvider, setting) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension|itms-services):/);

        for (var i=0; i<setting.list_states.length; i++) {
            var state = setting.list_states[i];
            $stateProvider
                .state(state.name, {
                    url: state.url,
                    views: {
                        "view": {
                            templateUrl: state.view
                        }
                    }
                });
            console.log("| state "+state.name+" configured.");
        }

        //$stateProvider
        //    .state(setting.states.AUTHENTICATED, {
        //        url: "/authenticated",
        //        views: {
        //            "view": {
        //                templateUrl: "app/features/content.html"
        //            }
        //        }
        //    })
        //    .state(setting.states.LOGIN, {
        //        url: "/login",
        //        views: {
        //            "view": {
        //                templateUrl: "app/login/login.html"
        //            }
        //        }
        //    });

        console.log("| [OK] Application Configured.");
    }
})();
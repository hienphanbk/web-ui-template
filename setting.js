/**
 * Created by HienPT9 on 1/3/2017.
 */
/**
 * Created by HienPT9 on 1/3/2017.
 */
(function(){
    'use strict';

    var states = {
        LOGIN: {
            name: 'LOGIN',
            url:'/login',
            view:'app/login/login.html'
        },
        AUTHENTICATED: {
            name: 'AUTHENTICATED',
            url:'/authenticated',
            view:'app/features/content.html'
        }
    };

    angular.module('app').constant('setting', {
        states: states,
        list_states: [states.LOGIN, states.AUTHENTICATED]
    });
    console.log("| [OK] All constant parameters have been set.")
})();
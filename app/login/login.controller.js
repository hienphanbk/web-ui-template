/**
 * Created by HienPT9 on 1/3/2017.
 */
(function () {
    'use strict';
    angular.module("app").controller('LoginController', LoginController);

    LoginController.$inject = ['LoginService', '$state','setting'];

    function LoginController(LoginService, $state, setting) {
        var vm = this;
        vm.username = undefined;
        vm.password = undefined;
        console.log("Entering login page ...");

        vm.login = function(username, password) {
            var onSuccess = function(data) {
                console.log("Login success. Go to authenticated page.");
                $state.go(setting.states.AUTHENTICATED.name);
            };

            var onError = function(data) {
                console.log("onError");
            };

            LoginService.login(username, password, onSuccess, onError);
        }
    }
})();

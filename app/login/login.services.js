/**
 * Created by HienPT9 on 1/3/2017.
 */
(function () {
    'use strict';
    angular.module('app').service('LoginService', LoginService);

    LoginService.$inject = ['HttpService'];

    function LoginService(HttpService) {
        var vm = this;

        vm.login = function(username, password, onSuccess, onError) {
            //This is a fake function that need to be replaced.
            if (username == 'hienphanbk' && password == '123456a@') {
                var data = {username:"hienphanbk", roles:"admin"};
                onSuccess(data);
            } else {
                var data = "Invalid user or password";
                onError(data);
            }
        };
    }
})();
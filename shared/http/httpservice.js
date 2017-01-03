(function () {
    'use strict';
    angular.module('app').service('HttpService', HttpService);

    HttpService.$inject = ['$http'];

    function HttpService($http) {
        var vm = this;

        /**
         * Call get service
         * @param url
         * @param onSuccess
         * @param onError
         */
        vm.get = function (url, onSuccess, onError) {
            console.log("call "+url);
            $http(
                {
                    method: 'GET',
                    url: url
                }
            ).then(function (response) {
                    console.log("on success");
                    onSuccess(response);
                })
                .catch(function (errorResp) {
                    console.log("on error");
                    onError(errorResp);
                });
        };

        /**
         * Call Post service with data json data
         * @param url
         * @param data
         * @param onSuccess
         * @param onError
         */
        vm.post = function (url, data, onSuccess, onError) {
            console.log("call "+url);
            $http(
                {
                    method: 'POST',
                    url: url,
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        'Accept': '*'
                    },
                    data: data
                }
            ).then(function (response) {
                    console.log("on success");
                    onSuccess(response);
                })
                .catch(function (errorResp) {
                    console.log("on error");
                    onError(errorResp);
                });
        };
    }
})();

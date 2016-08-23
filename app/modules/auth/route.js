'use strict';
(function() {

    angular
        .module('auth')
        .config(['$stateProvider', stateProvider]);

    function stateProvider($stateProvider) {

        $stateProvider
            .state('login', {
                url: '/login',
                views: {
                    '@': {
                        templateUrl: 'app/modules/auth/views/login.html',
                        controller: 'loginController'
                    }
                }
            })
            .state('logOut', {
                url: '/logOut',
                views: {
                    '@': {
                        templateUrl: '',
                        controller: ['$scope', '$state', 'localStorageServiceWrapper', function($scope, $state, localStorageServiceWrapper){

                            localStorageServiceWrapper.clearAll();
                            $state.transitionTo('login');
                        }]
                    }
                }
            });
    }

})();

'use strict';

(function() {

    // Declare app level module
    angular
        .module('angularClientApp', [
            'ui.router',
            'ngAnimate',
            'angularLazyImg',
            'ui.bootstrap',
            'localStorage.service',
            'config',
            'auth',
            'base',
            'dashboard',
            'user'

        ])
        .factory('apiInterceptor', ['localStorageServiceWrapper', '$location', apiInterceptor])
        .config(['$urlRouterProvider', '$locationProvider', '$httpProvider', initializeConfigurationPhase])
        .run(['$rootScope', '$state', 'localStorageServiceWrapper', 'dashboardService', checkUserLoggedIn]);

    function initializeConfigurationPhase($urlRouterProvider, $locationProvider, $httpProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        $urlRouterProvider.otherwise('/login');
        $httpProvider.interceptors.push('apiInterceptor');
    }


    function apiInterceptor(localStorageServiceWrapper, $location) {
      var service = {};

      service.request = function(config) {
            var currentUser = localStorageServiceWrapper.get('currentUser');
            if (currentUser != '' && currentUser != undefined && currentUser != null) {
                config.headers.authorization = currentUser;
            }
            else{
                $location.path('/login');
            }
            return config;
        };
      return service;
    }

    function checkUserLoggedIn($rootScope, $state, localStorageServiceWrapper, dashboardService) {
        $rootScope.$on('$stateChangeStart',
            function (event, toState) {
                isExist = false,
                $rootScope.currentState = $state;

                var currentUser = localStorageServiceWrapper.get('currentUser');
                var email = (currentUser && currentUser.email != '') ? currentUser.email : null;

                dashboardService.getEmpList().map(function(emp) {
                   if(!isExist) {
                        if(emp.email == email) {
                            isExist = true;
                        }
                    }
                });

                if(isExist && toState.name == 'login' ){
                    $state.transitionTo('base.dashboard');
                    event.preventDefault();
                }

            }
        );
    }

})();

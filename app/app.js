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
        .run(['$rootScope', '$state', 'localStorageServiceWrapper', 'dashboardService', checkAuthenticateUrl]);

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
            if (currentUser != '' || currentUser != undefined || currentUser != null) {
                config.headers.authorization = currentUser;
                //$state.go($state.current, {}, {reload: true});
            }
            else{
                console.log("hi....");
              $location.path('/login');
            }
            return config;
        };

      service.responseError = function(response) {
         if (response.status === 401) {
           $rootScope.$broadcast('unauthorized');
          }
         return response;
      };
      return service;
    }


    function checkAuthenticateUrl($rootScope, $state, localStorageServiceWrapper, dashboardService) {
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {
                isExist = false,
                $rootScope.currentState = $state;
                var currentUser = localStorageServiceWrapper.get('currentUser');
                var email = (currentUser && currentUser.email != '') ? currentUser.email : null;
                toState = (toState.name != '' || typeof toState.name != 'undefined') ? toState.name : null,
                fromState = (fromState.name != '' || typeof fromState.name != 'undefined') ? fromState.name : null;
                dashboardService.getEmpList().map(function(emp) {
                   if(!isExist) {
                        if(emp.email == email) {
                            isExist = true;
                        }
                    }
                });

                if(isExist) {
                    if(toState == 'login' && fromState != null) {
                        $state.transitionTo(fromState);
                    }
                } else if( toState != 'login' && !isExist) {
                    $state.transitionTo( 'login' );
                    event.preventDefault();
                }
                if(currentUser) {
                    $rootScope.email = currentUser.email;
                }
            }
        );
    }

})();

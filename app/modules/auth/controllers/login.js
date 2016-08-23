'use strict';

(function() {

    angular
        .module('auth')
        .controller('loginController', ['$scope', '$state', '$location' ,'loginService', loginController]);

    function loginController($scope, $state, $location, loginService) {
      $scope.submit = function(){
          var validUser = loginService.validateUser($scope.email, $scope.password);
          if(validUser){
            loginService.setCredentials($scope.email, $scope.password);
           // $location.url('dashboard');
            $state.go('base.dashboard')
          }
          else{
            $scope.error = 'Invalid Username/Password';
          }
      };


    }

})();

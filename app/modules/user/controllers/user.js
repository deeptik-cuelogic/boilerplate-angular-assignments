'use strict';
(function() {

    angular
        .module('user')
        .controller('userController', ['$scope', 'dashboardService', '$location', userController]);

    function userController($scope, dashboardService, $location) {
        $scope.setTitle = 'Add user';
        $scope.empList = dashboardService.getEmpList();
        $scope.addNew = function(){
              $scope.empList.push({
                  'id': $scope.emp_list + 1,
                  'name': $scope.name,
                  'email': $scope.email,
                  'age': $scope.age,
                  'gender': $scope.gender
              });
          $location.path('/dashboard')
      };


    }

})();

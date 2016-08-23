'use strict';
(function() {

    angular
        .module('user')
        .controller('userController', ['$scope', 'dashboardService', '$location', '$stateParams', 'uniqueEmailService',userController]);

    function userController($scope, dashboardService, $location, $stateParams, uniqueEmailService) {
        $scope.setTitle = 'Add user';
        $scope.empList = dashboardService.getEmpList();
        $scope.editForm = false;

        if($stateParams.id != undefined){
          $scope.emp = {};

          var id = $stateParams.id
          $scope.setTitle = 'Edit user';
          $scope.editForm = true;

          $scope.empList.map(function(obj) {
            if(obj.id == id){
              $scope.emp.id = obj.id;
              $scope.emp.name = obj.name;
              $scope.emp.email = obj.email;
              $scope.emp.age = obj.age;
              $scope.emp.gender = obj.gender;
            }
          });
        }

        $scope.addNew = function(){
              $scope.empList.push({
                  'id': $scope.empList + 1,
                  'name': $scope.emp.name,
                  'email': $scope.emp.email,
                  'age': $scope.emp.age,
                  'gender': $scope.emp.gender
              });
          $location.path('/dashboard')
        };

        $scope.updateEmp = function(id){
          for (i in $scope.empList) {
            if ($scope.empList[i].id == id){
              $scope.empList[i].name = $scope.emp.name;
              $scope.empList[i].email = $scope.emp.email;
              $scope.empList[i].age = $scope.emp.age;
              $scope.empList[i].gender = $scope.emp.gender;
            }
          }
          console.log($scope.empList);
          $location.path('/dashboard');
        };

    }

})();

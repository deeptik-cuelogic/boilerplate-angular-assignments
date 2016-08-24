'use strict';
(function() {

    angular
        .module('user')
        .controller('userController', ['$scope', 'dashboardService', '$location', '$stateParams', 'uniqueEmailService', 'userService', '$state', '$timeout', userController]);

    function userController($scope, dashboardService, $location, $stateParams, uniqueEmailService, userService, $state, $timeout) {
        // $scope.setTitle = 'Add user';
        // $scope.empList = dashboardService.getEmpList();
        // $scope.editForm = false;

        // if($stateParams.id != undefined){
        //   $scope.emp = {};

        //   var id = $stateParams.id
        //   $scope.setTitle = 'Edit user';
        //   $scope.editForm = true;

        //   $scope.empList.map(function(obj) {
        //     if(obj.id == id){
        //       $scope.emp.id = obj.id;
        //       $scope.emp.name = obj.name;
        //       $scope.emp.email = obj.email;
        //       $scope.emp.age = obj.age;
        //       $scope.emp.gender = obj.gender;
        //     }
        //   });
        // }

        // $scope.addNew = function(){
        //       $scope.empList.push({
        //           'id': $scope.empList + 1,
        //           'name': $scope.emp.name,
        //           'email': $scope.emp.email,
        //           'age': $scope.emp.age,
        //           'gender': $scope.emp.gender
        //       });
        //   $location.path('/dashboard')
        // };

        // $scope.updateEmp = function(id){
        //   for (i in $scope.empList) {
        //     if ($scope.empList[i].id == id){
        //       $scope.empList[i].name = $scope.emp.name;
        //       $scope.empList[i].email = $scope.emp.email;
        //       $scope.empList[i].age = $scope.emp.age;
        //       $scope.empList[i].gender = $scope.emp.gender;
        //     }
        //   }
        //   console.log($scope.empList);
        //   $location.path('/dashboard');
        // };

        $scope.editForm = $stateParams.id != undefined || $stateParams.id != null
        var empList = dashboardService.getEmpList();
        $scope.emp = {};

        if($scope.editForm){
          $scope.setTitle = 'Edit User';
          $scope.submitBtnTxt = 'Update';
          id = $stateParams.id;
          empList.map(function(obj) {
            if(obj.id == id){
              $scope.emp.id = obj.id;
              $scope.emp.name = obj.name;
              $scope.emp.email = obj.email;
              $scope.emp.age = obj.age;
              $scope.emp.gender = obj.gender;
            }
          });

        }else{
          $scope.setTitle = 'Add user';
          $scope.submitBtnTxt = 'Save';
        }
        $scope.userDetail = function() {
            var emp =  {
                'name': $scope.emp.name,
                'email': $scope.emp.email,
                'age': $scope.emp.age,
                'gender': $scope.emp.gender
            };

            $timeout(function() {
                if($scope.editForm) {
                    emp['id'] = $scope.emp.id;
                    userService.updateUser($scope.emp.id, emp);
                } else {
                    emp['id'] = dashboardService.getEmpList().length + 1;
                   userService.addUser(emp);
                }
                $state.transitionTo('base.dashboard');
            }, 3000);
        };


    }

})();

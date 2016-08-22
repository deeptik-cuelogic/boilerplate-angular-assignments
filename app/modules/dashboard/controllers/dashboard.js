(function() {

    'use strict';

    angular
        .module('dashboard')
        .controller('dashboardController', ['$scope', '$state', 'dashboardService', 'localStorageServiceWrapper', dashboardController]);

    function dashboardController($scope, $state, dashboardService, localStorageServiceWrapper) {

        $scope.blackSpinner = 'resource/images/blackSpinner.gif';
        $scope.sort_reverse  = false
        $scope.sort_type = 'name';

        $scope.empList = dashboardService.getEmpList();
        var userName = '';
        $scope.empList.map(function(obj) {
          if(obj.email == localStorageServiceWrapper.get('currentUser').email)
             userName = obj.name;
        });

        $scope.name = userName;

        $scope.userList = function() {
            $scope.getUsers = dashboardService.getUserList().userDetails;
            $scope.subTabMenus = [{
                'tabMenu': 'All',
                'action': 'dashboard'
            }, {
                'tabMenu': 'Proposals',
                'action': 'proposals'
            }]
        }

        $scope.removeRow = function(name){
          var index = -1;
          var comArr = eval( $scope.empList );
          for( var i = 0; i < comArr.length; i++ ) {
            if( comArr[i].name === name ) {
              index = i;
              break;
            }
          }
          if( index === -1 ) {
            alert( "Something gone wrong" );
          }
          $scope.empList.splice( index, 1 );
        };
    }

})();

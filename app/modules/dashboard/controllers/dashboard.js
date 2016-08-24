(function() {

    'use strict';

    angular
        .module('dashboard')
        .controller('dashboardController', ['$scope', '$state', 'dashboardService', 'localStorageServiceWrapper', '$timeout', dashboardController]);

    function dashboardController($scope, $state, dashboardService, localStorageServiceWrapper, $timeout) {

        $scope.blackSpinner = 'resource/images/blackSpinner.gif';
        $scope.sort_reverse  = false
        $scope.sort_type = 'name';
        $scope.deleteBtnTxt = 'Delete'
        $scope.isRowSelected = false;
        var ids = [];
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

        $scope.removeRow = function(id){
          var index = -1;
          var comArr = eval( $scope.empList );
          for( var i = 0; i < comArr.length; i++ ) {
            if( comArr[i].id === id ) {
              index = i;
              break;
            }
          }
          if( index === -1 ) {
            alert( "Something gone wrong" );
          }
          $scope.empList.splice( index, 1 );
        };

        $scope.editUser = function(id) {
          console.log("inside edit user"+id);
            if(id != null) {
                $state.transitionTo('base.edit_user', {'id': id});
            }
        }

        $scope.changeColor = function(row_id){
          if(this.isGreenBg) {
                this.isGreenBg = !this.isGreenBg;
                ids.pop(row_id);
            } else {
                this.isGreenBg = !this.isGreenBg;
                ids.push(row_id);
            }
            console.log(ids);
              $scope.isRowSelected = ids.length > 0
          };

        $scope.deleteSelectedRows = function() {
            if(ids.length > 0) {
                $timeout(function() {
                    for( var i = 0; i < ids.length; i++ ) {
                        $scope.removeRow(ids[i]);
                    }
                    $scope.isRowSelected = false;
                    $scope.deleteBtnTxt = 'Delete';
                    $scope.disabled = false;
                }, 2000);
            }
        }
    }

})();

(function() {
    'use strict';

    angular
        .module('user')
        .config(['$stateProvider', stateProvider])

    function stateProvider($stateProvider) {

        $stateProvider
            .state('add_emp', {
                url: '/add_user',
                templateUrl: 'app/modules/user/views/add_user.html',
                controller: 'userController'
            });
    }

})();

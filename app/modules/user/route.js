(function() {
    'use strict';

    angular
        .module('user')
        .config(['$stateProvider', stateProvider])

    function stateProvider($stateProvider) {

        $stateProvider
            .state('base.dashboard.user', {
                url: '/add/user',
                views: {
                    'content': {
                        templateUrl: 'app/modules/user/views/add_user.html',
                        controller: 'userController'
                    }
                }
            })
            .state('base.dashboard.edit_user', {
                url: '/edit/user?id',
                views: {
                    'edit_content': {
                        templateUrl: 'app/modules/user/views/add_user.html',
                        controller: 'userController'
                    },
                }
            });
    }

})();
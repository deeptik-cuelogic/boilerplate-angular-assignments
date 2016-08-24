angular.module('user.service', ['dashboard.service'])
    .factory('userService', ['$http', 'dashboardService', userService])

function userService($http, dashboardService) {
    var service = {};

    service.addUser = addUser;
    service.updateUser = updateUser;

    return service;

    function addUser(user) {
        if(user != null) {
            var empList = dashboardService.getEmpList();
            empList.push(user);
            console.log(empList);
            return empList;
        }
        return false;
    }


    function updateUser(id, emp) {
        var empList = dashboardService.getEmpList();
        if(id != null && emp != null) {
            empList.splice(id, 1);
            empList.push(emp);
            return empList;
        }
        return false;
    }
};

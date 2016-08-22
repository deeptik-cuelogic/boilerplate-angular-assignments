angular.module('dashboard.service', [])
    .factory('dashboardService', ['$http', dashboardService]);



function dashboardService($http) {
    var service = {};

    service.getUserList = getUserList;
    service.getEmpList = getEmpList;
    return service;

    function getUserList() {
        var userList = {};

        return userList = {
            "userDetails": [{
                "id": 1,
                "name": "Prasanna",
                "department": "Developer",
                "salary": 1000,
                "image": "http://cache4.asset-cache.net/fk/176794537.jpg?v=1&c=IWSAsset&k=1&f=2&d=4575EEE0F3AA8377CD9D0036C287379E479DFF9E20496F56146E8D247CE15381"
            },{
                "id": 1,
                "name": "Ayush",
                "department": "I.T",
                "salary": 1000,
                "image": "resource/images/IMG_3050.JPG"
            }, {
                "id": 2,
                "name": "Bobo",
                "department": "Project manager",
                "salary": 100000,
                "image": "resource/images/textures-selection-nice-high-resolution_2165080.jpg"
            }, {
                "id": 3,
                "name": "Baby",
                "department": "developer",
                "salary": 2000,
                "image": "resource/images/404.png"
            }, {
                "id": 4,
                "name": "Nilesh",
                "department": "Designer",
                "salary": 5500,
                "image": "resource/images/6309_1280x800.jpg"
            }, {
                "id": 5,
                "name": "amol",
                "department": "Manager",
                "salary": 100500,
                "image": "resource/images/brand-avatar.jpg"
            }, {
                "id": 6,
                "name": "ganesh",
                "department": "Accountant",
                "salary": 1000,
                "image": "resource/images/ipgeo.png"
            }]
        }
    }

    function getEmpList(){
        var empList = {};
        return empList = [{
                "id": 1,
                "name": "Prasanna",
                "email": 'abc@yopmail.com',
                "age": 29,
                "gender": 'Male'
            },{
                "id": 2,
                "name": "Ayush",
                "email": 'pqr@yopmail.com',
                "age": 30,
                "gender": 'Male'
            }, {
                "id": 3,
                "name": "Bobo",
                "email": 'pqr@yopmail.com',
                "age": 32,
                "gender": 'Male'
            }, {
                "id": 4,
                "name": "Baby",
                "email": 'pqr@yopmail.com',
                "age": 22,
                "gender": 'Female'
            }, {
                "id": 5,
                "name": "Nilesh",
                "email": 'pqr@yopmail.com',
                "age": 30,
                "gender": 'Male'
            }, {
                "id": 6,
                "name": "amol",
                "email": 'pqr@yopmail.com',
                "age": 32,
                "gender": 'Male'
            }, {
                "id": 7,
                "name": "ganesh",
                "email": 'pqr@yopmail.com',
                "age": 22,
                "gender": 'Male'
            }]
    }
    //END
};

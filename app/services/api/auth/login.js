angular.module('auth.service', ['localStorage.service'])
    .factory('credentialService', credentialService)
    .factory('loginService', ['$http', '$rootScope', 'localStorageServiceWrapper', 'credentialService', loginService]);


function loginService($http, $rootScope, localStorageServiceWrapper, credentialService) {
    var service = {};

    service.setCredentials = function (email, password) {
            $rootScope.currentUser = {
                    email: email
            };
            $http.defaults.headers.common['Authorization'] = 'Basic ' + email;
            localStorageServiceWrapper.set('currentUser', $rootScope.currentUser);
        };

    service.validateUser = function(email, password){

        var b = credentialService.getEmpCredential().credential;
        let valid_user = false;
        for(let i = 0; i < b.length; i++){
          console.log(b[i].email + b[i].password)
          if(b[i].email == email && b[i].password == password){
            valid_user = true;
            break;
          }
        }
        return valid_user;
     };

    return service;
};

function credentialService(){
     var service = {};

     service.getEmpCredential = getEmpCredential;

     function getEmpCredential() {
        var credential = {};
        return credential = {
            "credential": [{
                email: 'abc@yopmail.com',
                password: 'test123',
                id: 1
              },{
                email: 'pqr@yopmail.com',
                password: 'test12234',
                id: 2
            },{
                email: 'n@yopmail.com',
                password: '1223456789',
                id: 3
            },{
                email: 'm@yopmail.com',
                password: '12345',
                id: 4
            }
           ]
        }
    }
     return service;
};
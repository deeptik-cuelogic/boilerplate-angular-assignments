angular.module('confirmDelete.directive', ['dashboard.service'])
    .directive("confirmDelete", confirmDelete)
    .directive('uniqueEmail', ['uniqueEmailService', uniqueEmail])
    .directive('saveUserBtn', saveUserBtn)
    .directive('confirmSelectedRowsDelete', confirmSelectedRowsDelete);

function confirmDelete() {
    return {
        restrict: "A",
        link: function(scope, element, attrs){
                element.bind('click', function(e){
                  var message = attrs.confirmDelete;
                  if(message && !confirm(message)){
                    e.stopImmediatePropagation();
                    e.preventDefault();
                  }
                });
            }
      };
};

function uniqueEmail(uniqueEmailService){
  return{
    restrict: "A",
    require: 'ngModel',
    link: function (scope, element, attrs, ngModel) {
            // element.bind('blur', function (e) {
            //     if (!ngModel || !element.val()) return;
            //     var keyProperty = scope.$eval(attrs.uniqueEmail);
            //     var currentValue = element.val();
            //     var unique = uniqueEmailService.checkEmail(currentValue);
            //       ngModel.$setValidity('unique', unique);
            //             //ngModel.$setValidity('unique', true);
            // });
        }
  };
}

function saveUserBtn(){
  return {
        restrict: "A",
        link: function (scope, element, attrs) {
            element.bind('click',function (event) {
              var submitAction = attrs.userAction;
                if(scope.addForm.$valid) {
                    scope.submitBtnTxt = 'Saving......';
                    scope.disabled = true;
                    scope.$eval(submitAction);
                }
            });
        }
    };
}

function confirmSelectedRowsDelete() {
    return {
        restrict: "A",
        link: function(scope, element, attrs){
                element.bind('click', function(e){
                  var message = attrs.confirmSelectedRowsDelete;
                  var deleteAction = attrs.deleteAction;
                  if(message && confirm(message)){
                    scope.deleteBtnTxt = 'Deleting......';
                    scope.disabled = true;
                    scope.$eval(deleteAction);
                    e.stopImmediatePropagation();
                    e.preventDefault();
                  }
                });
            }
      };
};
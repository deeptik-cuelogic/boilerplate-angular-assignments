angular.module('confirmDelete.directive', ['dashboard.service'])
    .directive("confirmDelete", confirmDelete)
    .directive('uniqueEmail', ['uniqueEmailService', uniqueEmail]);

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

angular.module('confirmDelete.directive', [])
    .directive("confirmDelete", confirmDelete);

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

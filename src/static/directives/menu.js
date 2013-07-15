angular.module('doWebNow')
    .directive('menu', function factory(){
    var menuDirective = {
        templateUrl: '/static/partials/menu.html',
        restrict: 'E',
        controller: ["$scope", "$element", "$attrs", function($scope, $element, $attrs) {
            console.log('controller');
        }]
    };
    return menuDirective;
});
angular.module('doWebNow')
    .directive('menu', function factory(){
    var menuDirective = {
        templateUrl: '/static/partials/menu.html',
        restrict: 'E',
        controller: MenuController
    };
    return menuDirective;
});
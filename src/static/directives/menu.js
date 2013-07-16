angular.module('doWebNow')
    .directive('menuHeader', function factory(){
        var menuDirective = {
            templateUrl: '/static/partials/menu-header.html',
            restrict: 'E',
            controller: MenuHeaderController
        };
        return menuDirective;
    })
    .directive('menuFooter', function factory(){
        var menuDirective = {
            templateUrl: '/static/partials/menu-footer.html',
            restrict: 'E',
            controller: MenuFooterController
        };
        return menuDirective;
    })
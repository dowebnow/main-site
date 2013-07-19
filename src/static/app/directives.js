angular.module('dowebnowDirectives', [])
    .directive('menuHeader', function factory() {
        var menuDirective = {
            templateUrl: '/static/partials/menu-header.html',
            restrict: 'E',
            controller: MenuHeaderController
        };
        return menuDirective;
    })
    .directive('menuFooter', function factory() {
        var menuDirective = {
            templateUrl: '/static/partials/menu-footer.html',
            restrict: 'E',
            controller: MenuFooterController
        };
        return menuDirective;
    })
    .directive('pagination', function factory() {
        return {
            templateUrl: '/static/partials/pagination.html',
            restrict: 'E',
            controller: function($scope, paginationService) {
                $scope.service || ($scope.service = {});
                $scope.service.pagination = paginationService;
            }
        };
    });
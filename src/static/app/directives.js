angular.module('dowebnowDirectives', [])
    .directive('menu', function(){
        return {
            restrict: 'E',
            transclude: true,
            replace: true,
            scope: {
                name: '@'
            },
            template: '<ul class="menu-{{ name }}" ng-transclude></ul>',
            controller: function($scope) {
                this.name = $scope.name;
            }
        };
    })
    .directive('menuItem', function() {
        return {
            restrict: 'E',
            replace: true,
            require: '^menu',
            scope: {
                name: '@',
                href: '@'
            },
            template: '' +
                '<li class="menu-{{ menuName }}__item">' +
                    '<a class="menu-{{ menuName }}__link{{ currentClass }}" href="{{ href }}">' +
                        '{{ name }}' +
                    '</a>' +
                '</li>',
            controller: function($scope, $location) {
                var _this = this;

                this.getCurrent = function() {
                    $scope.currentURL = '#!' + $location.$$url;
                    $scope.isActive = ($scope.currentURL == $scope.href);
                };

                $scope.$on('$locationChangeStart', function() {
                    _this.getCurrent();
                    $scope.currentClass = $scope.isActive ? ' menu-' + $scope.menuName + '__link_state_current' : '';
                });
            },
            link: function(scope, element, attributes, MenuController) {
                scope.menuName = MenuController.name;
            }
        };
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
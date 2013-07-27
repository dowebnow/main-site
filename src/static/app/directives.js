angular.module('dowebnowDirectives', [])
    .directive('menu', function(){
        return {
            replace: true,
            restrict: 'E',
            scope: {
                name: '@'
            },
            template: '<ul class="menu-{{ name }}" ng-transclude></ul>',
            transclude: true,
            controller: function($scope) {
                this.name = $scope.name;
            }
        };
    })
    .directive('menuItem', function() {
        return {
            replace: true,
            require: '^menu',
            restrict: 'E',
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
    .directive('pagination', function() {
        return {
            replace: true,
            restrict: 'E',
            scope: {
                count: '@',
                limit: '@',
                update: '&'
            },
            templateUrl: '/static/partials/pagination.html',
            controller: function($scope) {
            },
            link: function(scope) {
                var _this = this;

                scope.$watch('count', function(count) {
                    if(count) {
                        _this.init(count);
                    };
                });

                this.init = function(count) {
                    scope.pages = Math.ceil(count / scope.limit);
                    scope.update({limit: scope.limit, offset: 0});
                };
            }
        };
    });
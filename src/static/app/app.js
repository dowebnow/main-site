angular.module('doWebNow', [])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: '/static/partials/home/home.html',
                controller: HomeController
            })
            .when('/test', {
                templateUrl: '/static/partials/test/test.html',
                controller: TestController
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .run();
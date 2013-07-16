angular.module('doWebNow', [])
    .config(['$routeProvider', '$locationProvider', function($routeProvider){
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
        $locationProvider.html5Mode(true);
    }])
    .run();
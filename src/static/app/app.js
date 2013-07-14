angular.module('doWebNow', [])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: '/static/partials/home/home.html',
                controller: HomeController
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .run();
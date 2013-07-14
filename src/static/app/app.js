angular.module('doWebNow', [])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'partials/home.html',
                controller: HomeController
            })
            .otherwise({
                redirectTo: '/'
            });
    }])
    .run();
angular.module('doWebNow', ['dowebnowDirectives', 'dowebnowFilters', 'dowebnowResources', 'dowebnowServices'])
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider
            .when('/', {
                templateUrl: '/static/partials/home/home.html',
                controller: HomeController
            })
            .when('/news', {
                templateUrl: '/static/partials/news/news.html',
                controller: NewsController
            })
            .when('/test', {
                templateUrl: '/static/partials/test/test.html',
                controller: TestController
            })
            .otherwise({
                redirectTo: '/'
            });
//        $locationProvider.html5Mode(true);
    }])
    .run();
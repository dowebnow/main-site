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
                template: '404 Error'
            });
        $locationProvider.hashPrefix('!');
//        $locationProvider.html5Mode(true);
    }])
    .run(['globalState', function(globalState) {
        if ($('html').hasClass('wf-active')) {
            globalState.fontFaceLoaded = true;
        } else {
            $('body').on('fontsReady', function() {
                globalState.fontFaceLoaded = true;
            });
        }
    }]);
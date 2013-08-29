angular.module('dowebnowResources', ['ngResource'])
    .factory('newsResource', function($resource) {
        return $resource('/news.json', {}, {
            query: {
                method: 'GET',
                isArray: true
            }
        });
    });
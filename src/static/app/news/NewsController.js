function NewsController($scope, newsResource){
    $scope.news || ($scope.news = {});

    $scope.getPage = function(limit, offset) {
        newsResource.get({limit: limit, offset: offset}, function(data) {
            $scope.news.posts = data.posts;
        });
    };

    newsResource.get(function(data) {
        $scope.news.count = data.count;
    });
};
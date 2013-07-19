function NewsController($scope, newsResource, paginationService){
    $scope.vars || ($scope.vars = {});

    newsResource.get(function(data) {
        $scope.vars.data = data;
        paginationService.setCount(data.count);
    });
};
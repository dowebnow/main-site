function NewsController($scope, newsResource, paginationService){
    $scope.vars || ($scope.vars = {});

    if(paginationService.currentPage != 0) {
        paginationService.firstPage();
    };

    newsResource.get(function(data) {
        $scope.vars.data = data;
        paginationService.setCount(data.count);
    });
};
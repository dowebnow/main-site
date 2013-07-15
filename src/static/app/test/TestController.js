function TestController($scope, $http){
    $scope.vars = {};

    $http.get('/test.json').success(function(data){
        $scope.vars.data = data;
    });

};
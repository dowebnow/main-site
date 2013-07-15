function TestController($scope, $http){
    $scope.vars = {};

    $http.get('/test.json').success(function(data){
        $scope.vars.title = data[0].fields.title;
        $scope.vars.content = data[0].fields.full_text;
        $scope.vars.date = data[0].fields.published_date;
    });

};
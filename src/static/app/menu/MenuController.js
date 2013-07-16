function MenuController($scope, $location){
    var selectedLink = $location.$$url ? '#' + $location.$$url : '#/';

    $scope.vars = {};

    $scope.vars.menuItems = [
        {
            'name': 'Home',
            'link': '#/'
        },
        {
            'name': 'Test',
            'link': '#/test'
        }
    ];

    $scope.vars.toggleSelect = function(link){
        selectedLink = link;
    };

    $scope.vars.getClass = function(item){
        if(item.link === selectedLink){
            return 'active';
        } else {
            return '';
        };
        history.replaceState({page: 3}, item.name, item.link + 'something');
    };
};
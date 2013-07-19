function MenuFooterController($scope, $location){
    var selectedLink = $location.$$url ? '#' + $location.$$url : '#/',
        activeClass = 'menu-footer__link_state_active';

    $scope.vars = {};

    $scope.vars.menuItems = [
        {
            'name': 'Home',
            'link': '#/'
        },
        {
            'name': 'News',
            'link': '#/news'
        },
        {
            'name': 'Test',
            'link': '#/test'
        }
    ];

    $scope.vars.toggleSelect = function(link){
        selectedLink = link;
    };

    $scope.vars.getClass = function(link){
        if(link === selectedLink){
            return activeClass;
        } else {
            return '';
        };
    };
};
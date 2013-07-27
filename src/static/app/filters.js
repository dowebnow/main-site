angular.module('dowebnowFilters', [])
    .filter('range', function() {
        return function(input, pages) {
            for(var i = 0; i < pages; i++) {
                input.push(i);
            };
            return input;
        };
    });
//    .filter('pagination', function(paginationService) {
//        return function(input, postsPerPage) {
//            if(input && input.length) {
//                paginationService.postsPerPage = postsPerPage;
//                return input.slice(parseInt(paginationService.currentPage * paginationService.postsPerPage), parseInt((paginationService.currentPage + 1) * paginationService.postsPerPage));
//            };
//        };
//    });
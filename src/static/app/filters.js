angular.module('dowebnowFilters', [])
    .filter('pagination', function(paginationService) {
        return function(input, postsPerPage) {
            if(input && input.length) {
                paginationService.postsPerPage = postsPerPage;
                return input.slice(parseInt(paginationService.currentPage * paginationService.postsPerPage), parseInt((paginationService.currentPage + 1) * paginationService.postsPerPage));
            };
        };
    })
    .filter('pagesArray', function() {
        return function(input, numberOfPages) {
            if(input && input.length) {
                input = [];
                for(var i = 0; i < numberOfPages; i++) {
                    input[i] = i;
                };
                return input;
            };
        };
    });
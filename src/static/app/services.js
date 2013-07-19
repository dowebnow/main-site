angular.module('dowebnowServices', [])
    .service('paginationService', function() {
        this.currentPage = 0;
        this.postsPerPage = 2;

        this.nextPage = function() {
            if(this.isLast()) {
                return;
            };
            this.currentPage++;
        };
        this.previousPage = function() {
            if(this.isFirst()) {
                return;
            };
            this.currentPage--;
        };
        this.isLast = function() {
            return this.currentPage == this.numberOfPages - 1;
        };
        this.isFirst = function() {
            return this.currentPage == 0;
        };
        this.lastPage = function() {
            this.currentPage = this.numberOfPages - 1;
        };
        this.firstPage = function() {
            this.currentPage = 0;
        };
        this.setPage = function(page) {
            this.currentPage = page;
        };
        this.setCount = function(count) {
            this.count = count;
            this.numberOfPages = Math.ceil(this.count / this.postsPerPage);
        };
    });
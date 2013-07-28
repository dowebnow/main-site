function HeroController($scope) {
    console.log('HeroController Start!');

    var heroHeight = getHeroHeight();

    $('.hero').height(heroHeight);

    $('.hero').dwncarousel();

    function getHeroHeight() {
        var height = $(window).height() - $('.header').outerHeight();

        if (height < 400) {
            return 400;
        } else if(height > 1080){
            return 1080;
        } else {
            return height;
        };
    };
};
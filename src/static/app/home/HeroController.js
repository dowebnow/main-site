function HeroController($scope, globalState) {
    var heroHeight = getHeroHeight();

    $('.hero').height(heroHeight);

    $('.hero').dwncarousel({
        waitForFontFace: !globalState.fontFaceLoaded
    });

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
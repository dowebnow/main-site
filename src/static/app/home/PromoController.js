function PromoController($scope) {
    console.log('PromoController Start!');

    var promoHeight = getPromoHeight();

    $('.promo__inner').height(promoHeight);
    $('body').on({
        fontsReady: function() {
            console.log('Fonts ready');
            var promoContentHeight = $('.promo__content').outerHeight(true),
                promoCoverHeight = promoHeight - promoContentHeight;
            $('.promo__cover').css({
                'bottom': promoContentHeight,
                'height': promoCoverHeight
            });
        }
    })

    $('.promo__cover-image').on({
        load: function() {
            $(this).css({
                'margin-left': $(this).width() / 2 * (-1)
            })
        }
    })

    function getPromoHeight() {
        var height = $(window).height() - $('.header').outerHeight();

        if (height < 400) {
            return 400;
        } else {
            return height;
        }
    }
};
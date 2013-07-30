(function($){
    var dwnCarousel = function(element, options) {
        var $element = $(element),
            object = this,
            settings = $.extend({
                itemClass: 'hero__item',
                currentClass: 'hero__item_state_current',
                coverClass: 'hero__cover',
                captionClass: 'hero__caption',
                loaderClass: 'loader',
                loaderSrc: '/static/img/loader.gif',
                waitForFontFace: true,
                fontFaceLoadedEvent: 'fontsReady'
            }, options || {}),
            $items = $('.' + settings.itemClass);

        var currentSlide = 0;

        $items.on({
            click: function() {
                object.nextSlide();
            }
        });

        this.getCurrentSlide = function() {
            return currentSlide%$items.length;
        };

        this.setCurrentSlide = function(slide) {
            currentSlide = slide;
        };

        this.nextSlide = function() {
            currentSlide++;

            $items.removeClass(settings.currentClass).eq(object.getCurrentSlide()).addClass(settings.currentClass);
        };

        var init = function() {
            $($items[0]).addClass(settings.currentClass);
            appendLoaders();
            preloadImages();
        };

        var preloadImages = function() {
            $items.each(function() {
                var _this = this,
                    img = new Image(),
                    src = $(this).find('.' + settings.coverClass).data('src');

                this.coverLoaded = false;

                img.onload = function() {
                    _this.coverLoaded = true;
                    $(_this).find('.' + settings.coverClass).css({
                        'background-image': 'url("' + src + '")'
                    });
                    onItemLoaded(_this);
                };

                img.src = src;
            });
        };

        var onItemLoaded = function(item) {
            $(item).find('.' + settings.loaderClass).remove();
        };

        var appendLoaders = function() {
            $items.each(function() {
                var img = new Image();
                img.src = settings.loaderSrc;
                img.className = settings.loaderClass;

                $(this).append(img);
                moveLoader(this);
            });
        };

        var moveLoader = function(item) {
            var loader = $(item).find('.' + settings.loaderClass),
                loaderMargin = parseInt(loader.css('marginTop'), 10),
                captionHeight = $(item).find('.' + settings.captionClass).outerHeight(true);

            loader.css({'marginTop': loaderMargin - captionHeight / 2});
        };

        if(settings.waitForFontFace) {
            console.log('1');
            $('body').on(settings.fontFaceLoadedEvent, function() {
                console.log('2');
                init();
            });
        } else {
            console.log('3');
            init();
        };
    };

    $.fn.dwncarousel = function(options) {
        return this.each(function() {
            var element = $(this);

            // Return early if this element already has a plugin instance
            if (element.data('dwncarousel')) return;

            // pass options to plugin constructor
            var dwncarousel = new dwnCarousel(this, options);

            // Store plugin object in this element's data
            element.data('dwncarousel', dwncarousel);
        });
    };
})(jQuery);

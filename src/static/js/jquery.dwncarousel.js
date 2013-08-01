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
                fontFaceLoadedEvent: 'fontsReady',
                autoRotate: null,
                autoRotateDelay: 5000,
                timerElement: null,
                timerClass: 'hero__timer',
                timerFinalClass: 'hero__timer_state_done'
            }, options || {}),
            $items = $('.' + settings.itemClass);

        var currentSlide = 0,
            timer = null,
            $timerElement = null;

        if(!settings.timerElement) {
            settings.timerElement = '<div></div>';
            $timerElement = $(settings.timerElement).addClass(settings.timerClass);
            $element.prepend($timerElement);
        };

        this.getCurrentSlide = function() {
            return currentSlide % $items.length;
        };

        this.setCurrentSlide = function(slide) {
            currentSlide = slide;
        };

        this.nextSlide = function() {
            currentSlide++;
            object.setActiveSlide(object.getCurrentSlide());
        };

        this.previousSlide = function() {
            currentSlide--;
            object.setActiveSlide(object.getCurrentSlide());
        };

        this.setActiveSlide = function(index) {
            object.setCurrentSlide(index);
            $items.removeClass(settings.currentClass).eq(object.getCurrentSlide()).addClass(settings.currentClass);
        };

        var createTimer = function(autoRotateFunction) {
            if(settings.autoRotateDelay != 0) {
                startTimer(autoRotateFunction);
            };

            function startTimer(func) {
                $timerElement[0].style.transition = 'all ' + settings.autoRotateDelay + 'ms linear';
                $timerElement.addClass(settings.timerFinalClass);
                timer = setTimeout(function() {
                    $timerElement[0].style.transition = 'none';
                    $timerElement.removeClass(settings.timerFinalClass);
                    func();
                    //TODO: ?? WTF IS GOING ON HERE
                    //Had to delay start of new timer, because of timerElement won't clear its class
                    setTimeout(function() {
                        startTimer(func);
                    }, 100);
                }, settings.autoRotateDelay);
            };
        };

        var init = function() {
            $($items[0]).addClass(settings.currentClass);
            appendLoaders();
            preloadImages();
            if(settings.autoRotate) {
                createTimer(settings.autoRotate);
            } else {
                createTimer(onAutoRotate);
            };
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

        var onAutoRotate = function() {
            object.nextSlide();
        };

        if(settings.waitForFontFace) {
            $('body').on(settings.fontFaceLoadedEvent, function() {
                init();
            });
        } else {
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

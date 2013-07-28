(function($){
   var dwnCarousel = function(element, options) {
       var elem = $(element),
           obj = this,
           settings = $.extend({
               itemClass: 'hero__item',                  //
               currentClass: 'hero__item_state_current', //
               coverClass: 'hero__cover',                //
               captionClass: 'hero__caption'             //
           }, options || {}),
           $items = $('.' + settings.itemClass);

       var currentItem = 0;

       this.nextSlide = function() {
           //
           currentItem++;
       };

       var init = function() {
           preloadImages();
       };
       
       var preloadImages = function() {
           var loaded = 0;

           $items.each(function() {
               var _this = this,
                   img = new Image(),
                   src = $(this).find('.' + settings.coverClass).data('src');

               img.onload = function() {
                   loaded++;
                   _this.image = src;
                   if(loaded === $items.length) {
                        onItemsLoaded();
                   };
               };

               img.src = src;
           });
       };

       var onItemsLoaded = function() {
           $($items[0]).addClass(settings.currentClass);
           $items.each(function() {
               $(this).find('.' + settings.coverClass).css({
                   'background-image': 'url("' + this.image + '")'
               });
           });
       };

       init();
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

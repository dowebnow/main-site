WebFontConfig = {
    google: { families: [ 'Dosis::latin-ext', 'Open+Sans:400:latin-ext', 'Open+Sans+Condensed::latin-ext' ] },
    active: function() {
        $('body').trigger('fontsReady');
    }
};

(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();
$(document).ready(function () {
    "use strict";

    var window_width = $(window).width(),
        window_height = window.innerHeight,
        header_height = $(".navbar").height(),
        header_height_static = $(".site-header.static").outerHeight(),
        fitscreen = window_height - header_height;


    $(".fullscreen").css("height", window_height);
    $(".fitscreen").css("height", fitscreen);


    // SCROLL TO ANCHORS

    $("a[href^='#']").click(function(e) {
        e.preventDefault();
        scrollToAnchor(this.hash)
    });

    $(window).on('hashchange', function () {
        var top = $(window.location.hash).offset().top;
        $(window).scrollTop(top);
    });

    function scrollToAnchor(hash) {
        var target = $(hash);
        target = target.length ? target : $('[name=' + hash.slice(1) +']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 500, 'swing', function(){  window.location.hash = hash; });
            return false;
        }
    }

    //-------- Active Sticky Js ----------//

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

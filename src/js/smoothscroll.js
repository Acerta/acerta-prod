"use strict";

$('button[formaction^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('formaction'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});
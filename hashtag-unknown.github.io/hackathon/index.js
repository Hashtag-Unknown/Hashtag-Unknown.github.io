$(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
        $('.navbar').addClass("navsha");
    } else {
        $('.navbar').removeClass("navsha");
    }
});
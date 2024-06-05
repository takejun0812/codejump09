
$(function () {
    $('.burger_btn').on('click', function () {
        $('.burger_btn').toggleClass('close');
        $('.nav-wrapper').toggleClass('fade');
        // $('body').toggleClass('noscroll');
    })
});

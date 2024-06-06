
$(function () {
    $('.burger_btn').on('click', function () {
        $('.burger_btn').toggleClass('close');
        $('.nav-wrapper').toggleClass('fade');
    })

    $('.slide-items').slick({
        centerMode: true,
        slidesToShow: 5,
        centerPadding: '30%',
        variableWidth: true,

        responsive: [{
            breakpoint: 600,
             settings: {
              slidesToShow: 3,
              centerPadding: '10%',
             },
            },
          ]
	});
});

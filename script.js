
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

    $(window).on('load scroll', function (){

        var box = $('.feature-img');
        var animated = 'animated';
        
        box.each(function(){
        
          var boxOffset = $(this).offset().top;
          var scrollPos = $(window).scrollTop();
          var wh = $(window).height();
      
          if(scrollPos > boxOffset - wh + 100 ){
            $(this).addClass(animated);
          }
        });
      });

      $('a[href*="#"]').click(function () {
        var elmHash = $(this).attr('href');
        var pos = $(elmHash).offset().top-70;
        $('body,html').animate({scrollTop: pos}, 500);
        return false;
    });
});

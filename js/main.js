$(function() {
        // burger menu
        $(".burger-menu").on("tap click", function () { 
                $(this).toggleClass("cross");
                $('.burger').toggleClass("cross")
                $('body').toggleClass("");
                $('.nav-left ul').toggleClass("active-menu");
                $('.nav-none').toggleClass("nav-yes");
            });

        //     review slider
        $('#slider-review').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                  {
                    breakpoint: 550,
                    settings: {
                        arrows: false,
                    }
                  },
              
                ]
              });


              // modal window principal title
              $('.popup .close').click(function(){
                $('.popup').removeClass('open');
                $('#wrapper').removeClass('popup');
                });
                $('.popup .blocker').click(function(){
                $('.popup').removeClass('open');
                $('#wrapper').removeClass('popup');
                });
                //homepage fv popup_catalog
                $('#login, #loginTwo').click(function(){
                $('.popup_catalog').addClass('open');
                $('#wrapper').addClass('popup');
                });
});

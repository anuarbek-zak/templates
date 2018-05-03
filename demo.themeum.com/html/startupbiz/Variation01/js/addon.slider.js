jQuery(document).ready(function($){'use strict';
    
    // Full width Slideshow
    var $slideFullwidth = $('#slide-fullwidth');

    // Autoplay
    var $autoplay   = $slideFullwidth.attr('data-slide-ride');
    if ($autoplay == 'true') { var $autoplay = true; } else { var $autoplay = false};

    $slideFullwidth.owlCarousel({
        margin: 0,
        loop: true,
        autoplay: $autoplay,
        animateIn: 'fadeIn',
        animateOut: 'sliderLeft',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
    });


    $('.SlidePrev').click(function(){
        $slideFullwidth.trigger('prev.owl.carousel', [400]);
    });

    $('.SlideNext').click(function(){
        $slideFullwidth.trigger('next.owl.carousel',[400]);
    });

});


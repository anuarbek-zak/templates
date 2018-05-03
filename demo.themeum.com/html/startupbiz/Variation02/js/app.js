jQuery(document).ready(function($){'use strict';

	/*==========  Preloader  ==========*/
    setTimeout("jQuery('#preloader').animate({'opacity' : '0'},300,function(){jQuery('#preloader').hide()})",800);
    setTimeout("jQuery('.preloader-hide, .selector_open').animate({'opacity' : '1'},500)",800);
    setTimeout("jQuery('footer').animate({'opacity' : '1'},500)",2000);


	/*==========   show-menu   ==========*/
	$('.show-menu').click(function() {
		$('.show-menu').toggleClass('active');
	});
	
	/*==========  windows height  ==========*/
	var slideHeight = $(window).height();
	$('#preloader').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#preloader').css('height',slideHeight);
	});

	/*==========  Menu Animation  ==========*/
	var $window = $(window),
	     $ul = $('ul.main-nav');

	if ($window.width() < 768) {
	   $ul.removeClass('slideRight'); 
	};

	 $(window).on('resize', function () {
	    if ($window.width() < 768) {
	       $ul.removeClass('slideRight');
	   }else{

	    $ul.addClass('slideRight')};
	 });
	
	/*==========  offcanvas  ==========*/ 
	$('#offcanvas-toggler').on('click', function(event){
        event.preventDefault();
        $('body').addClass('offcanvas');
    });
    $( '<div class="offcanvas-overlay"></div>' ).insertBefore( '.body-innerwrapper > .offcanvas-menu' );
    $('.close-offcanvas, .offcanvas-overlay').on('click', function(event){
        event.preventDefault();
        $('body').removeClass('offcanvas');
    });

	/*==========  Sticky Menu  ==========*/ 
    $(document).ready(function(){
        $("body.sticky-header").find('#navigation-bar, #mobile-nav-bar').sticky({topSpacing:0})
    });

    /*==========  owl-carousel for each-location  ==========*/
	$('#each-location').owlCarousel({
		items: 3,
		dots: false,
		responsive: {
			0: {
				items: 1,
				margin: 30
			},
			768: {
				items: 2,
				margin: 30
			},
			992: {
				items: 3,
				margin: 30
			}
		}

	});

	/*==========  owl-carousel for partners  ==========*/
	$('#carousel-partners').owlCarousel({
		items: 4,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 3,
				margin: 75
			},
			990: {
				items: 4,
				margin: 75
			},
			1200: {
				items: 5,
				margin: 75
			}
		}

	});	

	/*==========  isotope  ==========*/
	$(window).load(function(){'use strict';
		var $achievment_selectors = $('.portfolio-filter >li>a');
		
		if($achievment_selectors.length) {

			var $achievment = $('.portfolio-items');
			$achievment.isotope({
				itemSelector : '.portfolio-item',
				layoutMode : 'fitRows'
			});

			$achievment_selectors.on('click', function(){
				$achievment_selectors.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$achievment.isotope({ filter: selector });
				return false;
			});
		} 
	});

	/*==========  Countdown  ==========*/
	$('#projects-counter').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.counter').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	});

});

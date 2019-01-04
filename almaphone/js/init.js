"use strict";

$(document).ready(function () {
	
    $('.nav-tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show')
    });

    $(document).on('click', '.price-tabs .iphone ul li', function(e) {
        e.preventDefault();
        var $self = $(this),
            tabIndex = $self.index();
        $self.siblings().removeClass('active');
        $self.addClass('active');
        $('.iphone-cont').removeClass('active').eq(tabIndex).addClass('active');
    });

    $(document).on('click', '.price-tabs .ipad ul li', function(e) {
        e.preventDefault();
        var $self = $(this),
            tabIndex = $self.index();
        $self.siblings().removeClass('active');
        $self.addClass('active');
        $('.ipad-cont').removeClass('active').eq(tabIndex).addClass('active');
    });

    $(document).on("click", ".iphone-container", function() {
        $(".price-table").removeClass("active");
        $(".price-table.iphone-table").addClass("active");
    });
    $(document).on("click", ".ipad-container", function() {
        $(".price-table").removeClass("active");
        $(".price-table.ipad-table").addClass("active");
    });


    $("#sync1").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        slideSpeed: 200,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        dotsContainer: '#sync2',
        responsiveRefreshRate: 200
    });

    $("#owl-frontslider").owlCarousel({
        items: 1,
        nav: true,
        lazyLoad: true,
        loop: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        autoplay: true,
        autoplayTimeout: 4000,
        dotsContainer: '#carousel-custom-dots',
        autoplayHoverPause: true,
        smartSpeed: 2000
    });
    // custom dots:
    $('.owl-dot').click(function () {
        //  $(this).html();
        $("#owl-frontslider").trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    $("#manufacturers ul").owlCarousel({
        items: 4,
        responsive: {0: {items: 2}, 600: {items: 4}},
        nav: true,
        dots: false,
        loop: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        slideSpeed: 200
    });


    /* ---------  END Additional images --------- */

    // ПОКАЗ/СКРЫТИЕ НАВИГАЦИИ ПРИ ШИРИНЕ ОКНА <= 768 PX
    $('.main_nav > ul').prepend('<li class="mobile"></li>');

    $('.toggle_nav').click(function (e) {
        if ($('.main_nav li').hasClass('mobile')) {
            e.preventDefault();
            $('.main_nav').toggleClass('expand');
        }
    });

    // TABS
    $('.tabs').tabs();

    // scroll to block
    $(".mouse-down").click(function () {
        $('html,body').animate({
                scrollTop: $(".price-block").offset().top
            },
            'slow');
    });

    // header_menu scroll to element
    $(".header_menu_link").click(function (e) {
        e.preventDefault();
        var targetId = $(this).attr('href');
        $('html,body').animate({
                scrollTop: $(targetId).offset().top
            },
            'slow');
    });

    // carousel members
    $('#company_members').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    // $('#company_members2').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     nav: true,
    //     dots: false,
    //     navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 2
    //         },
    //         1000: {
    //             items: 3
    //         }
    //     }
    // });
    // $('#company_members3').owlCarousel({
    //     loop: true,
    //     margin: 10,
    //     nav: true,
    //     dots: false,
    //     navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 2
    //         },
    //         1000: {
    //             items: 3
    //         }
    //     }
    // });

    // click on map makes it scrollable
    $('.gmap').click(function () {
        $(this).find('iframe').css("pointer-events", "auto");
        // $(".map-banner").fadeOut('slow');
    });

    // show more comments

    // owl carousele stars
    $(".js-mobile-carousel-stars").owlCarousel({
        loop:true,
        dots: true,
        margin:0,
        nav:false,
        items: 1
    });

    // owl carousele partners
    $(".js-mobile-carousel-partners").owlCarousel({
        loop:true,
        dots: true,
        margin:0,
        nav:false,
        items: 2
    });

    // owl carousele social
    $(".js-comments_social").owlCarousel({
        loop:true,
        dots: true,
        margin:0,
        nav:false,
        items: 1
    });

    // advantages carousele on mobile (header)
    $('.js-advantages').owlCarousel({
        autoplay: true,
        loop:true,
        dots: true,
        margin:0,
        nav:false,
        items: 1
    });

    $(document).on("click", ".show_mobile_index-form", function() {
        $(this).css('display', 'none');
        $(".mobile_index-form").css('display', 'block');
    })

    $(window).scroll(function() {
             if ($(this).scrollTop() > 100){
                 $(".mobile-header").addClass( "active" );
               }
               else{
                 $(".mobile-header").removeClass( "active" );
               }
           });

    $('.fancybox-modal').fancybox({padding: 0});

    var options = {
      delegation: true,
      clearForm: true,
      resetForm: true,
      type: 'post',
      beforeSubmit: function() {
        $.fancybox.close();
      },
      success: function() {
        $.fancybox({href: "#popupThanks", type: 'inline', padding: 0});
        dataLayer.push({'event': 'zayavka-main'});
      },
      error: function() {
        $.fancybox({href: "#popupError", type: 'inline', padding: 0});
      }
    }

    function scrollToElement(element, offset) {
      $(element).click(function(e) {
        var elementClick = $(this).attr("href");
        var destination  = $(elementClick).offset().top;
        if(destination < 0) {destination = 0;}
        $('html, body').animate({scrollTop: destination - offset}, "slow");
        e.preventDefault();
      });
    }


    $('#form1').ajaxForm(options);
    $('#form2').ajaxForm(options);
    $('#form3').ajaxForm(options);
    $('#form4').ajaxForm(options);
    $('#form5').ajaxForm(options);
    $("input[name=phone]").mask("+7 (999) 999-99-99");
	

});

$("#form1").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    email:{required: true, maxlength: 100, email: true,},
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    email:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
  }
});
$("#form2").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    email:{required: true, maxlength: 100, email: true,},
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    email:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
  }
});
$("#form3").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    email:{required: true, maxlength: 100, email: true,},
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    email:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
  }
});
$("#form4").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    email:{required: true, maxlength: 100, email: true,},
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    email:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
  }
});
$("#form5").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    email:{required: true, maxlength: 100, email: true,},
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    email:{required: "", maxlength: "",},
    phone:{required: "", minlength: "", maxlength: "",},
  }
});
jQuery(document).ready(function($){'use strict';
    
   $(window).load(function(){'use strict';
    var $achievment_selectors = $('.portfolio-filter >li>a');
    
    if($achievment_selectors.length) {

        var $achievment = $('.portfolio-items');
        $achievment.isotope({
            itemSelector : '.portfolio-item',
            layoutMode : 'masonry'
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

});


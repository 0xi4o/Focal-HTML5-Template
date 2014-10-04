$(document).ready(function() {  
    var stickyNavTop = $('nav').offset().top;  

    var stickyNav = function(){  
        var scrollTop = $(window).scrollTop();  

        if (scrollTop > stickyNavTop) {   
            $('nav').addClass('sticky');  
        } else {  
            $('nav').removeClass('sticky');   
        }  
    };  

    stickyNav();  

    $(window).scroll(function() {  
        stickyNav();  
    });    

    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing');
    });
});  


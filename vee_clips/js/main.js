// Scroll to Top
function scrollTop(offset){
    if(!offset){ offset = 0; }
    else { offset = offset-150; }
    $('html,body').animate({ scrollTop: offset }, 'slow');
}

$(function(){

    // if mobile stuff
    if ($(window).width() > 768) {
        $('#fullpage').fullpage({
            anchors:['intro','how-it-works','game-changers','legal'],
            afterLoad: function(anchorLink, index){
                var loadedSection = $(this);
                //using anchorLink
                if(anchorLink == 'how-it-works'){
                    $('.howAnimate').addClass('animated fadeInUp');
                }
                if(anchorLink == 'game-changers'){
                    $('.gameAnimate').addClass('animated fadeInUp');
                }
            }
        });
    } else {
        $('.section').css({'padding':'30px 0px'});

        $("a[href='#how-it-works']").click(function() {
            scrollTop($("#howItWorks").offset().top + 100);
            $(".navbar-toggle").click();
            return false;
        });
    }

    //animate css
    $('.logos').addClass('animated fadeInUp');

    //Carousels
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ['<span class="fa-stack fa-lg"><i class="fa fa-circle-o fa-stack-2x"></i><i class="fa fa-angle-left fa-stack-1x"></i></span>','<span class="fa-stack fa-lg"><i class="fa fa-circle-o fa-stack-2x"></i><i class="fa fa-angle-right fa-stack-1x"></i></span>'],
        responsive:{
            0:{
                items:1,
                slideBy:1
            },
            600:{
                items:3,
                slideBy:3
            },
            1000:{
                items:6,
                slideBy:6
            }
        }
    });

    $('.how-carousel').owlCarousel({
        loop:false,
        margin:10,
        items:1,
        slideBy:1,
        nav:true,
        navText: ['<span class="fa-stack fa-lg"><i class="fa fa-circle-o fa-stack-2x"></i><i class="fa fa-angle-left fa-stack-1x"></i></span>','<span class="fa-stack fa-lg"><i class="fa fa-circle-o fa-stack-2x"></i><i class="fa fa-angle-right fa-stack-1x"></i></span>'],
    });
});

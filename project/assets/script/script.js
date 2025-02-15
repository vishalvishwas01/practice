

$(document).ready(function() {
    $("#overlayer").delay(1000).fadeOut("slow");
    $(".box").delay(1000).fadeOut("slow");
    $(".Skip").delay(1000).fadeIn("slow");
});

$(function(){

  var $window = $(window);  
  var scrollTime = 1.2;    
  var scrollDistance = 170;       
  $("body").on("mousewheel DOMMouseScroll", function(event){

    event.preventDefault(); 

    var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta*scrollDistance);

    TweenMax.to($window, scrollTime, {
      scrollTo : { y: finalScroll, autoKill:true },
      ease: Power1.easeOut,
      overwrite: 5              
  });

});
  
});

$(document).ready(function(){
    $('.WorkingPortfolioSlider').slick({
        slidesToShow: 2,
        autoplay: true,
        slidesToScroll: 1,
        autoplaySpeed: 8500,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});
$(document).ready(function(){
    $('.CompletePortfolioSlider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8500,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow:1
            }
        }]
    });
});
var PW = $('.PortfolioSlider .slick-next.slick-arrow').width();
$('.PortfolioSlider .slick-next.slick-arrow').css({
    'height': PW + 'px'
});
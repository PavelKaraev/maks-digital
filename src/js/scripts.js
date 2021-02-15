$(".in-top").click(function(){$("html,body").animate({scrollTop:0},"slow")})

if ($(window).scrollTop()>="250") $(".in-top_scroll").fadeIn("fast")
    $(window).scroll(function(){
  if ($(window).scrollTop()<="250") $(".in-top_scroll").fadeOut("fast")
   else $(".in-top_scroll").fadeIn("fast")
});

$(".in-top_scroll").click(function(){$("html,body").animate({scrollTop:0},"slow")})

var destroy = true;

function portfolioDesc(){
    if($(window).width() >= 650){
        $('.portfolio-item').mouseenter(function(){
            $(this).find('.portfolio-hide_block').slideDown('slow');
        })
        $('.portfolio-item').mouseleave(function(){
            $(this).find('.portfolio-hide_block').slideUp('slow');
        })
    }
}

function slideDetect(){
    $('.main-carousel').slick({
        arrows: true,
        infinite: true,
        dots: true,
        fade: true,
        speed: 100,
        cssEase:'linear',
        prevArrow: '<button class="slick-next slick-arrow" type="button"></button>',
        nextArrow: '<button class="slick-prev slick-arrow" type="button"></button>'
    });
}
$('.show-menu').click(function(){
    $(this).toggleClass('close');
    $('.main-header_nav').slideToggle('slow');
})
$(document).ready(function(){
    
    
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
    $('.main-carousel').on('init', function(e, slick) {
        var $firstAnimatingElements = $('div.carousel_item:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);    
    });
    $('.main-carousel').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('div.carousel_item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
              doAnimations($animatingElements);    
    });

    slideDetect();
    portfolioDesc();
    filterSelect();
});

$(window).resize(function() {
    slideDetect();
    portfolioDesc();
});

$('.info-link').click(function(event){
    event.preventDefault();
    $(this).toggleClass('active');
    $('.info-block').fadeToggle('slow');
})

function filterSelect() {
    // Select container
    var $selectContainer = $(".tab-filter");
    // Only run if on page
    if ($selectContainer.length === 0) { return; }
    // select toggle
    var $selectToggle = $selectContainer.find(".filter-toggle");
    var selectOpen = false;
    // Set active optoin
    $selectToggle.text($selectContainer.find(".active").text());
    // Select toggle
    $selectToggle.on("click", function() {
      var $this = $(this);
      $this.toggleClass("active");
      $this.parent().find(".filter-list").slideToggle(150);

      selectOpen = !selectOpen; // Toggle select open/closed varaible
      if (selectOpen) $(document).on("click", handleSelectOffClick); // if select dropdown is open attached document click event handeler
      else $(document).off("click", handleSelectOffClick); // if select dropdown is closed remove document click event handeler

    });
    // Handle clicking outside of dropdown
    function handleSelectOffClick(e) {
      if (!e) e = window.event;
      var target = e.target || e.srcElement;
      if ($selectToggle.hasClass("active") && !$(target).closest($selectContainer).length) {
        $selectContainer.find(".filter-list").fadeOut(200);
        $selectToggle.removeClass("active");
        selectOpen = false; // set select open/closed variable
        $(document).off("click"); // remove document click event handeler
      }
    }
}
$(".post-share-link").jsSocials({
    showLabel: false,
    showCount: "inside",
    shares: [ 
      {
        share: "facebook",
        logo: "fab fa-facebook-f"
      }, 
      {
        share: "twitter",
        logo: "fab fa-twitter"
      }
    ]
  });
$('.feedback-slider').slick({
    arrows: true,
    infinite: true,
    dots: false,
    speed: 400,
    prevArrow: '<button class="slick-next slick-arrow" type="button"></button>',
    nextArrow: '<button class="slick-prev slick-arrow" type="button"></button>'
});

$(".scroll-to").on("click", function(event) {
    event.preventDefault();
    var id  = $(this).attr('href');

    var	top = $(id).offset().top;
        
    $('body,html').animate({scrollTop: top}, 1500);
});
$(document).ready(function() {
    $('.primery-header').after('<div class="nav-space"/>')
    $(window).scroll(function() {

        if ($(window).scrollTop() > 1) {
            $('.nav-space').css('height', $('.navbar').height());
            $('.site-header nav').addClass('fixed-header');

        } else {

            $('.site-header nav').removeClass('fixed-header');
            $('.nav-space').css('height', '0');
        }

    });

    $(".navbar-toggle").click(function() {
        $(this).toggleClass('open');
    });


// video tab js

$('.vid-item').each(function(index){
  $(this).on('click', function(){
    var current_index = index+1;
    $('.vid-item .thumb').removeClass('active');
    $('.vid-item:nth-child('+current_index+') .thumb').addClass('active');
  });
});





    $('.custom-tab li').click(function(){
        $('.custom-tab li').removeClass('active');
        $(this).addClass('active');
        var get_id = $(this).data('tab');
        $('.content-tab').hide();
        $('#' + get_id).show();

    });

      // Show the first tab and hide the rest
      $('#tabs-nav li:first-child').addClass('active');
      $('.tab-content').hide();
      $('.tab-content:first').show();

      // Click function
      $('#tabs-nav li').click(function(){
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
      });

// accordion js
      $('.accordion li h5').click(function() {
        if (!$(this).next().is(':visible')) {
            $('.drop').slideUp(400);
            $('.accordion li').removeClass('active');
            $(this).next().slideDown(400);
            $(this).parent().addClass('active');
        }
        else {
             $('.drop').slideUp(400);
             $('.accordion li').removeClass('active');
        }
        return false;
    });

    jQuery('.navbar-nav > li').has('ul').append('<span class="close-menu"></span>');

    jQuery('.close-menu').click(function(){
    jQuery(this).prev().slideToggle();
    jQuery(this).parents('li').siblings('li').children('ul').slideUp();
    jQuery(this).toggleClass('active');
    jQuery(this).parents('li').siblings('li').children('.close-menu').removeClass('active');
});


$('.back-top a').hide();
   $(window).scroll(function(){
       if ($(this).scrollTop() > 100) {
           $('.back-top a').fadeIn();
       } else {
           $('.back-top a').fadeOut();
       }
   });
   $('.back-top a').click(function(){
       $("html, body").animate({ scrollTop: 0 }, 800);
       return false;
   });

   $('.responsive').slick({
    dots: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.our-clients').slick({
    dots: false,
    arrows:true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.categ-item').slick({
    dots: false,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.categ-item02').slick({
    dots: false,
    arrows:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



  $('.testimonial').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows:true,
    autoplay: true,
    autoplaySpeed:3000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });

AOS.init();

   AOS.init({
    disable: 'mobile',
    once: true
  });



  $(".expand-toggle").click(function (e) {
    e.preventDefault();

    var $this = $(this);
    var expandHeight = $this.prev().find(".inner-bit").height();

    if ($this.prev().hasClass("expanded")) {
      $this.prev().removeClass("expanded");
      $this.prev().attr("style", "");
      $this.html("Show more");
    } else {
      $this.prev().addClass("expanded");
      $this.prev().css("max-height", expandHeight);
      $this.html("Show less");
    }
  });


// $( ".inner-banner .level-content .close-btn" ).click(function() {
//   $( ".inner-banner .level-content .class-media-container" ).fadeOut( "slow", function() {
//     // Animation complete
//   });
// });



jQuery('.inner-banner .level-content .close-btn').click(function() {
  vimeoWrap = jQuery('#vimeoWrap');
  vimeoWrap.html( vimeoWrap.html() );
  jQuery( ".inner-banner .level-content #vimeoWrap" ).fadeOut( "slow", function() {
    // Animation complete
  });
});

// $('.inner-banner .play-webinar').click(function() {
//   $( ".inner-banner .level-content #vimeoWrap" ).fadeIn( "slow", function() {
//   });
// });



});

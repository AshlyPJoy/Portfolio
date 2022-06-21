(function ($) {
    "use strict";
    
    // loader
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Typed Initiate
    if ($('.hero .hero-text h2').length == 1) {
        var typed_strings = $('.hero .hero-text .typed-text').text();
        var typed = new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            }
        }
    });
    
    
    
    // Portfolio filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-filter li').on('click', function () {
        $("#portfolio-filter li").removeClass('filter-active');
        $(this).addClass('filter-active');
        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);


 
 AOS.init({
    duration: 800,
    easing: 'slide'
 });

(function($) {

    "use strict";

    $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


    var fullHeight = function() {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    // loader
    var loader = function() {
        setTimeout(function() { 
            if($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
            }
        }, 1);
    };
    loader();

    // Scrollax
   $.Scrollax();



   // Burger Menu
    var burgerMenu = function() {

        $('body').on('click', '.js-fh5co-nav-toggle', function(event){

            event.preventDefault();

            if ( $('#ftco-nav').is(':visible') ) {
                $(this).removeClass('active');
            } else {
                $(this).addClass('active'); 
            }

            
            
        });

    };
    burgerMenu();


    var onePageClick = function() {


        $(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
        event.preventDefault();

        var href = $.attr(this, 'href');

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 70
        }, 500, function() {
            // window.location.hash = href;
        });
        });

    };

    onePageClick();
    

    var carousel = function() {
        $('.home-slider').owlCarousel({
        loop:true,
        autoplay: true,
        margin:0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav:false,
        autoplayHoverPause: false,
        items: 1,
        navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
        responsive:{
          0:{
            items:1
          },
          600:{
            items:1
          },
          1000:{
            items:1
          }
        }
        });
    };
    carousel();

    $('nav .dropdown').hover(function(){
        var $this = $(this);
        //   timer;
        // clearTimeout(timer);
        $this.addClass('show');
        $this.find('> a').attr('aria-expanded', true);
        // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
        $this.find('.dropdown-menu').addClass('show');
    }, function(){
        var $this = $(this);
            // timer;
        // timer = setTimeout(function(){
            $this.removeClass('show');
            $this.find('> a').attr('aria-expanded', false);
            // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
            $this.find('.dropdown-menu').removeClass('show');
        // }, 100);
    });


    $('#dropdown04').on('show.bs.dropdown', function () {
      console.log('show');
    });

    // scroll
    var scrollWindow = function() {
        $(window).scroll(function(){
            var $w = $(this),
                    st = $w.scrollTop(),
                    navbar = $('.ftco_navbar'),
                    sd = $('.js-scroll-wrap');

            if (st > 150) {
                if ( !navbar.hasClass('scrolled') ) {
                    navbar.addClass('scrolled');    
                }
            } 
            if (st < 150) {
                if ( navbar.hasClass('scrolled') ) {
                    navbar.removeClass('scrolled sleep');
                }
            } 
            if ( st > 350 ) {
                if ( !navbar.hasClass('awake') ) {
                    navbar.addClass('awake');   
                }
                
                if(sd.length > 0) {
                    sd.addClass('sleep');
                }
            }
            if ( st < 350 ) {
                if ( navbar.hasClass('awake') ) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }
                if(sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    };
    scrollWindow();

    

    var counter = function() {
        
        $('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

            if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

                var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
                $('.number').each(function(){
                    var $this = $(this),
                        num = $this.data('number');
                        console.log(num);
                    $this.animateNumber(
                      {
                        number: num,
                        numberStep: comma_separator_number_step
                      }, 7000
                    );
                });
                
            }

        } , { offset: '95%' } );

    }
    counter();


    var contentWayPoint = function() {
        var i = 0;
        $('.ftco-animate').waypoint( function( direction ) {

            if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
                
                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function(){

                    $('body .ftco-animate.item-animate').each(function(k){
                        var el = $(this);
                        setTimeout( function () {
                            var effect = el.data('animate-effect');
                            if ( effect === 'fadeIn') {
                                el.addClass('fadeIn ftco-animated');
                            } else if ( effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft ftco-animated');
                            } else if ( effect === 'fadeInRight') {
                                el.addClass('fadeInRight ftco-animated');
                            } else {
                                el.addClass('fadeInUp ftco-animated');
                            }
                            el.removeClass('item-animate');
                        },  k * 50, 'easeInOutExpo' );
                    });
                    
                }, 100);
                
            }

        } , { offset: '95%' } );
    };
    contentWayPoint();

    // magnific popup
    $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

})(jQuery);
// const form = document.querySelector("form[name='contact-form']");
// const nameInput = document.querySelector("input[name='name']");
// const emailInput = document.querySelector("input[name='email']");
// const phoneInput = document.querySelector("input[name='phone']");
// const messageInput = document.querySelector("textarea[name='message']");

// nameInput.isValid = () => !!nameInput.value;
// emailInput.isValid = () => isValidEmail(emailInput.value);
// phoneInput.isValid = () => isValidPhone(phoneInput.value);
// messageInput.isValid = () => !!messageInput.value;

// const inputFields = [nameInput, emailInput, phoneInput, messageInput];

// const isValidEmail = (email) => {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// };

// const isValidPhone = (phone) => {
//   const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
//   return re.test(String(phone).toLowerCase());
// };

// let shouldValidate = false;
// let isFormValid = false;

// const validateInputs = () => {
//   console.log("we are here");
//   if (!shouldValidate) return;

//   isFormValid = true;
//   inputFields.forEach((input) => {
//     input.classList.remove("invalid");
//     input.nextElementSibling.classList.add("fade");

//     if (!input.isValid()) {
//       input.classList.add("invalid");
//       isFormValid = false;
//       input.nextElementSibling.classList.remove("fade");
//     }
//   });
// };

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   shouldValidate = true;
//   validateInputs();
//   if (isFormValid) {
//     const scriptURL = 'https://script.google.com/macros/s/AKfycbzbLoqIaq1SD17xcRakYeEx5ed2-HAOi48DTQYBSoWVkbeFiYd5kMGkRjacVkLOIqR7TA/exec'
//     const form = document.forms['contact-form']
//       fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//         .then(response => console.log('Success!', response))
//         .catch(error => console.error('Error!', error.message))
//     alert("Submited Message successfully");
//     location.reload()
//   }
// });

// inputFields.forEach((input) => input.addEventListener("input", validateInputs));
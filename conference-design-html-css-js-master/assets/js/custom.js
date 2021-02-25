(function($){
//  <!-- NAV-BAR SETTINGS -->
    $(window).on("scroll",function(){
        if($(document).scrollTop() > 20){
            $(".custom-nav").addClass("scroll");
            $("#log").addClass("scrolled-logo");
            $(".custom-nav-link").addClass("scrolled-logo");
            $(".single-ev-head-nav").addClass("scrolled-single-ev-head-nav");
        }
        else{
            $(".custom-nav").removeClass("scroll");
            $("#log").removeClass("scrolled-logo");
            $(".custom-nav-link").removeClass("scrolled-logo");
            $(".single-ev-head-nav").removeClass("scrolled-single-ev-head-nav");
        }
    });
//logo change
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 20) {
            $(".logo-nav").addClass("logo-change");
        } else {
            $(".logo-nav").removeClass("logo-change");
        }

        if($('.logo-nav').hasClass('logo-change')){
            $('.logo-nav .logo img').attr('src', 'assets/images/white.svg');
        } else {
            $('.logo-nav .logo img').attr('src', 'assets/images/black.svg');
        }
    });

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 20) {
            $(".logo-nav").addClass("logo-change");
        } else {
            $(".logo-nav").removeClass("logo-change");
        }

        if($('.logo-nav').hasClass('logo-change')){
            $('.single-ev-head-nav .logo-nav .logo img').attr('src', 'assets/images/white.svg');
        } else {
            $('.single-ev-head-nav .logo-nav .logo img').attr('src', 'assets/images/white.svg');
        }
    });

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 20) {
            $(".home-2 .logo-nav").addClass("logo-change");
        } else {
            $(".home-2 .logo-nav").removeClass("logo-change");
        }

        if($('.home-2 .logo-nav').hasClass('logo-change')){
            $('.home-2 .logo-nav .logo img').attr('src', 'assets/images/dark-blue.svg');
        } else {
            $('.home-2 .logo-nav .logo img').attr('src', 'assets/images/dark-blue.svg');
        }
    });

    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 20) {
            $(".home-3 .logo-nav").addClass("logo-change");
        } else {
            $(".home-3 .logo-nav").removeClass("logo-change");
        }

        if($('.home-3 .logo-nav').hasClass('logo-change')){
            $('.home-3 .logo-nav .logo img').attr('src', 'assets/images/version-3.svg');
        } else {
            $('.home-3 .logo-nav .logo img').attr('src', 'assets/images/version-3-1.svg');
        }
    });

    // FOR CUSTOM MODAL    
    $('.get-ticket').on("click", function(){
        $('#mymodalOverlay').css("display","block");
        $('#mymodalOverlay').fadeIn('.5s','linear');
        $('#mymodal').css("transform","translateX(0%)");
    });
    $('.modalClose').on("click",function(){
        $('#mymodalOverlay').css("display","none");
        $('#mymodal').css("transform","translateX(-100%)");
        $('#mymodalOverlay').fadeOut('.5s','ease-out');
    })

    $('').on("click",function(){
        $('#mymodalOverlay').css("display","none");
        $('#mymodalOverlay').fadeOut('.5s','all');
    })

    // NICE SELECT PLUGIN
    $('select').niceSelect();
    
    // Simple Parallax
    
    var headerPar = document.querySelector('.par');
    new simpleParallax(headerPar, {
        delay:0.6,
        transition: 'cubic-bezier(0,0,0,1)',
        scale: 1.5
    });

    var hotPar2 = document.querySelector('.par2');
    new simpleParallax(hotPar2, {
        delay:1,
        transition: 'cubic-bezier(0,0,0,1)',
        scale: 1.4,
        orientation: 'down'
    });

    var resPar3 = document.querySelector('.par3');
    new simpleParallax(resPar3, {
        delay:1.8,
        transition: 'cubic-bezier(0,0,0,1)',
        scale: 1.4,
        orientation: 'up'
    });

    var resPar4 = document.querySelector('.par4');
    new simpleParallax(resPar4, {
        delay:1.4,
        transition: 'cubic-bezier(0,0,0,1)',
        orientation: 'right',
        scale: 1.1,
        overflow: false
    });
    
    var resPar5 = document.querySelector('.par5');
    new simpleParallax(resPar5, {
        delay:1.8,
        transition: 'cubic-bezier(0,0,0,1)',
        scale: 1.1,
        orientation: 'left',
        overflow:false
    });
    var resPar6 = document.querySelector('.par8');
    new simpleParallax(resPar6, {
        delay:1.8,
        transition: 'cubic-bezier(0,0,0,1)',
        scale: 1.4,
        orientation: 'up'
    });

    var resPar7 = document.querySelector('.par9');
    new simpleParallax(resPar7, {
        delay:1.8,
        transition: 'cubic-bezier(0,0,0,1)',
        overflow: false,
        orientation: 'right',
        scale: 1.1
    });
    
    var resPar8 = document.querySelector('.par11');
    new simpleParallax(resPar8, {
        delay:1.8,
        transition: 'cubic-bezier(0,0,0,1)',
        scale: 1.1,
        orientation: 'left',
        overflow:true
    });
    
    var evPar = document.querySelector('.par6');
    new simpleParallax(evPar,{
        delay:1.8,
        transition: 'cubic-bezier(0,0,0,1)',
        scale: 1.3
    });

    //Magnific Popup 
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        gallery: {
            enabled: true
        },
        type: 'image',
          // Delay in milliseconds before popup is removed
        removalDelay: 300,
        // Class that is added to popup wrapper and background
        // make it unique to apply your CSS animations just to this exact popup
        mainClass: 'mfp-fade'

        // other options
        
      });

    // $('.popup').magnificPopup({
    //     items: {
    //       src: '../assets/images/g1.png'
    //     },
    //     type: 'image' // this is default type
    // });

    //COUNTER JS

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    
    // WOW JS
    new WOW().init();

    //AOS animation
    AOS.init({
        once: true
    });

}(jQuery));



$('.brand-slider').owlCarousel({
    loop:true,
    margin:12,
    nav:false,
    autoplay: true,
    autoplayTimeout: 2000,
    stagePadding: 8,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
});

//! Smart Search Button 
var search = document.querySelector(".search-content-wrap");
var smart = document.querySelector(".smart-search-wrap");

function smartBtn(){

    if(search.classList.contains("dis-none")){
        search.classList.remove("dis-none");
        search.classList.add("dis-block");
        smart.classList.add("dis-none");
    }
    else{
        search.classList.add("dis-none"); 
        smart.classList.add("dis-block");       
    }
}

//! Nice Select

$(document).ready(function() {
    $('select').niceSelect();
    $('select').niceSelect('small');
  });
$(function(){

    $('.slider__items').slick({
        arrows: false,
        dots: true,
        fade: true,
        initialSlide: 2,
    });
    document.getElementById("slick-slide-control00").innerHTML="01";
    document.getElementById("slick-slide-control01").innerHTML="02";
    document.getElementById("slick-slide-control02").innerHTML="03";
    document.getElementById("slick-slide-control03").innerHTML="04";
    document.getElementById("slick-slide-control04").innerHTML="05";

    // $('.question__item').on('click', function(){
    //     $('.question__item-box').toggleClass('active');
    // });
   
  
});
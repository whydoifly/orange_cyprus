var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
});

var swiper2 = new Swiper('.swiper2', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
});

var swiper3 = new Swiper('.swiper3', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
});

var swiper4 = new Swiper('.swiper4', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
});

$(document).ready(function() {
    $('.expand-button').on('click', function(){
        $('.special-text').toggleClass('-expanded');
        
        if ($('.special-text').hasClass('-expanded')) {
          $('.expand-button').html('Меньше');
        } else {
          $('.expand-button').html('Больше');
        }
      });
});

// Zoom image on scroll 

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if((scroll > 0)&&(scroll < 400)){
      $('.form-container').addClass('scale-img');
    }
    else if(scroll > 400){
      $('.form-container').removeClass('scale-img');
    }
  })

let slidesPerView = 3; 
let spaceBetween = 70;
let windowWidthInt = window.innerWidth;

if(windowWidthInt < 320){
    slidesPerView= 1;
    spaceBetween = 20;            
}else if(windowWidthInt >= 320 && windowWidthInt < 768){
    slidesPerView= 2;
    spaceBetween = 20;            
}else if(windowWidthInt >= 768 && windowWidthInt < 992){
    slidesPerView= 3;
    spaceBetween = 30;            
}else if(windowWidthInt >= 992 && windowWidthInt < 1200){
    slidesPerView= 3;
    spaceBetween = 50;            
}else if(windowWidthInt >= 1200){
    slidesPerView= 4;
    spaceBetween = 70;            
}
//--------- initialize menu section slider ---
const menu_section = document.querySelector("section.menu_section");

const menu_swiper = new Swiper('.menu_swiper', {
    speed: 400,
    spaceBetween: spaceBetween,
    slidesPerView:slidesPerView,    
    freeMode: true,
    loop: true,
    lazyLoading: true,
    keyboard: {
      enabled: true
    },
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".menu_section .swiper-button-next",
        prevEl: ".menu_section .swiper-button-prev",
    },
    pagination: {
        el: menu_section.querySelector(".swiper-pagination"),
        clickable: true,
        renderBullet: function (index, className) {
          return `<div class=${className}>
        <span class="line"></span> 
        </div>`;
        }
    },
    breakpoints: {
        0: {
            slidesPerView: 1
          },
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 50
          },
        1200: {
          slidesPerView: 4,
          spaceBetween: 70
        }
    },

});

//--------- initialize about section slider ---

const about_section = document.querySelector("section.about_section");

const about_swiper = new Swiper('.bio_swiper', {
    speed: 400,
    spaceBetween: spaceBetween,
    slidesPerView:slidesPerView,    
    freeMode: true,
    loop: true,
    lazyLoading: true,
    keyboard: {
      enabled: true
    },
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".about_section .swiper-button-next",
        prevEl: ".about_section .swiper-button-prev",
    },
    pagination: {
        el: about_section.querySelector(".swiper-pagination"),
        clickable: true,
        renderBullet: function (index, className) {
          return `<div class=${className}>
        <span class="line"></span> 
        </div>`;
        }
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 50
          },
        576: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 30
          },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30
        }
    },

  });

let slidesPerView = 3; 
let spaceBetween = 100;
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
    spaceBetween = 100;            
}

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
          spaceBetween: 100
        }
    },
    onAny(resize){
    let windowWidthNew = window.innerWidth;
    if(windowWidthNew < 768){
        this.slidesPerView = 2;
        } 
    },
      
  });

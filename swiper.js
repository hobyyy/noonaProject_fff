window.onload = function() {

  const swiper_mbanner = new Swiper('#banner.swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,

    autoplay: {
      delay: 10000,//개발할땐 느리게 //원래 VALUE: 2500
      disableOnInteraction: false
    },
  
    // If we need pagination
    pagination: {
      el: '#banner.swiper .swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#banner.swiper .swiper-button-next',
      prevEl: '#banner.swiper .swiper-button-prev',
    },
  
  });
}

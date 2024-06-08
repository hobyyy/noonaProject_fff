// main 화면에서 PROJECT subtitle 하위 움직이는 javascript code

window.onload = function() {

  const swiper_mbanner = new Swiper('#banner.swiper', {
    // Optional parameters
    slidesPerView: 3, // img 개수
    spaceBetween: 0,  // img 사이 공간
    loop: true,

    autoplay: { // 자동으로 다음 이미지로 넘겨주는 속성값
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

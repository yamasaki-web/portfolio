//メインビジュアル
const mySwiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,

  loop: true,
  loopAdditionalSlides: 1,

  speed: 1000,

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    waitForTransition: false,
  },

  grabCursor: false,
  watchSlidesProgress: true,
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    type: 'bullets',
    el: '.swiper-pagination',
  },
  navigation: {
    prevEl: '.prev',
    nextEl: '.next',
  }
});


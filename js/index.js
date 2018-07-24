
var swiper = new Swiper('.section-2 .swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          640: {
              slidesPerView: 1,
              spaceBetween: 10,
              slidesPerGroup: 1,
          },
          320: {
              slidesPerView: 1,
              spaceBetween: 10,
              slidesPerGroup: 1,
          }
      }
    });


    var swiper = new Swiper('.comments .slider .swiper-container', {
        slidesPerView: 6,
        breakpoints: {
            414: {
                slidesPerView: 3,
                spaceBetween: 10,
                slidesPerGroup: 1,
            },
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
                slidesPerGroup: 1,
            }
        }
    });


    var swiper = new Swiper('.sertificat .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.sertificat .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.sertificat .swiper-button-next',
        prevEl: '.sertificat .swiper-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
        }
    }
});

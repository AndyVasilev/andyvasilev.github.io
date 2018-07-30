
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


//

/*Калькулятор */
/*Инициализация слайдеров*/
var moneySlider = document.getElementById("slider-money");
var dateSlider = document.getElementById("slider-date");

noUiSlider.create(moneySlider, {
	animate: true,
	animationDuration: 300,
	start: [0],
	step: 300000,
	range: {
		min: [0],
		max: [2000000]
	}
});
noUiSlider.create(dateSlider, {
	animate: true,
	animationDuration: 300,
	start: [0],
	step: 1,
	range: {
		min: [0],
		max: [10]
	}
});

/*переменные для полей вывода чисел*/
var stepSliderValueElement = document.getElementById("summa");
var dataValueElement = document.getElementById("data");
var returnValueElement = document.getElementById("return");


var rate,valuePercent,rateValueElement = document.getElementById('percent');
/*переменные для полученных значений ползунков*/
var valueMoney, valueDate, valueReturn;



/*полученние значений с ползунков*/

function getElemantValue() {
	valueMoney = moneySlider.noUiSlider.get();
	valueDate = dateSlider.noUiSlider.get();
	valueReturn = (valueMoney - (valueMoney * 90 / 100)) * valueDate;
}


/*вывод значений с ползунков*/

dateSlider.noUiSlider.on("update", function(values, handle) {
	getElemantValue();
	dataValueElement.innerHTML = Math.round(valueDate);
	returnValueElement.innerHTML = Math.round(valueReturn)+' ₽';
});

moneySlider.noUiSlider.on("update", function(values, handle) {
	getElemantValue();
	stepSliderValueElement.innerHTML = Math.round(valueMoney)+' ₽';
	returnValueElement.innerHTML = Math.round(valueReturn)+' ₽';
});

let slider = document.querySelectorAll('.swiper-container');
console.log(slider)

let { clientWidth } = document.body;

let mySlider = null,
    mySlider2 = null,
    mySlider3 = null;


const sliderInit = () => {

   mySlider = new Swiper(slider[0], {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
         dynamicBullets: false,


      },
      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
         el: '.swiper-scrollbar',
      },
   })
}




const sliderInit2 =() => {
   mySlider2 = new Swiper(slider[1], {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
         dynamicBullets: false,


      },
      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
         el: '.swiper-scrollbar',
      },
   })
}


const sliderInit3 =() => {
   mySlider3 = new Swiper(slider[2], {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      // If we need pagination
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
         dynamicBullets: false,


      },
      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
         el: '.swiper-scrollbar',
      },
   })
}


if (matchMedia) {
   let screen = window.matchMedia('(max-width: 767px)');
   console.log(screen)
   screen.addListener(changes);
   changes(screen);
}

function changes(screen) {
   if ( screen.matches ) {

      if ( !mySlider ) {
         sliderInit();
         sliderInit2();
         sliderInit3();
      }
      document.querySelectorAll('.swiper-pagination')[0].style.display = 'block';
      document.querySelectorAll('.swiper-pagination')[1].style.display = 'block';
      document.querySelectorAll('.swiper-pagination')[2].style.display = 'block';
   } else {
      if ( mySlider ) {
         document.querySelectorAll('.swiper-pagination')[0].style.display = 'none';
         document.querySelectorAll('.swiper-pagination')[1].style.display = 'none';
         document.querySelectorAll('.swiper-pagination')[2].style.display = 'none';
         mySlider.destroy();
         mySlider2.destroy();
         mySlider3.destroy()
         mySlider = null;
         mySlider2 = null;
         mySlider3 = null;

      }
   }
}





const burger = document.querySelector('.menu__burger');
const border = document.querySelector('.header');
const burgerMenu = document.querySelector('.container__hidden');
const btnSearch = document.querySelector('.header__hidden_search ');
const overflowHidden = document.querySelector('.wrapper ');



// const btn = document.querySelector('.service__repair')

// burger.onclick = function () {
//    if (!this.classList.contains('active'))
//       this.classList.add('active')
//    else (this.classList.remove('active'))
//
// }

// btn.onclick = function () {
//    location.href = 'index2.html';
// }


burger.onclick = function () {
   burger.classList.toggle('active');
   btnSearch.classList.toggle('active');
   // btnBurger.classList.toggle('active');
   // btnLogo.classList.toggle('active')
   // burgerMenu.classList.toggle('active')             // ВАРИАНТ 1
}
burger.addEventListener('click',() => {
   burgerMenu.classList.toggle("active");
   // overflowHidden.classList.toggle('active')    // ВАРИАНТ 2
})

// burger.addEventListener('click',() => {
//    overflowHidden.classList.toggle('active')
// })


// burger.onclick = function () {
//    burgerMenu.classList.toggle('active')         // ВАРИАНТ 3
// }
//




























// (function () { // IIFE - самовызывющиеся функция.
//
//     const $ = {};
//
//    function _burgerElement() { // возвращаем элемент
//       return document.querySelector('.menu__burger');
//    }
//
//     $.burger = function () {
//       const $burger = _burgerElement(); // присваиваем элемент этот в переменную.
//       console.log($burger)
//
//        return {
//           open() {
//             $burger.classList.add('active');
//           },
//           close() {
//              $burger.classList.remove('active')
//           }
//        }
//     }
//
//
//    const burger = $.burger();
//
//    const burgerMenu = _burgerElement();
//    burgerMenu.onclick = function () {
//       burger.open();
//    }
//
// })()



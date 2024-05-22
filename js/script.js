new Swiper('.swiper-container',{

    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev'
    },

    autoplay:{
        delay: 2500,
        stopOnLastSlide: true,
        disableOnInteraction: false
    },

    loop:true,
});



function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('products-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.products');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

  document.addEventListener('DOMContentLoaded', function() {
    const sizeLabels = document.querySelectorAll('.size-label');
    const sizeBlocks = document.querySelectorAll('.size-block');

    sizeLabels.forEach((label, index) => {
        label.addEventListener('click', function() {
            sizeBlocks.forEach(block => {
                block.classList.remove('active');
            });
            sizeBlocks[index].classList.add('active');
        });
    });
});

// Попап
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64], // координаты центра карты
        zoom: 14, // уровень масштабирования карты
        controls: ['zoomControl', 'fullscreenControl'] // добавляем элементы управления
    });

    // Создаем маркер на карте
    var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
        hintContent: 'Наш магазин',
        balloonContent: 'Мы здесь!'
    }, {
        // Опции.
        // Необходимо указать данный тип макета
        iconLayout: 'default#image',
        // Своё изображение иконки метки
        iconImageHref: '/public/logo/map-marker.png',
        // Размеры метки
        iconImageSize: [30, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    });

    // Добавляем маркер на карту
    myMap.geoObjects.add(myPlacemark);
}
const popup = document.querySelector(".popup");


const popupOpenForm =  document.querySelector('.formOfSale .button');

popupOpenForm.addEventListener('click', ()=>{
  popup.classList.add("popup--open");
})

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64], // координаты центра карты
        zoom: 14, // уровень масштабирования карты
        controls: ['zoomControl', 'fullscreenControl'] // добавляем элементы управления
    });

    // Создаем маркер на карте
    var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
        hintContent: 'Наш магазин',
        balloonContent: 'Мы здесь!'
    }, {
        // Опции.
        // Необходимо указать данный тип макета
        iconLayout: 'default#image',
        // Своё изображение иконки метки
        iconImageHref: '/public/logo/map-marker.png',
        // Размеры метки
        iconImageSize: [30, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    });

    // Добавляем маркер на карту
    myMap.geoObjects.add(myPlacemark);
}
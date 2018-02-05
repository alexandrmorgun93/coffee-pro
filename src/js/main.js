const Parallax = require('scroll-parallax');
let p = new Parallax('.parallax', {
    intensity: 40
}).init();

const [...popupBtn] = document.querySelectorAll('.popap_btn');
let popup = document.querySelector('.popup');
const popupImg = popup.querySelector('.popup_img img');
const popupText = popup.querySelector('.popup_text');
const popupTitle = popup.querySelector('.popup_title');
let popupClose = document.querySelector('.icon-cancel');

popupBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        let title = elem.parentElement.querySelector('.popup_title').innerHTML;
        let text = elem.parentElement.querySelector('.popup_text').innerHTML;
        let urlImg = elem.parentElement.parentElement.querySelector('img').getAttribute('src');
        popupImg.setAttribute('src', urlImg);
        popupTitle.innerHTML = title;
        popupText.innerHTML = text;
        popup.classList.add('active');
        document.body.classList.add('active');
    });


});


popupClose.addEventListener('click', () => {
    popup.classList.toggle('active');
    document.body.classList.remove('active');
});

// video
let video = document.querySelector('video');
let playBtn = document.querySelector('.play');
let stopBtn = document.querySelector('.stop_video');
playBtn.addEventListener('click', () => {
    play();
    playBtn.classList.add('active');
});
stopBtn.addEventListener('click', () => {
    pause();
    playBtn.classList.remove('active');
});

function play() {
    video.play();
}

function pause() {
    video.pause();
}

let slick = require('slick-carousel');

$('.cocoa_wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
$('.tea_wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
$('.deserts_wrap').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }

        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

$('.home_slide-content').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 2
            }

        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 1
            }

        }
    ]
});

// let slideImg = document.querySelectorAll('.img');
// let prevSlide = document.querySelector('.prev_slide');
// let nextSlide = document.querySelector('.next_slide');
// let yak = 0;
// let wrapImg = document.querySelectorAll('.wrap_img');
//
// function lastElem(arr, int, boll) {
//     if (boll) {
//         return (arr[int + 1]) ? int + 1 : 0;
//     } else {
//         return (arr[int - 1]) ? int - 1 : arr.length - 1;
//     }
// }
//
// function slide(arr, int, boll) {
//     for (let i = 0; i < slideImg.length; i++) {
//         slideImg[i].classList.contains('active');
//         slideImg[i].classList.remove('active');
//     }
//     yak = lastElem(slideImg, yak, boll);
//     slideImg[yak].classList.add('active');
// }
//
// slide();
//
//
// nextSlide.addEventListener('click', () => {
//
//     slide(false);
// });
//
//
// prevSlide.addEventListener('click', () => {
//     slide(true);
// });
//

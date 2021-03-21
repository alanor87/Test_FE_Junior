import '../sass/main.scss'

const refs = {
    mobileMenuOpenBtn: document.querySelector('.mobile-menu-button'),
    mobileMenuCloseBtn: document.querySelector('.mobile-menu-button-close'),
    mobileMenu: document.querySelector('.header-menu'),
    imageSlider: document.querySelector('.hero-image-slider'),
}

const sliderOptions = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    infinite: false,
    autoplay: false,
    centerMode: true,
    centerPadding: 20,
};

function mobileMenuOpen() {
    refs.mobileMenu.classList.add('is-open');
};

function mobileMenuClose() {
    refs.mobileMenu.classList.remove('is-open');
};

refs.mobileMenuOpenBtn.addEventListener('click', mobileMenuOpen);
refs.mobileMenuCloseBtn.addEventListener('click', mobileMenuClose);
refs.mobileMenu.addEventListener('click', (event) => {
    console.log('click');
    if (event.target.nodeName === 'A') mobileMenuClose();
})

$('.hero-image-slider').slick(sliderOptions);
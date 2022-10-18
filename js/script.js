const breakpoint = window.matchMedia('(min-width:768px)');
let mySwiper;

function breakpointChecker() {
  if (breakpoint.matches === true) {
    if (mySwiper !== undefined) mySwiper.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    return enableSwiper();
  }
} 

function enableSwiper() {
  mySwiper = new Swiper('.swiper-container', {
    slideClass: 'card',
    loop: false,
    slidesPerView: 'auto',
    centeredSlides: false,
    a11y: true,
    keyboardControl: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

breakpoint.addEventListener('change', () => {
  breakpointChecker();
});

breakpointChecker();

const showMoreButton = document.getElementById('show-more');
const listExpanded = document.getElementById('swiper-container');
let expanded = false;

function expand() {
  if (expanded === false) {
    showMoreButton.classList.toggle('show-more--active');
    listExpanded.classList.toggle('swiper-expanded');
    showMoreButton.textContent = 'Скрыть';
    expanded = true;
  } else if (expanded === true) {
    showMoreButton.classList.toggle('show-more--active');
    listExpanded.classList.toggle('swiper-expanded');
    showMoreButton.textContent = 'Показать все';
    expanded = false;
  }
}

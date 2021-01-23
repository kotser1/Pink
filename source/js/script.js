// Открытие меню в мобильной версии

const pageHeader = document.querySelector('.page-header');
const menuToggle = document.querySelector('.main-nav__toggle');
const mainNav = document.querySelector('.main-nav');

mainNav.classList.remove('main-nav--nojs');
pageHeader.classList.add('page-header--closed');
mainNav.classList.add('main-nav--closed');

menuToggle.addEventListener('click', function() {
  if (pageHeader.classList.contains('page-header--closed')) {
    mainNav.classList.remove('main-nav--closed');
    pageHeader.classList.remove('page-header--closed');
  } else {
    mainNav.classList.add('main-nav--closed');
    pageHeader.classList.add('page-header--closed');
  }
})


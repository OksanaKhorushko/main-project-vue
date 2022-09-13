'use strict';

const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.nav .fa-xmark');
const menuList = document.querySelector('nav');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('nav-hidden');
});

closeBtn.addEventListener('click', () => {
  menuList.classList.add('nav-hidden');
});

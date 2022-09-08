'use strict';
window.addEventListener('load', () => {
  const hamburger = document.querySelector('#hamburger');
  const close = document.querySelector('#close');
  const menu = document.querySelector('#menu');

  hamburger.addEventListener('click', () => {
    hamburger.style.display = 'none';
    close.style.display = 'inline-block';
    menu.style.display = 'flex';
  });

  close.addEventListener('click', () => {
    close.style.display = 'none';
    hamburger.style.display = 'inline-block';
    menu.style.display = 'none';
  });
});

'use strict';
window.addEventListener('load', () => {
  const menuItem = document.querySelectorAll('.destination__menu__item');
  const title = document.querySelector('#title');
  const desc = document.querySelector('#desc');
  const distance = document.querySelector('#distance');
  const time = document.querySelector('#time');
  const picture = document.querySelector('#picture');
  const titleDistance = document.querySelectorAll('.info__title')[0];
  const titleTime = document.querySelectorAll('.info__title')[1];

  let destination = {};
  destination.name;
  destination.description;
  destination.distance;
  destination.time;
  destination.picture;

  menuItem.forEach((e, index) => {
    e.addEventListener('click', () => {
      resetActive();
      e.classList.remove('hover');
      e.classList.add('destination__menu__item--active');
      searchData(index);
      title.style.opacity = 0;
      desc.style.opacity = 0;
      distance.style.opacity = 0;
      time.style.opacity = 0;
      picture.style.opacity = 0;
      titleDistance.style.opacity = 0;
      titleTime.style.opacity = 0;
    });
  });

  function resetActive() {
    menuItem.forEach((e) => {
      e.classList.remove('destination__menu__item--active');
      e.classList.add('hover');
    });
  }

  function searchData(i) {
    //fetch('http://localhost:5500/app/data/data.json')
    fetch('https://faha1999.github.io/Space-tourism/app/data/data.json')
      .then((response) => response.json())
      .then((data) => {
        destination.name = data.destinations[i].name;
        destination.description = data.destinations[i].description;
        destination.distance = data.destinations[i].distance;
        destination.time = data.destinations[i].travel;
        destination.picture = data.destinations[i].images.png;

        drawData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function drawData() {
    setTimeout(() => {
      title.innerHTML = destination.name;
      desc.innerHTML = destination.description;
      distance.innerHTML = destination.distance;
      time.innerHTML = destination.time;
      picture.src = destination.picture;
      title.style.opacity = 1;
      desc.style.opacity = 1;
      distance.style.opacity = 1;
      time.style.opacity = 1;
      picture.style.opacity = 1;
      titleDistance.style.opacity = 1;
      titleTime.style.opacity = 1;
    }, 400);
  }
});

'use strict';
window.addEventListener('load', () => {
  const menuItem = document.querySelectorAll('.tech__menu li');
  const title = document.querySelector('#title');
  const desc = document.querySelector('#desc');
  const picture = document.querySelector('#picture');

  let tech = {};
  tech.title;
  tech.description;
  tech.picture;
  tech.land;

  searchData(0);
  menuItem.forEach((e, index) => {
    e.addEventListener('click', () => {
      resetActive();
      e.classList.remove('hover');
      e.classList.add('active');
      searchData(index);
      title.style.opacity = 0;
      subtitle.style.opacity = 0;
      desc.style.opacity = 0;
      picture.style.opacity = 0;
    });
  });

  function resetActive() {
    menuItem.forEach((e) => {
      e.classList.remove('active');
      e.classList.add('hover');
    });
  }

  function searchData(i) {
    //fetch('http://localhost:5500/app/data/data.json')
    fetch('https://faha1999.github.io/Space-tourism/app/data/data.json')
      .then((response) => response.json())
      .then((data) => {
        tech.title = data.technology[i].name;
        tech.description = data.technology[i].description;
        tech.land = data.technology[i].images.landscape;
        tech.picture = data.technology[i].images.portrait;
        drawData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function drawData() {
    setTimeout(() => {
      title.innerHTML = tech.title;
      desc.innerHTML = tech.description;
      if (screen.width <= 1000) {
        picture.src = tech.land;
      } else {
        picture.src = tech.picture;
      }
      title.style.opacity = 1;
      subtitle.style.opacity = 1;
      desc.style.opacity = 1;
      picture.style.opacity = 1;
    }, 400);
  }
  window.addEventListener('resize', () => {
    if (screen.width <= 1000) {
      picture.src = tech.land;
    } else {
      picture.src = tech.picture;
    }
  });
});

'use strict';
window.addEventListener('load', () => {
  buildMenu();
  function buildMenu() {
    for (var i = 0; i < 4; i++) {
      let control = document.createElement('li');
      i == 0 ? control.classList.add('active') : control.classList.add('hover');
      document.querySelector('.crew__menu ul').appendChild(control);
    }
  }

  const menuItem = document.querySelectorAll('.crew__menu li');
  const title = document.querySelector('#title');
  const subtitle = document.querySelector('#subtitle');
  const desc = document.querySelector('#desc');
  const picture = document.querySelector('#picture');

  let crew = {};
  crew.title;
  crew.subtitle;
  crew.description;
  crew.picture;

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
        crew.title = data.crew[i].role;
        crew.subtitle = data.crew[i].name;
        crew.description = data.crew[i].bio;
        crew.picture = data.crew[i].images.png;
        drawData();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  function drawData() {
    setTimeout(() => {
      title.innerHTML = crew.title;
      subtitle.innerHTML = crew.subtitle;
      desc.innerHTML = crew.description;
      picture.src = crew.picture;
      title.style.opacity = 1;
      subtitle.style.opacity = 1;
      desc.style.opacity = 1;
      picture.style.opacity = 1;
    }, 400);
  }
});

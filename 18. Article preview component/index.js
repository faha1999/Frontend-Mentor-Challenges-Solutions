const shareButton = document.querySelector('#shareBtn');
const shareBox = document.querySelector('#shareBox');

shareButton.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  shareBox.classList.toggle('show');
});

document.body.addEventListener('click', () => {
  if (shareBox.classList.contains('show')) {
    shareBox.classList.remove('show');
  }
});

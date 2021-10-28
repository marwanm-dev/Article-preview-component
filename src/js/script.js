const container = document.querySelector('#container');
const shareBox = document.querySelector('.share-box');
const shareIcon = document.querySelector('.share-icon');

shareIcon.addEventListener('click', () => {
  container.classList.toggle('active');
});

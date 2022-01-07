import refs from './refs';

console.log(`refs.navMenuLink`, refs.navMenuLink);
refs.navMenuLink.forEach(e => e.addEventListener('click', toggleModal));

function toggleModal(e) {
  e.target.nextElementSibling.classList.toggle('show');
  e.target.parentNode.classList.toggle('open');
}

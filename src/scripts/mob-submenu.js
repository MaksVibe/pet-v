// FOOTER submenu toggle
import refs from './refs';

refs.navMenuLink.forEach(e => e.addEventListener('click', toggleModal));

function toggleModal(e) {
  e.target.nextElementSibling.classList.toggle('show');
  e.target.parentNode.classList.toggle('open');
}

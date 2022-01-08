import refs from './refs';

const markup = `
<div class="backdrop"></div>
<div class="mobile-menu">
    <button class="close_btn" type="button" id="close_btn">
    </button>
  <span class="mobile-menu__logo">Aurora</span>
  <ul class="mobile-menu__list">
    <li class="mobile-menu__item"><a href="/" class="mobile-menu__link">what's new</a></li>
    <li class="mobile-menu__item"><a href="/" class="mobile-menu__link">women</a></li>
    <li class="mobile-menu__item"><a href="/" class="mobile-menu__link">accessories</a></li>
    <li class="mobile-menu__item"><a href="/" class="mobile-menu__link">kids</a></li>
    <li class="mobile-menu__item"><a href="/" class="mobile-menu__link">beauty</a></li>
    <li class="mobile-menu__item"><a href="/" class="mobile-menu__link">outlet</a></li>
    <li class="mobile-menu__item"><a href="/" class="mobile-menu__link">stories</a></li>
  </ul>
  <p class="mobile-menu__log"><a href="">Sign in</a> | <a href="">Register</a></p>
</div>`;

const onClkickShowModal = e => {
  e.preventDefault();
  refs.navMenu.classList.toggle('visually-hidden');

  refs.navMenu.innerHTML = markup;
  return;
};

const closeMobileMenu = e => {
  e.preventDefault();
  if (e.target.id.includes('close_btn')) {
    refs.navMenu.classList.toggle('visually-hidden');
    refs.navMenu.innerHTML = '';
  }
};

// Open modal
refs.burgerMenu.addEventListener('click', onClkickShowModal);
// Close modal
refs.navMenu.addEventListener('click', closeMobileMenu);

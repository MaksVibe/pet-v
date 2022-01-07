import refs from './refs';

let isOpenMenu = false;
const markup = `<div class="backdrop"></div>
<div class="mobile-menu">
  <span class="mobile-menu__logo">Aurora</span>
  <ul class="mobile-menu__list">
    <li class="mobile-menu__item"><a href="/">what's new</a></li>
    <li class="mobile-menu__item"><a href="/">women</a></li>
    <li class="mobile-menu__item"><a href="/">accessories</a></li>
    <li class="mobile-menu__item"><a href="/">kids</a></li>
    <li class="mobile-menu__item"><a href="/">beauty</a></li>
    <li class="mobile-menu__item"><a href="/">outlet</a></li>
    <li class="mobile-menu__item"><a href="/">stories</a></li>
  </ul>
  <p class="mobile-menu__log"><a href="">Sign in</a> | <a href="">Register</a></p>
</div>`;

const onClkickShowModal = e => {
  e.preventDefault();
  if (isOpenMenu) return false;

  renderMobMenu();
};

const renderMobMenu = () => {
  isOpenMenu = true;
  refs.navMenu.innerHTML = markup;
};

refs.burgerMenu.addEventListener('click', onClkickShowModal);

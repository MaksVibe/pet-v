import refs from './refs';

const markup = title => `
<div class="backdrop"></div>
<div class="sub-menu">
    <button class="close_btn" type="button" id="close_btn">
    </button>
  <span class="sub-menu__logo">Aurora</span>
  <ul class="sub-menu__list">
    <li class="sub-menu__item">
    <button class="goback_btn" type="button" id="goback_btn">
    </button>${title}</li>
    <li class="sub-menu__item"><a href="/" class="sub-menu__link">item 1</a></li>
    <li class="sub-menu__item"><a href="/" class="sub-menu__link">item 2</a></li>
    <li class="sub-menu__item"><a href="/" class="sub-menu__link">item 3</a></li>
    <li class="sub-menu__item"><a href="/" class="sub-menu__link">item 4</a></li>
  </ul>
  <p class="sub-menu__log"><a href="">Sign in</a> | <a href="">Register</a></p>
</div>`;

const onClkickShowList = e => {
  e.preventDefault();
  const subMenuTitle = e.target.textContent;

  refs.subMenu.classList.toggle('visually-hidden');
  //   refs.subMenu.innerHTML = markup(subMenuTitle);

  switch (subMenuTitle) {
    case "what's new":
      refs.subMenu.innerHTML = markup(subMenuTitle);
      break;
    case 'women':
      break;
    case 'accessories':
      break;
    case 'kids':
      break;
    case 'beauty':
      break;
    case 'outlet':
      break;
    case 'stories':
      break;

    default:
      break;
  }
};

const closeMobileMenu = e => {
  e.preventDefault();
  if (e.target.id.includes('goback_btn')) {
    refs.subMenu.classList.toggle('visually-hidden');
    refs.subMenu.innerHTML = '';
    return;
  }
  if (e.target.id.includes('close_btn')) {
    refs.navMenu.classList.toggle('visually-hidden');
    refs.navMenu.innerHTML = '';
    refs.subMenu.classList.toggle('visually-hidden');
    refs.subMenu.innerHTML = '';
    return;
  }
};

// Open modal
refs.navMenu.addEventListener('click', onClkickShowList);
// Close modal
refs.subMenu.addEventListener('click', closeMobileMenu);

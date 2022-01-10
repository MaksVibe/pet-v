import refs from './refs';

refs.searchBtn.addEventListener('click', toggleModal);
document.addEventListener('click', handler);
refs.closeSearchBarBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.searchBar.classList.toggle('visually-hidden');
  refs.searchBtn.classList.toggle('visually-hidden');
  refs.closeSearchBarBtn.classList.toggle('visually-hidden');
}

function handler(e) {
  if (!e.target.closest('header') && e.target !== refs.closeSearchBarBtn) {
    refs.searchBar.classList.add('visually-hidden');
    refs.searchBtn.classList.remove('visually-hidden');
    refs.closeSearchBarBtn.classList.add('visually-hidden');
  }
}

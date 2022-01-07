import refs from './refs';

refs.searchBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.searchBar.classList.toggle('visually-hidden');
}

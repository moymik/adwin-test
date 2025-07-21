export function initDropdownMenu() {
  const toggle = document.querySelector('.header__menu-button');
  const menu = document.querySelector('.header__nav');
  toggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('header__nav--open');
  });
  // Закрытие при клике вне меню
  document.addEventListener('click', (e) => {
    // Проверяем что кликнули не по меню и не по кнопке
    if (!e.target.closest('.header__nav') && !e.target.closest('.header__menu-button')) {
      menu.classList.remove('header__nav--open');
    }
  });

  // Закрытие по ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menu.classList.remove('header__nav--open');
    }
  });
}

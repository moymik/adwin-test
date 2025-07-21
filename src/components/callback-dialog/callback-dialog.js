export function initCallbackDialog() {
  const dialog = document.getElementById('callback-dialog');
  const openButtons = document.querySelectorAll(".header__callback-button");

  // Проверяем, что элементы существуют
  if (!dialog || !openButtons) {
    console.error('Не найдены необходимые элементы для callback dialog');
    return;
  }

  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      dialog.showModal();
    });
  })

  // Закрытие при клике вне диалога
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      dialog.close();
    }
  });

  // Закрытие по ESC (добавлено для удобства)
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dialog.close();
    }
  });

}
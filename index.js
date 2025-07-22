import {loadComponent} from "/src/js/utils/loadComponent.js";
import {initCallbackDialog} from "/src/components/callback-dialog/callback-dialog.js";
import {initDropdownMenu} from "/src/components/app-header/app-header.js";

async function initApp() {
  try {
    //TODO: по хорошему тут диалог не обяхательно подгружать сразу, а после открытия
    await Promise.all([
      loadComponent('app-header'),
      loadComponent('app-main'),
      loadComponent('app-footer'),
      loadComponent('callback-dialog')
    ]).then(([header, main, footer, dialog]) => {
      document.querySelector('.app-header').innerHTML = header;
      document.querySelector('.app-main').innerHTML = main;
      document.querySelector('.app-footer').innerHTML = footer;
      document.querySelector('.callback-dialog').innerHTML = dialog;
    });

    initDropdownMenu();
    initCallbackDialog();
  } catch (error) {
    showFatalError()
    throw error;
  }
}

function showFatalError() {
  document.querySelector('.app-main').innerHTML = `
    <div class="error-message">
      <h2>Произошла ошибка</h2>
      <p>Попробуйте перезагрузить страницу</p>
      <button onclick="window.location.reload()">Обновить</button>
    </div>
  `;
}


document.addEventListener('DOMContentLoaded', async () => {
  try {
    await initApp();
  } catch (error) {
    console.error('App initialization failed:', error);
  }
});
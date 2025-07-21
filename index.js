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
      document.getElementById('app-header').innerHTML = header;
      document.getElementById('app-main').innerHTML = main;
      document.getElementById('app-footer').innerHTML = footer;
      document.getElementById('callback-dialog').innerHTML = dialog;
    });

    initDropdownMenu();
    initCallbackDialog();
  } catch (error) {
    console.error('Ошибка загрузки компонентов:', error);
    alert('Произошла ошибка при загрузке страницы. Пожалуйста, попробуйте позже.')
  }
}




initApp();
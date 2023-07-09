import {
  inputTheme,
  form,
} from './elements.js';

import {addThemeLocalStorage} from './handLocalStorage.js'

import { changeThemeCalculator } from './changeThemeCalculator.js';

export const changeTheme = () => {inputTheme.addEventListener('input', function() {

  /* ChangeTheme LocalStorage */
  addThemeLocalStorage(inputTheme.value);

  changeThemeCalculator(inputTheme.value);

}, false); };

export const formUndefault = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  })
}

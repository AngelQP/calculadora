import {inputTheme} from './elements.js'
import { changeThemeCalculator } from './changeThemeCalculator.js';


let localStorage = window.localStorage;
const calcTheme = localStorage.getItem('calc-theme');

export function initLocalStorage() {
  
  if(!calcTheme) {
    localStorage.setItem('calc-theme', '1');
  }
  else {
    const value = localStorage.getItem('calc-theme');
    inputTheme.value = value;
    changeThemeCalculator(value);
  }
}

export function addThemeLocalStorage(value){
  localStorage.setItem('calc-theme', value);
}

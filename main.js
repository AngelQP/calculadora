import {changeTheme, formUndefault} from './helpers/events.js';
import {btnsTheme, btnBorrar, btnReset, boxResult, btnResult, alertResult} from './helpers/elements.js';

changeTheme();
formUndefault();

document.addEventListener('keydown', (event) => {
  const keyValue = event.key;

  const regex = /([0-9.+-/*])+/g;
  const found = keyValue.match(regex);

  if(keyValue == 'Enter') {
    operateArray();
  }
  if(keyValue == 'Escape'){
    resetArray();
  }
  if(keyValue == 'Backspace'){
    delArray();
  }
  if(found){
    const letter = (found[0] == '*' ? 'x' : found.pop());
    addArray(letter)
  }
}, false);

const operations = ["+", "-", "x", "/"];
let containNumbers = ['0'];
let number = '';


btnBorrar.addEventListener('click', () => {
  delArray();
})

btnReset.addEventListener('click', () => {
  resetArray();
})

btnsTheme.map(btn => {
  btn.addEventListener('click', () => {
    addArray(btn.value);
  })
})

btnResult.addEventListener('click', () => {
  operateArray();
})

function addArray(print) {

  const ultimoIndice = containNumbers.length -1;

  if(isNaN(print) && print != '.') { // true : No es un numero y no es punto

    // Si el signo esta repetido
    if(operations.includes(containNumbers[ultimoIndice]) && operations.includes(print)) {
      containNumbers[ultimoIndice] = print;
      paintBox(containNumbers.join(''));
    }
    else {
      containNumbers.push(print);
      paintBox(containNumbers.join(''));
      containNumbers.push('0');
    }

    return;
  }

  else {

    const lastNumber = containNumbers[ultimoIndice];

    if(!(isNaN(lastNumber)) && print != '.'){ // true : Si es un numero (asi sea un punto)
      number = containNumbers.pop();

      // Compara si el digito inicia con cero
      if(number === '0') {
        number === '0' ? number = print : number += print;
      }
      
      else {
        number += print;
      }
      
      containNumbers.push(number);
    }

    // TODO: agregar mas ceros despues del '.'
    else if(print === '.') {

      number = containNumbers.pop();

      if(!number.includes(print)) { // si el punto no esta incluido
        number += print;
        containNumbers.push(number);
      }
      else {
        containNumbers.push(number);
      }

    }

    else {
      containNumbers.push(print);
    }
    
    paintBox(containNumbers.join(''));
  }

}

function delArray() { 

  let numberPop = containNumbers.pop();
  
  if(containNumbers.length == 0) {

    numberPop = numberPop.split('');

    if(numberPop.length == 1){
      resetArray();
      return;
    }
    else {
      numberPop.pop();
      numberPop = numberPop.join('');
      containNumbers.push(numberPop);
    }

    paintBox(containNumbers.join(''));
    return;
  }
  

  if(!isNaN(numberPop)){ // si es numero

    // console.log(numberPop);
    numberPop = numberPop.split('');

    if(numberPop.length == 1) {
      numberPop.pop();
    }
    else {
      numberPop.pop();
      numberPop = numberPop.join('');
      containNumbers.push(numberPop);
    }

    paintBox(containNumbers.join('')); 
    return;
  }

  else {
    paintBox(containNumbers.join(''))
  }

}

function resetArray() {
  containNumbers = ['0'];
  number = '';
  paintBox('0');
}

function operateArray() {

  while(
    containNumbers.includes('+') ||
    containNumbers.includes('-') ||
    containNumbers.includes('x') ||
    containNumbers.includes('/') 
    ) {
    const divOperator = containNumbers.indexOf('/');
    const mulOperator = containNumbers.indexOf('x');
    const sumOperator = containNumbers.indexOf('+');
    const resOperator = containNumbers.indexOf('-');
    let indexOperator;
    let result;

    if((divOperator > mulOperator && mulOperator == -1) || (divOperator < mulOperator && divOperator != -1)) {
      result = operation(containNumbers[divOperator-1],containNumbers[divOperator+1],containNumbers[divOperator]);
      indexOperator = divOperator;
    }
    else if((mulOperator > divOperator && divOperator == -1) || (mulOperator < divOperator && mulOperator != -1)) {
      result = operation(containNumbers[mulOperator-1],containNumbers[mulOperator+1],containNumbers[mulOperator]);
      indexOperator = mulOperator;
    }

    else if(sumOperator != -1) {
      result = operation(containNumbers[sumOperator-1],containNumbers[sumOperator+1],containNumbers[sumOperator]);
      indexOperator = sumOperator;
    }
    else {
      result = operation(containNumbers[resOperator-1],containNumbers[resOperator+1],containNumbers[resOperator]);
      indexOperator = resOperator;
    }

    if(result == 'Infinity' || result == 'NaN') {
      paintBox(containNumbers.join(''));
      alertResult.classList.remove('invisible');
      alertResult.classList.add('visible');
      setTimeout(() => {
        alertResult.classList.remove('visible');
        alertResult.classList.add('invisible');
      }, 3000);
      return;
    }
    else {
      containNumbers.splice(indexOperator-1,3,result);
    }
    

  }
  paintBox(containNumbers.join(''));
  number='';

}

function paintBox( text ) {
  boxResult.innerHTML = text;
}

function operation(valor1, valor2, operator) {
  const x = parseFloat(valor1);
  const y = parseFloat(valor2);
  let result;

  switch (operator) {
    case '/':
      result = x / y;
      break;
    case 'x':
      result = x * y;
      break;
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
  }

  return result.toString();
}

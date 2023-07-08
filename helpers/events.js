import {
  body,
  header,
  inputTheme,
  boxResult,
  form,
  btnsTheme,
  btnsLetters,
  btnResult,
  footerText,
} from './elements.js';


export const changeTheme = () => {inputTheme.addEventListener('input', function() {

  if(inputTheme.value == 2) {
    /* Body */
    body.classList.remove("body--theme1");
    body.classList.remove("body--theme3");
    body.classList.add("body--theme2");

    /* Header */
    header.classList.remove("header--theme1");
    header.classList.remove("header--theme3");
    header.classList.add("header--theme2");

    /* inputTheme */
    inputTheme.classList.remove("range-theme--theme1");
    inputTheme.classList.remove("range-theme--theme3");
    inputTheme.classList.add("range-theme--theme2");

    /* boxResult */
    boxResult.classList.remove("box-result--theme1");
    boxResult.classList.remove("box-result--theme3");
    boxResult.classList.add("box-result--theme2");

    /* form */
    form.classList.remove("form--theme1");
    form.classList.remove("form--theme3");
    form.classList.add("form--theme2");

    /* btnsTheme */
    btnsTheme.map(btn => {
      btn.classList.remove("btn--theme1");
      btn.classList.remove("btn--theme3");
      btn.classList.add("btn--theme2");
    } );

    /* btnsLetters */
    btnsLetters.map(btn => {
      btn.classList.remove("btn-options--theme1");
      btn.classList.remove("btn-options--theme3");
      btn.classList.add("btn-options--theme2");
    })

    /* btnFooter */
    btnResult.classList.remove("btn-result--theme1");
    btnResult.classList.remove("btn-result--theme3");
    btnResult.classList.add("btn-result--theme2");

    /* footerText */
    footerText.classList.remove("text--theme1");
    footerText.classList.remove("text--theme3");
    footerText.classList.add("text--theme2");

  } else if(inputTheme.value == 3) {
    /* Body */
    body.classList.remove("body--theme1");
    body.classList.remove("body--theme2");
    body.classList.add("body--theme3");

    /* Header */
    header.classList.remove("header--theme1");
    header.classList.remove("header--theme2");
    header.classList.add("header--theme3");

    /* inputTheme */
    inputTheme.classList.remove("range-theme--theme1");
    inputTheme.classList.remove("range-theme--theme2");
    inputTheme.classList.add("range-theme--theme3");

    /* boxResult */
    boxResult.classList.remove("box-result--theme1");
    boxResult.classList.remove("box-result--theme2");
    boxResult.classList.add("box-result--theme3");

    /* form */
    form.classList.remove("form--theme1");
    form.classList.remove("form--theme2");
    form.classList.add("form--theme3");

    /* btnsTheme */
    btnsTheme.map(btn => {
      btn.classList.remove("btn--theme1");
      btn.classList.remove("btn--theme2");
      btn.classList.add("btn--theme3");
    } );

    /* btnsLetters */
    btnsLetters.map(btn => {
      btn.classList.remove("btn-options--theme1");
      btn.classList.remove("btn-options--theme2");
      btn.classList.add("btn-options--theme3");
    })

    /* btnFooter */
    btnResult.classList.remove("btn-result--theme1");
    btnResult.classList.remove("btn-result--theme2");
    btnResult.classList.add("btn-result--theme3");
    
    /* footerText */
    footerText.classList.remove("text--theme1");
    footerText.classList.remove("text--theme2");
    footerText.classList.add("text--theme3");
    console.log(footerText)

    
  } else {
    /* Body */
    body.classList.remove("body--theme2");
    body.classList.remove("body--theme3");
    body.classList.add("body--theme1");

    /* Header */
    header.classList.remove("header--theme2");
    header.classList.remove("header--theme3");
    header.classList.add("header--theme1");

    /* inputTheme */
    inputTheme.classList.remove("range-theme--theme2");
    inputTheme.classList.remove("range-theme--theme3");
    inputTheme.classList.add("range-theme--theme1");

    /* boxResult */
    boxResult.classList.remove("box-result--theme2");
    boxResult.classList.remove("box-result--theme3");
    boxResult.classList.add("box-result--theme1");

    /* form */
    form.classList.remove("form--theme2");
    form.classList.remove("form--theme3");
    form.classList.add("form--theme1");

    /* btnsTheme */
    btnsTheme.map(btn => {
      btn.classList.remove("btn--theme2");
      btn.classList.remove("btn--theme3");
      btn.classList.add("btn--theme1");
    } );

    /* btnsLetters */
    btnsLetters.map(btn => {
      btn.classList.remove("btn-options--theme2");
      btn.classList.remove("btn-options--theme3");
      btn.classList.add("btn-options--theme1");
    })

    /* btnFooter */
    btnResult.classList.remove("btn-result--theme2");
    btnResult.classList.remove("btn-result--theme3");
    btnResult.classList.add("btn-result--theme1");

    /* footerText */
    footerText.classList.remove("text--theme2");
    footerText.classList.remove("text--theme3");
    footerText.classList.add("text--theme1");
    
  }
}, false); };

export const formUndefault = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
  })
}

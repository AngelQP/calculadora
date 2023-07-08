const $ = (target) => document.querySelector(target);
const $All = (target) => document.querySelectorAll(target);

export const body = $("#body");
export const header = $("#header");
export const inputTheme = $("#inputTheme");
export const boxResult = $("#box-result");
export const alertResult = $("#alert-result");
export const form = $("#form");
export const btnsTheme = [... $All(".btn-operation")];
export const btnsLetters = [...$All(".btn-letters")];
export const btnResult = $("#btn-result")
export const footerText = $("#footer-text")
export const btnBorrar = $("#btn-borrar")
export const btnReset = $("#btn-reset")




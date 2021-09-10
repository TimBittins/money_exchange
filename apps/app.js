"use strict";

//* BASIC SETUP
const log = console.log.bind(console);
// log("start");
function getSelector(getElement) {
  const element = document.querySelector(getElement);
  if (element) {
    return element;
  } else {
    throw Error(`There is no element called ${getElement}`);
  }
}
function getSelectors(getElements) {
  const elements = document.querySelectorAll(getElements);
  if (elements) {
    return elements;
  } else {
    throw Error(`There is no elements called ${getElement}`);
  }
}
function getID(getID) {
  const element = document.getElementById(getID);
  if (element) {
    return element;
  } else {
    throw Error(`There is no ID called ${getID}`);
  }
}

//* CALCULATION
const rateEuro = 1;
const rateFranks = 1.08;
const ratePound = 0.86;
const rateDollar = 1.18;
const base = 1;
const currencyRates = [rateEuro, rateFranks, ratePound, rateDollar];

function calculateConversion(inputRate, value, rates) {
  let convertedRates = [];
  for (let rate of rates) {
    let calc = (base / inputRate) * value * rate;
    convertedRates.push(calc.toFixed(2));
  }
  return convertedRates;
}

const conversion = calculateConversion(rateDollar, 1, currencyRates);
log(conversion);

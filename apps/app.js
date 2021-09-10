"use strict";

// ----------------------------------------------------------------------

//* BASIC SETUP
const log = console.log.bind(console);
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

// ----------------------------------------------------------------------

//* GLOBAL VARIABLES
const inputBtns = [...getSelectors(".btn")];

// ----------------------------------------------------------------------

//* DOM EVENTS
inputBtns.forEach((button) => {
  selectInputCurrency(button);
  setOutputCurrencies(button);
});

function selectInputCurrency(button) {
  button.addEventListener("click", function (e) {
    // highlight current button
    button.classList.add("btn--current");
    getSelectors(".btn").forEach((button) => {
      if (button !== e.currentTarget) {
        button.classList.remove("btn--current");
      }
    });

    // display input currency name
    let currencyName = button.dataset.currency;
    getID("currencyInputName").innerHTML = `${currencyName}`;
  });
}

function setOutputCurrencies(button) {
  button.addEventListener("click", function (e) {
    function getOutputCurrency(currencies) {
      const outputCurrenciesArray = inputBtns.filter(
        (outputContent) => outputContent !== e.currentTarget
      );

      currencies = [];
      outputCurrenciesArray.forEach((outputElement) => {
        const outputName = outputElement.dataset.currency;
        currencies.push(outputName);
      });
      return currencies;
    }
    const outputCurrencies = getOutputCurrency();

    function setOutputCurrency(array) {
      const outputElements = [...getSelectors(".output__name")];
      outputElements.forEach(() => {
        for (let i = 0; i < outputElements.length; i++)
          outputElements[i].innerHTML = array[i];
      });
    }
    setOutputCurrency(outputCurrencies);
  });
}

// ----------------------------------------------------------------------

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
// log(conversion);

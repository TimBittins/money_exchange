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
const outputs = [...getSelectors(".output__value")];

const euro = { name: "Euro", rate: 1, unit: "EUR" };
const franks = { name: "Franken", rate: 1.08, unit: "CHF" };
const pound = { name: "Pfund", rate: 0.86, unit: "£" };
const dollar = { name: "Dollar", rate: 1.18, unit: "$" };
const allCurrencies = [euro, franks, pound, dollar];

let inputCurrency = "";
let outputCurrencies = "";
let currentValue = null;

//* DOM EVENTS
inputBtns.forEach((button) => {
  styleInputCurrency(button);
});

function styleInputCurrency(button) {
  button.addEventListener("click", function (e) {
    // highlight current button
    button.classList.add("btn--current");
    getSelectors(".btn").forEach((button) => {
      if (button !== e.currentTarget) {
        button.classList.remove("btn--current");
      }
    });
  });
}

function selectCurrencies(this_currency) {
  // set input currency
  inputCurrency = this_currency;
  getID("currencyInputName").innerHTML = `${inputCurrency}`;

  // set output currencies
  outputCurrencies = allCurrencies.filter(function (element) {
    return element.name !== inputCurrency;
  });

  // display output currencies
  const outputElements = [...getSelectors(".output__name")];
  outputElements.forEach(() => {
    for (let i = 0; i < outputElements.length; i++)
      outputElements[i].innerHTML = outputCurrencies[i].name;
  });
  // reset all values
  outputs.forEach((value) => (value.innerHTML = 0));
  currentValue = null;
  return inputCurrency;
}

// ----------------------------------------------------------------------

//* CALCULATION
currentValue = getID("currencyInputValue");
let inputValue = 0;

// calculate and set outputs
currentValue.addEventListener("input", function (currentValue) {
  // set input currency for display and calculation
  const inputRate = allCurrencies.filter(function (element) {
    return element.name === inputCurrency;
  })[0].rate;
  log(inputCurrency);

  log(inputRate);

  function calculateConversion(inputCurrency, inputValue, allCurrencies) {
    currentValue = getID("currencyInputValue");
    inputValue = currentValue.value;
    log(inputValue);

    //calculate
    const base = 1;
    const convertedRates = [];

    for (let currency of outputCurrencies) {
      let calc = (base / 3) * currentValue * currency;
      //   log(calc);
      convertedRates.push(calc.toFixed(2));
    }

    // return convertedRates;
    // log(convertedRates);
  }

  const conversions = calculateConversion(
    inputCurrency,
    currentValue,
    allCurrencies
  );

  //   log(conversions);
});

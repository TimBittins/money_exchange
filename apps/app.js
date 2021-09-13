"use strict";

// ----------------------------------------------------------------------

//* UTILITIES
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
// let currentValue = null;

// ----------------------------------------------------------------------

//* HIDE ELEMENTS
getSelector(".input").style.visibility = "hidden";
getSelector(".output").style.visibility = "hidden";

// ----------------------------------------------------------------------

//* DOM EVENTS
inputBtns.forEach((button) => {
  styleInputCurrency(button);
  showInput(button);
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
  getID("currencyInputValue").value = null;
  return inputCurrency;
}

// show input section
function showInput(button) {
  button.addEventListener("click", function (e) {
    getSelector(".input").style.visibility = "visible";
  });
}
// ----------------------------------------------------------------------

//* CALCULATION
let currentValue = getID("currencyInputValue");

currentValue.addEventListener("input", function (currentValue) {
  // show output section
  getSelector(".output").style.visibility = "visible";

  // set rate for calculation
  const inputRate = allCurrencies.filter(function (element) {
    return element.name === inputCurrency;
  })[0].rate;

  // set value for calculation
  currentValue = getID("currencyInputValue");
  let inputValue = currentValue.value;

  //calculate
  function calculateConversion(rate, value, outputArray) {
    const base = 1;
    const convertedRates = [];
    log(`inputcurrency is ${inputCurrency}`);
    log(`inputrate is ${rate}`);
    log(`inputvalue is ${value}`);
    log(`outputcurrencies are ${outputArray}`);

    for (let currency of outputArray) {
      let calc = (base / rate) * value * currency.rate;
      // log(calc);
      convertedRates.push(calc.toFixed(2));
    }

    return convertedRates;
  }

  calculateConversion(inputRate, inputValue, outputCurrencies);

  // display output values
  outputs.forEach(() => {
    for (let i = 0; i < outputs.length; i++)
      outputs[i].innerHTML = calculateConversion(
        inputRate,
        inputValue,
        outputCurrencies
      )[i];
  });
});

"use strict";

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

const inputBtns = [...getSelectors(".btn")];
const outputs = [...getSelectors(".output__value")];
const euro = { name: "Euro", rate: 1, unit: "€" };
const franks = { name: "Franken", rate: 1.08, unit: "CHF" };
const pound = { name: "Pfund", rate: 0.86, unit: "£" };
const dollar = { name: "Dollar", rate: 1.18, unit: "$" };
const allCurrencies = [euro, franks, pound, dollar];
let inputCurrency = "";
let outputCurrencies = "";

getSelector(".input").style.visibility = "hidden";
getSelector(".output").style.visibility = "hidden";

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
  inputCurrency = this_currency;
  getID("currencyInputName").innerHTML = `${inputCurrency}`;

  outputCurrencies = allCurrencies.filter(function (element) {
    return element.name !== inputCurrency;
  });

  const outputElements = [...getSelectors(".output__name")];
  outputElements.forEach(() => {
    for (let i = 0; i < outputElements.length; i++)
      outputElements[i].innerHTML = outputCurrencies[i].name;
  });

  outputs.forEach((value) => (value.innerHTML = 0));
  getID("currencyInputValue").value = null;
  return inputCurrency;
}

function showInput(button) {
  button.addEventListener("click", function (e) {
    getSelector(".input").style.visibility = "visible";
  });
}

let currentValue = getID("currencyInputValue");

currentValue.addEventListener("input", function (currentValue) {
  getSelector(".output").style.visibility = "visible";

  const inputRate = allCurrencies.filter(function (element) {
    return element.name === inputCurrency;
  })[0].rate;

  currentValue = getID("currencyInputValue");
  let inputValue = currentValue.value;

  function calculateConversion(rate, value, outputArray) {
    const base = 1;
    const convertedRates = [];

    for (let currency of outputArray) {
      let calc = (base / rate) * value * currency.rate;
      convertedRates.push(calc.toFixed(2));
    }

    return convertedRates;
  }

  calculateConversion(inputRate, inputValue, outputCurrencies);

  log(outputCurrencies);
  outputs.forEach(() => {
    for (let i = 0; i < outputs.length; i++)
      outputs[i].innerHTML =
        calculateConversion(inputRate, inputValue, outputCurrencies)[i] +
        " " +
        outputCurrencies[i].unit;
  });
});

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
const currencyInput = getID("currencyInput");

// ----------------------------------------------------------------------

//* DOM EVENTS
inputBtns.forEach((button) => {
  selectInputCurrency(button);
  setOutputCurrencies(button);
  displayOutputValues(button);
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

// display outputs
function displayOutputValues(button) {
  button.addEventListener("click", function (e) {
    inputBtns.filter((calcCurr) => calcCurr !== e.currentTarget);
  });
}
outputs.forEach((value) => (value.innerHTML = 0));

// ----------------------------------------------------------------------

//* CALCULATION
// create currency objects
function Currency(name, rate, unit) {
  (this.name = name), (this.rate = rate), (this.unit = unit);
}
const euro = new Currency("Euro", 1, "EUR");
const franks = new Currency("Franken", 1.08, "CHF");
const pound = new Currency("Pfund", 0.86, "£");
const dollar = new Currency("Dollar", 1.18, "$");

const currencies = [euro, franks, pound, dollar];

// set current currency
let currentCurrency = "";

function selectEuro() {
  return (currentCurrency = "Euro");
}
function selectFranken() {
  return (currentCurrency = "Franken");
}
function selectPfund() {
  return (currentCurrency = "Pfund");
}
function selectDollar() {
  return (currentCurrency = "Dollar");
}


  currencyInput.addEventListener("input", function () {
    const currentValue = currencyInput.value;
    // log(currentValue);

    function calculateConversion(inputCurrency, currentValue, array) {
      log(inputCurrency)
      log(currentValue)
      log(array[2].rate)

      // const base = 1;
      // const convertedRates = [];
      // log(currencies)
      // for (let key of array) {
      //   let calc = (base / inputCurrency) * currentValue * key;
      //   convertedRates.push(calc.toFixed(2));
      // }

      // return convertedRates;
    }

    const conversions = calculateConversion(currentCurrency, 1, currencies);
    // log(conversions)
  });


// log(conversions)

// function calculateConversion(inputRate, currentValue, rates) {
//   const base = 1;
//   const convertedRates = [];
//   for (let rate of rates) {
//     let calc = (base / inputRate) * currentValue * rate;
//     convertedRates.push(calc.toFixed(2));
//   }
//   return convertedRates;
// }
// const conversions = calculateConversion(franks.rate, 1, currencies);

// function getherCalculation(button) {
//   // button.addEventListener("click", function (e) {
//   //   let inputRate = button.dataset.currency;
//   // });
//   let inputRate = button.dataset.currency;
//   log(inputRate);
//   currencyInput.addEventListener("input", function (button) {
//     const currentValue = currencyInput.value;
//     log(currentValue);
//     // let inputRate = getherCalculation(button);
//     function calculateConversion(inputRate, currentValue, rates) {
//       const base = 1;
//       const convertedRates = [];
//       for (let rate of rates) {
//         let calc = (base / inputRate) * currentValue * rate;
//         convertedRates.push(calc.toFixed(2));
//       }
//       return convertedRates;
//     }

//     // const conversions = calculateConversion(franks.rate, currentValue, currencies);
//   });
// }

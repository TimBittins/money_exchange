"use strict";

//* BASIC SETUP
const log = console.log.bind(console);
log("start");
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

//* VARIABLE SETUP
const calcContainer = getSelector(".container--calculate");
const output = getSelector(".output");
const inputBtns = [...getSelectors(".btn")];

//* HIDE OUTPUT ELEMENTS
// calcContainer.style.visibility = "hidden";
// output.style.visibility = "hidden";

//* SHOW OUTPUT ELEMENTS
inputBtns.forEach((button) => {
  button.addEventListener("click", function (e) {
    // This shows the Calculation Container by clicking a button
    calcContainer.style.visibility = "visible";

    // This highlights the current Button and unsets the rest
    button.classList.add("btn--current");
    getSelectors(".btn").forEach((button) => {
      if (button !== e.currentTarget) {
        button.classList.remove("btn--current");
      }
    });

    // This displays the Input Currency Name
    let currencyName = button.dataset.currency;
    getID("currencyInputName").innerHTML = `${currencyName}`;

    // This displays the Output Currency Names
    const outputNamesArray = inputBtns.filter(
      (outputText) => outputText !== e.currentTarget
    );
    outputNamesArray.forEach((outputName) => {

    })

    function setOutputNames(array, outputName) {
      // for (let key in array) {
      // if (inputBtns[key] !== outputName)
      // log(inputBtns[key]);
      // }
    }
    setOutputNames();
  });
});

// This shows the Output Container by entering a number
getID("currencyInput").addEventListener("input", function () {
  getSelector(".output").style.visibility = "visible";
});

//* SHOW OUTPUT CONTENT
// getID("currencyInput").value = null;
// function showOutputName() {
//   const outputName = getID("outputName");
//   const selectCurrency = (currency) => {
//     currency = getSelectors(".btn").forEach((button) => {
//       button.dataset.currency;
//       return log(currency);
//     });
//   };
// }
// getID("outputName").innerHTML = 0;
// getID("outputValue").innerHTML = 0;

showOutputName();

//     document.getElementById("currencyInputName").innerHTML = "Euro:";
//     document.getElementById("currencyOutputNameOne").innerHTML = "Franken:";
//     document.getElementById("currencyOutputNameTwo").innerHTML = "Pfund:";
//     document.getElementById("currencyOutputNameThree").innerHTML = "Dollar:";

//     document.getElementById("currencyInput").addEventListener("input", function(e){
//         // document.getElementById('output').style.display = 'block'; //Show Output

//         let euro = e.target.value; //Calculate
//         document.getElementById("firstOutput").innerHTML = (euro * 1.1).toFixed(2); //Franken
//         document.getElementById("secondOutput").innerHTML = (euro * 0.87).toFixed(2); //Pound
//         document.getElementById("thirdOutput").innerHTML = (euro * 1.19).toFixed(2); //Dollar
//     });
// });

// // Input Franken
// let selectFranken = document.getElementById("btn--franken").addEventListener("click", function(){
//     document.getElementById("containerCalculate").style.visibility = "visible";

//     document.getElementById("currencyInput").value = null;
//     document.getElementById("firstOutput").innerHTML = 0; //Euro
//     document.getElementById("secondOutput").innerHTML = 0; //Pound
//     document.getElementById("thirdOutput").innerHTML = 0; //Dollar

//     document.getElementById("currencyInputName").innerHTML = "Franken:";
//     document.getElementById("currencyOutputNameOne").innerHTML = "Euro:";
//     document.getElementById("currencyOutputNameTwo").innerHTML = "Pfund:";
//     document.getElementById("currencyOutputNameThree").innerHTML = "Dollar:";

//     document.getElementById("currencyInput").addEventListener("input", function(e){
//         document.getElementById("output").style.visibility = "visible"; //Show Output

//         let franken = e.target.value; //Calculate
//         document.getElementById("firstOutput").innerHTML = (franken / 1.1).toFixed(2); //Euro
//         document.getElementById("secondOutput").innerHTML = (franken * 0.79).toFixed(2); //Pound
//         document.getElementById("thirdOutput").innerHTML = (franken * 1.08).toFixed(2); //Dollar
//     });
// });

// // Input Pound
// let selectPound = document.getElementById("btn--pound").addEventListener("click", function(){
//     document.getElementById("containerCalculate").style.visibility = "visible";

//     document.getElementById("currencyInput").value = null;
//     document.getElementById("firstOutput").innerHTML = 0; //Euro
//     document.getElementById("secondOutput").innerHTML = 0; //Pound
//     document.getElementById("thirdOutput").innerHTML = 0; //Dollar

//     document.getElementById("currencyInputName").innerHTML = "Pfund:";
//     document.getElementById("currencyOutputNameOne").innerHTML = "Euro:";
//     document.getElementById("currencyOutputNameTwo").innerHTML = "Franken:";
//     document.getElementById("currencyOutputNameThree").innerHTML = "Dollar:";

//     document.getElementById("currencyInput").addEventListener("input", function(e){
//         document.getElementById("output").style.visibility = "visible"; //Show Output

//         let pound = e.target.value; //Calculate
//         document.getElementById("firstOutput").innerHTML = (pound / 1.15).toFixed(2); //Euro
//         document.getElementById("secondOutput").innerHTML = (pound * 1.27).toFixed(2); //Franken
//         document.getElementById("thirdOutput").innerHTML = (pound * 1.37).toFixed(2); //Dollar
//     });
// });

// // Input Dollar
// let selectDollar = document.getElementById("btn--dollar").addEventListener("click", function(){
//     document.getElementById("containerCalculate").style.visibility = "visible";

//     document.getElementById("currencyInput").value = null;
//     document.getElementById("firstOutput").innerHTML = 0; //Euro
//     document.getElementById("secondOutput").innerHTML = 0; //Pound
//     document.getElementById("thirdOutput").innerHTML = 0; //Dollar

//     document.getElementById("currencyInputName").innerHTML = "Dollar:";
//     document.getElementById("currencyOutputNameOne").innerHTML = "Euro:";
//     document.getElementById("currencyOutputNameTwo").innerHTML = "Franken:";
//     document.getElementById("currencyOutputNameThree").innerHTML = "Pfund:";

//     document.getElementById("currencyInput").addEventListener("input", function(e){
//         document.getElementById("output").style.visibility = "visible"; //Show Output

//         let dollar = e.target.value; //Calculate
//         document.getElementById("firstOutput").innerHTML = (dollar * 0.84).toFixed(2); //Euro
//         document.getElementById("secondOutput").innerHTML = (dollar * 0.92).toFixed(2); //Franken
//         document.getElementById("thirdOutput").innerHTML = (dollar * 0.73).toFixed(2); //Pound
//     });
// });

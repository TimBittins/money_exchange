'use strict';

// Hide Elements
document.getElementById("containerCalculate").style.visibility = "hidden";
document.getElementById("output").style.visibility = "hidden";

// Input Euro
let selectEuro = document.getElementById("currencyButtonEuro").addEventListener("click", function(){
    document.getElementById("containerCalculate").style.visibility = "visible";
    
    document.getElementById("currencyInput").value = null;
    document.getElementById("firstOutput").innerHTML = 0; //Euro
    document.getElementById("secondOutput").innerHTML = 0; //Pound
    document.getElementById("thirdOutput").innerHTML = 0; //Dollar

    document.getElementById("currencyInputName").innerHTML = "Euro:";
    document.getElementById("currencyOutputNameOne").innerHTML = "Franken:";
    document.getElementById("currencyOutputNameTwo").innerHTML = "Pfund:";
    document.getElementById("currencyOutputNameThree").innerHTML = "Dollar:";
    
    document.getElementById("currencyInput").addEventListener("input", function(e){
        document.getElementById("output").style.visibility = "visible"; //Show Output
        
        let euro = e.target.value; //Calculate
        document.getElementById("firstOutput").innerHTML = (euro * 1.1).toFixed(2); //Franken
        document.getElementById("secondOutput").innerHTML = (euro * 0.87).toFixed(2); //Pound
        document.getElementById("thirdOutput").innerHTML = (euro * 1.19).toFixed(2); //Dollar
    });
});



// Input Franken
let selectFranken = document.getElementById("currencyButtonFranken").addEventListener("click", function(){
    document.getElementById("containerCalculate").style.visibility = "visible";
    
    document.getElementById("currencyInput").value = null;
    document.getElementById("firstOutput").innerHTML = 0; //Euro
    document.getElementById("secondOutput").innerHTML = 0; //Pound
    document.getElementById("thirdOutput").innerHTML = 0; //Dollar

    document.getElementById("currencyInputName").innerHTML = "Franken:";
    document.getElementById("currencyOutputNameOne").innerHTML = "Euro:";
    document.getElementById("currencyOutputNameTwo").innerHTML = "Pfund:";
    document.getElementById("currencyOutputNameThree").innerHTML = "Dollar:";
    
    document.getElementById("currencyInput").addEventListener("input", function(e){
        document.getElementById("output").style.visibility = "visible"; //Show Output
        
        let franken = e.target.value; //Calculate
        document.getElementById("firstOutput").innerHTML = (franken / 1.1).toFixed(2); //Euro
        document.getElementById("secondOutput").innerHTML = (franken * 0.79).toFixed(2); //Pound
        document.getElementById("thirdOutput").innerHTML = (franken * 1.08).toFixed(2); //Dollar
    });
});

// Input Pound
let selectPound = document.getElementById("currencyButtonPound").addEventListener("click", function(){
    document.getElementById("containerCalculate").style.visibility = "visible";
    
    document.getElementById("currencyInput").value = null;
    document.getElementById("firstOutput").innerHTML = 0; //Euro
    document.getElementById("secondOutput").innerHTML = 0; //Pound
    document.getElementById("thirdOutput").innerHTML = 0; //Dollar

    document.getElementById("currencyInputName").innerHTML = "Pfund:";
    document.getElementById("currencyOutputNameOne").innerHTML = "Euro:";
    document.getElementById("currencyOutputNameTwo").innerHTML = "Franken:";
    document.getElementById("currencyOutputNameThree").innerHTML = "Dollar:";
    
    document.getElementById("currencyInput").addEventListener("input", function(e){
        document.getElementById("output").style.visibility = "visible"; //Show Output
        
        let pound = e.target.value; //Calculate
        document.getElementById("firstOutput").innerHTML = (pound / 1.15).toFixed(2); //Euro
        document.getElementById("secondOutput").innerHTML = (pound * 1.27).toFixed(2); //Franken
        document.getElementById("thirdOutput").innerHTML = (pound * 1.37).toFixed(2); //Dollar
    });
});

// Input Dollar
let selectDollar = document.getElementById("currencyButtonDollar").addEventListener("click", function(){
    document.getElementById("containerCalculate").style.visibility = "visible";
    
    document.getElementById("currencyInput").value = null;
    document.getElementById("firstOutput").innerHTML = 0; //Euro
    document.getElementById("secondOutput").innerHTML = 0; //Pound
    document.getElementById("thirdOutput").innerHTML = 0; //Dollar

    document.getElementById("currencyInputName").innerHTML = "Dollar:";
    document.getElementById("currencyOutputNameOne").innerHTML = "Euro:";
    document.getElementById("currencyOutputNameTwo").innerHTML = "Franken:";
    document.getElementById("currencyOutputNameThree").innerHTML = "Pfund:";
    
    document.getElementById("currencyInput").addEventListener("input", function(e){
        document.getElementById("output").style.visibility = "visible"; //Show Output
        
        let dollar = e.target.value; //Calculate
        document.getElementById("firstOutput").innerHTML = (dollar * 0.84).toFixed(2); //Euro
        document.getElementById("secondOutput").innerHTML = (dollar * 0.92).toFixed(2); //Franken
        document.getElementById("thirdOutput").innerHTML = (dollar * 0.73).toFixed(2); //Pound
    });
});




'use strict';
console.log("it runs");
document.getElementById("output").style.visibility = "hidden";
document.getElementById("currencyInput").addEventListener("input", function(e){
    document.getElementById("output").style.visibility = "visible";
    let euro = e.target.value;
    document.getElementById("firstOutput").innerHTML = (euro * 1.1).toFixed(2);
    document.getElementById("secondOutput").innerHTML = (euro * 0.87).toFixed(2);
    document.getElementById("thirdOutput").innerHTML = (euro * 1.19).toFixed(2);
});
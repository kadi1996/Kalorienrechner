// console.log("text");

let inputFeld = document.getElementById("inputFeld");
let height = document.getElementById("height");
let alter = document.getElementById("alter");
let gewicht = document.getElementById("gewicht");
let radioF = document.getElementById("radioF");
let radioM = document.getElementById("radioM");
let outputKcal = document.getElementById("outputKcal");
let gesamtOutputKcal = document.getElementById("gesamtOutputKcal");
let gesamtOutputKJ = document.getElementById("gesamtOutputKJ");
let outputKJ = document.getElementById("outputKJ");
let activity = document.getElementById("activity");

let myFunction = () => {
    // console.log("text");
    // let numberHeight = Number(height.value);
    // let numberAge = Number(alter.value);
    // let numberGewicht = Number(gewicht.value)
    // console.log(numberGewicht);
    // console.log(numberHeight);

    if (radioM.checked) {

        outputKcal.innerHTML = (664.7 + (13.7 * Number(gewicht.value)) + (5 * Number(height.value)) - (6.8 * Number(alter.value))).toFixed(0);
        gesamtOutputKcal.innerHTML = ((664.7 + (13.7 * Number(gewicht.value)) + (5 * Number(height.value)) - (6.8 * Number(alter.value)) * activity.value).toFixed(0));
    } else
        outputKcal.innerHTML = (655.1 + (9.6 * Number(gewicht.value)) + (1.8 * Number(height.value)) - (5.7 * Number(alter.value)).toFixed(0));
    gesamtOutputKcal.innerHTML = ((655.1 + (9.6 * Number(gewicht.value)) + (1.8 * Number(height.value)) - (5.7 * Number(alter.value)) * activity.value).toFixed(0));
}   

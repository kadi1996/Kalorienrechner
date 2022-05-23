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
    console.log(height.value);
    console.log(alter.value);
    console.log(gewicht.value);



    if (radioM.checked) {
        (664.7 + (13.7 * gewicht.value) + (5 * height.value) - (6.8 * alter.value));
    } else
        (655.1 + (9.6 * gewicht.value) + (1.8 * height.value) - (5.7 * alter.value))
}   

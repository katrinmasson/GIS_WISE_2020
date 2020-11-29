/* Emissionswerte der Kontinente in den Jahren 2008 und 2018 */
namespace Werte {

var Afrika2008 : number = 1028;
var Afrika2018 : number = 1235.5;

var Asien2008 : number = 12954.7;
var Asien2018 : number = 16274.1;

var Australien2008 : number = 1993;
var Australien2018 : number = 2100.5;

var Europa2008 : number = 4965.7;
var Europa2018 : number = 4209.3;

var NordAmerika2008: number = 6600.4;
var NordAmerika2018: number = 6035.6;

var SüdAmerika2008 : number = 1132.6;
var SüdAmerika2018 : number = 1261.5;

/* Emissionen aller Kontinete im Jahr 2018 */

var GesamtEmissionen : number = Afrika2018 + Asien2018 + Australien2018 + Europa2018 + NordAmerika2018 + SüdAmerika2018;

/* Kontinente im Verhätnis zu den anderen Kontinenten im Jahr 2018 in % */

var AfrikaProzent : number = (Afrika2018 / GesamtEmissionen) * 100;
var AsienProzent : number = (Asien2018 / GesamtEmissionen) * 100;
var AustralienProzent : number = (Australien2018 / GesamtEmissionen) * 100;
var EuropaProzent : number = (Europa2018 / GesamtEmissionen) * 100;
var NordAmerikaProzent : number = (NordAmerika2018 / GesamtEmissionen) * 100;
var SüdAmerikaProzent : number = (SüdAmerika2018 / GesamtEmissionen) * 100;

/* Veränderung der Emissionen in % zwischen 2008 und 2018 */

var AfrikaVeränderungProzent : number = ((Afrika2018 / Afrika2008) * 100) - 100;
var AsienVeränderungProzent : number = ((Asien2018 / Asien2008) * 100) - 100;
var AustralienVeränderungProzent : number = ((Australien2018 / Australien2008) * 100) - 100;
var EuropaVeränderungProzent : number = ((Europa2018 / Europa2008) * 100) - 100; 
var NordAmerikaVeränderungProzent : number = ((NordAmerika2018 / NordAmerika2008) * 100) - 100;
var SüdAmerikaVeränderungProzent : number = ((SüdAmerika2018 / SüdAmerika2008) * 100) - 100;

/* Veränderung der Emissionen in kg */

var AfrikaVeränderung : number = Afrika2018 - Afrika2008;
var AsienVeränderung : number = Asien2018 - Asien2008;
var AustralienVeränderung : number = Australien2018 - Australien2008;
var EuropaVeränderung : number = Europa2018 - Europa2008;
var NordAmerikaVeränderung : number = NordAmerika2018 - NordAmerika2008;
var SüdAmerikaVeränderung : number = SüdAmerika2018 - SüdAmerika2008;
}

/* FunktionAlle */

function myFunction (absolut:number, relativ:number, Prozent:number, Zahl:number, chart:number, Kontinent:string) {
    document.querySelector(".absolut").innerHTML = absolut.toFixed(2) + "kg CO2";
    document.querySelector(".relativ").innerHTML = relativ.toFixed(2) + "%";
    document.querySelector(".Prozent").innerHTML = Prozent.toFixed(2) + "%";
    document.querySelector(".Zahl").innerHTML = Zahl.toFixed(2);
    document.querySelector(".chart").setAttribute('style', 'height:' + (absolut / GesamtEmissionen * 100).toFixed(2) + '%');
    document.querySelector(".Kontinent").innerHTML = Kontinent;
}

/* Buttonveränderungen */

document.querySelector(".europe").addEventListener("click", function () {
    myFunction (Europa2018, EuropaProzent, EuropaVeränderungProzent, EuropaVeränderung, "Europe")
});

document.querySelector(".northamerica").addEventListener("click", function () {
    myFunction (NordAmerika2018, NordAmerikaProzent, NordAmerikaVeränderungProzent, NordAmerikaVeränderung, "Northamerica")
});

document.querySelector(".southamerica").addEventListener("click", function() {
    myFunction (SüdAmerika2018, SüdAmerikaProzent, SüdAmerikaVeränderungProzent, SüdAmerikaVeränderung, "Southamerica")
});

document.querySelector(".asia").addEventListener("click", function() {
    myFunction (Asien2018, AsienProzent, AsienVeränderungProzent, AsienVeränderung, "Asia")
});

document.querySelector(".africa").addEventListener("click", function() {
    myFunction(Afrika2018, AfrikaProzent, AfrikaVeränderungProzent, AfrikaVeränderung,"Africa")
});

document.querySelector(".australia").addEventListener("click", function() {
    myFunction(Australien2018, AustralienProzent, AustralienVeränderungProzent, AustralienVeränderung, "Australia")
});

/* Konsole */

console.log("Die Emission von Afrika ist: " + Afrika2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit" + AfrikaProzent + "%"); 
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um" + AfrikaVeränderungProzent + "% verändert"); 
console.log("2018 im Vergleich zu 2008 sind das" + AfrikaVeränderung + "kg CO2");

console.log("Die Emission von Asien ist:" + Asien2018 + "kg CO2"); 
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit" + AsienProzent + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um" + AsienVeränderungProzent + "% verändert"); 
console.log("2018 im Vergleich zu 2008 sind das" + AsienVeränderung + "kg CO2");

console.log("Die Emission von Australien ist:" + Australien2018 + "kg CO2"); 
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit" + AustralienProzent + "%"); 
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um" + AustralienVeränderungProzent + "% verändert"); 
console.log("2018 im Vergleich zu 2008 sind das" + AustralienVeränderung + "kg CO2");
    
console.log("Die Emission von Europa ist:" + Europa2018 + "kg CO2"); 
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit" + EuropaProzent + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um" +EuropaVeränderungProzent + "% verändert"); 
console.log("2018 im Vergleich zu 2008 sind das" + EuropaVeränderung + "kg CO2");

console.log("Die Emission von Nordamerika ist:" + NordAmerika2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit" + NordAmerikaProzent + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um" + NordAmerikaVeränderungProzent + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + NordAmerikaVeränderung + "kg CO2");
    
console.log("Die Emission von Südamerika ist:" + SüdAmerika2018 + "kg CO2"); 
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit" + SüdAmerikaProzent + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um" + SüdAmerikaVeränderungProzent + "% verändert"); 
console.log("2018 im Vergleich zu 2008 sind das" + SüdAmerikaVeränderung + "kg CO2");
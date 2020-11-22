/* Emissionswerte der Kontinente in den Jahren 2008 und 2018 */
var Afrika2008 = 1028;
var Afrika2018 = 1235.5;
var Asien2008 = 12954.7;
var Asien2018 = 16274.1;
var Australien2008 = 1993;
var Australien2018 = 2100.5;
var Europa2008 = 4965.7;
var Europa2018 = 4209.3;
var NordAmerika2008 = 6600.4;
var NordAmerika2018 = 6035.6;
var SüdAmerika2008 = 1132.6;
var SüdAmerika2018 = 1261.5;
/* Emissionen aller Kontinete im Jahr 2018 */
var GesamtEmissionen = Afrika2018 + Asien2018 + Australien2018 + Europa2018 + NordAmerika2018 + SüdAmerika2018;
/* Kontinente im Verhätnis zu den anderen Kontinenten im Jahr 2018 in % */
var AfrikaProzent = (Afrika2018 / GesamtEmissionen) * 100;
var AsienProzent = (Asien2018 / GesamtEmissionen) * 100;
var AustralienProzent = (Australien2018 / GesamtEmissionen) * 100;
var EuropaProzent = (Europa2018 / GesamtEmissionen) * 100;
var NordAmerikaProzent = (NordAmerika2018 / GesamtEmissionen) * 100;
var SüdAmerikaProzent = (SüdAmerika2018 / GesamtEmissionen) * 100;
/* Veränderung der Emissionen in % zwischen 2008 und 2018 */
var AfrikaVeränderungProzent = ((Afrika2018 / Afrika2008) * 100) - 100;
var AsienVeränderungProzent = ((Asien2018 / Asien2008) * 100) - 100;
var AustralienVeränderungProzent = ((Australien2018 / Australien2008) * 100) - 100;
var EuropaVeränderungProzent = ((Europa2018 / Europa2008) * 100) - 100;
var NordAmerikaVeränderungProzent = ((NordAmerika2018 / NordAmerika2008) * 100) - 100;
var SüdAmerikaVeränderungProzent = ((SüdAmerika2018 / SüdAmerika2008) * 100) - 100;
/* Veränderung der Emissionen in kg */
var AfrikaVeränderung = Afrika2018 - Afrika2008;
var AsienVeränderung = Asien2018 - Asien2008;
var AustralienVeränderung = Australien2018 - Australien2008;
var EuropaVeränderung = Europa2018 - Europa2008;
var NordAmerikaVeränderung = NordAmerika2018 - NordAmerika2008;
var SüdAmerikaVeränderung = SüdAmerika2018 - SüdAmerika2008;
/* Konsole */
console.log("Die Emission von Afrika ist:" + Afrika2018 + "kg CO2");
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
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um" + EuropaVeränderungProzent + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + EuropaVeränderung + "kg CO2");
console.log("Die Emission von Nordamerika ist:" + NordAmerika2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit" + NordAmerikaProzent + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um" + NordAmerikaVeränderungProzent + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + NordAmerikaVeränderung + "kg CO2");
console.log("Die Emission von Südamerika ist:" + SüdAmerika2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit" + SüdAmerikaProzent + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um" + SüdAmerikaVeränderungProzent + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + SüdAmerikaVeränderung + "kg CO2");
//# sourceMappingURL=TypeScript.js.map
//# sourceMappingURL=TypeScript.js.map
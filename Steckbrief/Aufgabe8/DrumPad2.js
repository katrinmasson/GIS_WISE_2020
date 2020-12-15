// Audios 
var pad1 = new Audio("./Audios/Audio1.mp3");
var pad2 = new Audio("./Audios/Audio2.mp3");
var pad3 = new Audio("./Audios/Audio3.mp3");
var pad4 = new Audio("./Audios/Audio4.mp3");
var pad5 = new Audio("./Audios/Audio5.mp3");
var pad6 = new Audio("./Audios/Audio6.mp3");
var pad7 = new Audio("./Audios/Audio7.mp3");
var pad8 = new Audio("./Audios/Audio8.mp3");
var pad9 = new Audio("./Audios/Audio9.mp3");
// Funktion
function playSample(pad) {
    pad.play();
    recordBeat(pad);
}
document.getElementById("pad1").addEventListener("click", playSample.bind(null, pad1));
document.getElementById("pad2").addEventListener("click", playSample.bind(null, pad2));
document.getElementById("pad3").addEventListener("click", playSample.bind(null, pad3));
document.getElementById("pad4").addEventListener("click", playSample.bind(null, pad4));
document.getElementById("pad5").addEventListener("click", playSample.bind(null, pad5));
document.getElementById("pad6").addEventListener("click", playSample.bind(null, pad6));
document.getElementById("pad7").addEventListener("click", playSample.bind(null, pad7));
document.getElementById("pad8").addEventListener("click", playSample.bind(null, pad8));
document.getElementById("pad9").addEventListener("click", playSample.bind(null, pad9));
//Buttons: Mülleimer, Play, Pause, Micro, info
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var microButton = document.getElementById("micro");
var muellButton = document.getElementById("muell");
var infoButton = document.getElementById("info");
var infoText = document.getElementById("bild");
// Der Anfangs-Beat
var anfangsBeat = [];
//Überprüfung von false/true
var is;
//Löschfunktion für den Mülleimer 
function deletBeat() {
    anfangsBeat.splice(0, anfangsBeat.length);
    console.log(anfangsBeat.length);
}
//Veränderung des Micro-Buttons wenn er "aktiv" ist
window.addEventListener("load", function () {
    microButton.addEventListener("click", function () {
        if (microButton.classList.contains("inactiv")) {
            this.classList.remove("inactiv");
            this.classList.add("activ");
            is = true;
        }
        else {
            microButton.classList.contains("activ");
            this.classList.remove("activ");
            this.classList.add("inactiv");
            is = false;
        }
        console.log(is);
        console.log(anfangsBeat.length);
    });
});
// Löschen beim "click" auf den Mülleimer-Button
muellButton.addEventListener("click", function () {
    deletBeat();
    console.log(anfangsBeat.length);
});
//Aufnahmefunktion
function recordBeat(pad) {
    console.log(is);
    if (is == true) {
        anfangsBeat.push(pad);
        console.log(anfangsBeat.length);
    }
}
;
//Wiedergabe/Play- und Paus-Button
var interval;
var beat = [];
var index = 0;
function playLoop() {
    interval = setInterval(function () {
        if (index < beat.length) {
            playSample(beat[index]);
            index++;
        }
        else {
            index = 0;
        }
    }, 300);
}
;
playButton.addEventListener("click", function () {
    interval = setInterval(function () {
        if (index < anfangsBeat.length) {
            playSample(anfangsBeat[index]);
            index++;
        }
        else {
            index = 0;
        }
    }, 500);
});
playButton.addEventListener("click", function () {
    this.classList.add("is-hidden");
    pauseButton.classList.remove("is-hidden");
});
pauseButton.addEventListener("click", function () {
    this.classList.add("is-hidden");
    playButton.classList.remove("is-hidden");
});
pauseButton.addEventListener("click", function () {
    clearInterval(interval);
});
//Info-Button
infoButton.addEventListener("click", function () {
    this.classList.add("activ");
    infoText.classList.remove("is-hidden");
});
//Bedienen der Pads mit der Tastatur
document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "z":
            playSample(pad1);
            recordBeat(pad1);
            break;
        case "u":
            playSample(pad2);
            recordBeat(pad2);
            break;
        case "i":
            playSample(pad3);
            recordBeat(pad3);
            break;
        case "h":
            playSample(pad4);
            recordBeat(pad4);
            break;
        case "j":
            playSample(pad5);
            recordBeat(pad5);
            break;
        case "k":
            playSample(pad6);
            recordBeat(pad6);
            break;
        case "b":
            playSample(pad7);
            recordBeat(pad7);
            break;
        case "n":
            playSample(pad8);
            recordBeat(pad8);
            break;
        case "m":
            playSample(pad9);
            recordBeat(pad9);
            break;
    }
});
//# sourceMappingURL=DrumPad2.js.map
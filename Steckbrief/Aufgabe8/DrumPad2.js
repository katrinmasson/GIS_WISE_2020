// Audios 
var sample = [];
sample[0] = new Audio("./Audios/Audio1.mp3");
sample[1] = new Audio("./Audios/Audio2.mp3");
sample[2] = new Audio("./Audios/Audio3.mp3");
sample[3] = new Audio("./Audios/Audio4.mp3");
sample[4] = new Audio("./Audios/Audio5.mp3");
sample[5] = new Audio("./Audios/Audio6.mp3");
sample[6] = new Audio("./Audios/Audio7.mp3");
sample[7] = new Audio("./Audios/Audio8.mp3");
sample[8] = new Audio("./Audios/Audio9.mp3");
// einzelne Drumpads 
document.getElementById("pad1").addEventListener("click", function () {
    playSample(0);
    recordBeat(0);
});
document.getElementById("pad2").addEventListener("click", function () {
    playSample(1);
    recordBeat(1);
});
document.getElementById("pad3").addEventListener("click", function () {
    playSample(2);
    recordBeat(2);
});
document.getElementById("pad4").addEventListener("click", function () {
    playSample(3);
    recordBeat(3);
});
document.getElementById("pad5").addEventListener("click", function () {
    playSample(4);
    recordBeat(4);
});
document.getElementById("pad6").addEventListener("click", function () {
    playSample(5);
    recordBeat(5);
});
document.getElementById("pad7").addEventListener("click", function () {
    playSample(6);
    recordBeat(6);
});
document.getElementById("pad8").addEventListener("click", function () {
    playSample(7);
    recordBeat(7);
});
document.getElementById("pad9").addEventListener("click", function () {
    playSample(8);
    recordBeat(8);
});
// Funktion zum Abspielen lassen 
function playSample(i) {
    sample[i].play();
    sample[i].recordBeat[];
}
;
//Play- und Pause-Button
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var array = [];
var padAufnahme;
//Play- und Pause-Button verschwinden lassen
playButton.addEventListener("click", function () {
    this.classList.add("is-hidden");
    pauseButton.classList.remove("is-hidden");
    padAufnahme = true;
});
pauseButton.addEventListener("click", function () {
    this.classList.add("is-hidden");
    playButton.classList.remove("is-hidden");
});
//Microfon-Button + Mülleimer-Button
var microButton = document.getElementById("micro");
var muellButton = document.getElementById("muell");
microButton.addEventListener("click", function () {
    if (microButton.classList.contains("activ")) {
        this.classList.remove("activ");
        padAufnahme = false;
    }
    else {
        microButton.classList.add("activ");
        padAufnahme = true;
    }
});
//Funktion zum aufnehmen
function recordBeat(index) {
    if (padAufnahme == true) {
        array.push(index);
    }
}
//Play und Pause
var interval;
var o = 0;
playButton.addEventListener("click", function () {
    if (padAufnahme == true) {
        interval = setInterval(function () {
            if ((o < array.length)) {
                playSample(array[o]);
                o++;
            }
            else {
                o = 0;
            }
        }, 300);
    }
    else {
        clearInterval(interval);
    }
});
//# sourceMappingURL=DrumPad2.js.map
//* Audios *//

var sample: HTMLAudioElement = [];
sample[0] = new Audio("./Audios/Audio1.mp3");
sample[1] = new Audio("./Audios/Audio2.mp3");
sample[2] = new Audio("./Audios/Audio3.mp3");
sample[3] = new Audio("./Audios/Audio4.mp3");
sample[4] = new Audio("./Audios/Audio5.mp3");
sample[5] = new Audio("./Audios/Audio6.mp3");
sample[6] = new Audio("./Audios/Audio7.mp3");
sample[7] = new Audio("./Audios/Audio8.mp3");
sample[8] = new Audio("./Audios/Audio9.mp3");

//* Audios abspielen lassen und aufnehmen lassen (Funktion allgemein und Playbutton) *//

function playSample(Sound) {
    sample[Sound].play();
};

//* einzelne Drumpads *//

document.querySelector("Pad1").addEventListener("click", function () {
        playSample(0);
})

document.querySelector("Pad2").addEventListener("click", function () {
    playSample(1);
})

document.querySelector("Pad3").addEventListener("click", function (){
    playSample(2);
})

document.querySelector("Pad4").addEventListener("click", function () {
    playSample(3);
})

document.querySelector("Pad5").addEventListener("click", function () {
    playSample(4);
})

document.querySelector("Pad6").addEventListener("click", function () {
    playSample(5);
})

document.querySelector("Pad7").addEventListener("click", function () {
    playSample(6);
})

document.querySelector("Pad8").addEventListener("click", function () {
    playSample(7);
})

document.querySelector("Pad9").addEventListener("click", function () {
    playSample(8);
})

document.querySelector("play").addEventListener("click", function () {
    playLoop(4, 5, 8);
})
;


//* Buttons *//

    var button = [];
    button[0] = document.getElementById("play");
    button[1] = document.getElementById("pause");
    button[2] = document.getElementById("micro");
    button[3] = document.getElementById("muell");
    button[4] = document.getElementById("info");

//*Play-Button verschwindet*//

document.getElementById("play").addEventListener("click", function (): void {
    document.getElementById("play").classList.add("is-hidden");
    document.getElementById("pause").classList.remove("is-hidden");
});
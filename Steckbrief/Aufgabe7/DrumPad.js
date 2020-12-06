/* Audios */
var sample = [];
sample[0] = new Audio("Audios/audio1.mp3");
sample[1] = new Audio("Audios/audio2.mp3");
sample[2] = new Audio("Audios/audio3.mp3");
sample[3] = new Audio("Audios/audio4.mp3");
sample[4] = new Audio("Audios/audio5.mp3");
sample[5] = new Audio("Audios/audio6.mp3");
sample[6] = new Audio("Audios/audio7.mp3");
sample[7] = new Audio("Audios/audio8.mp3");
sample[8] = new Audio("Audios/audio9.mp3");
/* Audios abspielen lassen (Funktion allgemein und Playbutton) */
function playSample(Sound) {
    sample[Sound].play();
}
function playLoop(audio5, audio6, audio9) {
    setInterval(function () {
        sample[audio5].play();
        sample[audio6].play();
        sample[audio9].play();
    }, 500);
}
;
/* einzelne Drumpads */
document.querySelector(".Pad1").addEventListener("click", function () {
    playSample(0);
});
document.querySelector(".Pad2").addEventListener("click", function () {
    playSample(1);
});
document.querySelector(".Pad3").addEventListener("click", function () {
    playSample(2);
});
document.querySelector(".Pad4").addEventListener("click", function () {
    playSample(3);
});
document.querySelector(".Pad5").addEventListener("click", function () {
    playSample(4);
});
document.querySelector(".Pad6").addEventListener("click", function () {
    playSample(5);
});
document.querySelector(".Pad7").addEventListener("click", function () {
    playSample(6);
});
document.querySelector(".Pad8").addEventListener("click", function () {
    playSample(7);
});
document.querySelector(".Pad9").addEventListener("click", function () {
    playSample(8);
});
document.querySelector(".play").addEventListener('click', function () {
    playLoop(4, 5, 8);
});
//# sourceMappingURL=DrumPad.js.map
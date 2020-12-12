//* Audios *//
var DrumPad;
(function (DrumPad) {
    var pad = [];
    pad[0] = new Audio("/Audios/Audio1.mp3");
    pad[1] = new Audio("/Audios/Audio2.mp3");
    pad[2] = new Audio("/Audios/Audio3.mp3");
    pad[3] = new Audio("/Audios/Audio4.mp3");
    pad[4] = new Audio("/Audios/Audio5.mp3");
    pad[5] = new Audio("/Audios/Audio6.mp3");
    pad[6] = new Audio("/Audios/Audio7.mp3");
    pad[7] = new Audio("/Audios/Audio8.mp3");
    pad[8] = new Audio("/Audios/Audio9.mp3");
    //*Funktion für die einzelnen Soundelemente*//
    function playSample(Soundelemente) {
        pad[Soundelemente].play();
    }
    //* einzelne Drumpads *//
    document.getElementById("pad1").addEventListener("click", function () {
        playSample(0);
    });
    document.getElementById("pad2").addEventListener("click", function () {
        playSample(1);
    });
    document.getElementById("pad3").addEventListener("click", function () {
        playSample(2);
    });
    document.getElementById("pad4").addEventListener("click", function () {
        playSample(3);
    });
    document.getElementById("pad5").addEventListener("click", function () {
        playSample(4);
    });
    document.getElementById("pad6").addEventListener("click", function () {
        playSample(5);
    });
    document.getElementById("pad7").addEventListener("click", function () {
        playSample(6);
    });
    document.getElementById("pad8").addEventListener("click", function () {
        playSample(7);
    });
    document.getElementById("pad9").addEventListener("click", function () {
        playSample(8);
    });
    document.getElementById("play").addEventListener("click", function () {
        playLoop(4, 5, 8);
    });
    //*Play-Button verschwindet*//
    document.getElementById("play").addEventListener("click", function () {
        document.getElementById("play").classList.add("is-hidden");
        document.getElementById("pause").classList.remove("is-hidden");
    });
});
//# sourceMappingURL=DrumPad2.js.map
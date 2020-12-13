    // Audios 

    const sample: HTMLAudioElement[] = [];
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

    document.getElementById("pad1").addEventListener("click", function (): void {
        playSample(0);
        recordBeat(0);
    });

    document.getElementById("pad2").addEventListener("click", function (): void {
        playSample(1);
        recordBeat(1);
    });

    document.getElementById("pad3").addEventListener("click", function (): void {
        playSample(2);
        recordBeat(2);
    });

    document.getElementById("pad4").addEventListener("click", function (): void {
        playSample(3);
        recordBeat(3);
    });

    document.getElementById("pad5").addEventListener("click", function (): void {
        playSample(4);
        recordBeat(4);
    });

    document.getElementById("pad6").addEventListener("click", function (): void {
        playSample(5);
        recordBeat(5);
    });

    document.getElementById("pad7").addEventListener("click", function (): void {
        playSample(6);
        recordBeat(6);
    });

    document.getElementById("pad8").addEventListener("click", function (): void {
        playSample(7);
        recordBeat(7);
    });

    document.getElementById("pad9").addEventListener("click", function (): void {
        playSample(8);
        recordBeat(8);
    });

// Funktion zum Abspielen lassen 

    function playSample(i: number): void {
        sample[i].play();
        sample[i].recordBeat[];
    };

//Play- und Pause-Button

const playButton: HTMLElement = document.getElementById("play");
const pauseButton: HTMLElement = document.getElementById("pause");
let array: number [] = [];
let padAufnahme: boolean;

//Play- und Pause-Button verschwinden lassen

playButton.addEventListener("click", function (): void {
    this.classList.add("is-hidden");
    pauseButton.classList.remove("is-hidden");
    padAufnahme =true;

})

pauseButton.addEventListener("click", function (): void {
    this.classList.add("is-hidden");
    playButton.classList.remove("is-hidden");
})


//Microfon-Button + Mülleimer-Button

const microButton: HTMLElement = document.getElementById("micro");
const muellButton: HTMLElement = document.getElementById("muell");

microButton.addEventListener("click", function(): void {
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

function recordBeat (index: number): void {
    if (padAufnahme == true) {
        array.push(index);
}}

//Play und Pause

let interval: number;
let o: number= 0;

playButton.addEventListener("click", function(): void {
        if (padAufnahme == true) {
        interval = setInterval (function():void {
       
            if ((o < array.length)) {
                playSample(array[o]);
                o++;
            }
            else {
                o = 0;
            }
        }, 300);
    }       else {
                clearInterval(interval);
    }});
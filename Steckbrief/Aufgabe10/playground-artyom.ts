declare var Artyom: any;

window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();

    function startArtyom(): void {
        artyom.fatality();

    setTimeout(
        function (): void {
            artyom.initialize({
            language: "de-De",
            continuous: true,
            listen: true,
            interimResults: true,
            debug: true
        }).then(function (): void {
            console.log("Hinzufügen");
        });
    },
    250);
}

startArtyom();
artyom.addCommands({
    indexes: ["erstelle neue Aufgabe *"],
    smart: true,
    action: function (i: any, wildcard: string): void {

        todosArray.unshift ({
            todosText: wildcard,
            todosChecked: false
        });
    
    drawListToDOM();
    console.log("Neue Aufgabe hinzugefügt: " + wildcard);
    artyom.say("Deine Aufgabe wurde erstellt");
    }
});

    document.getElementById("record").addEventListener("click", function (): void {
        artyom.say("Sage: Erstelle neue Aufgabe und nenne dann die Aufgabe");
        startArtyom();
    });
});

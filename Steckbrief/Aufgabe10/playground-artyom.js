window.addEventListener("load", function () {
    var artyom = new Artyom();
    function startArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-De",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Hinzufügen");
            });
        }, 250);
    }
    startArtyom();
    artyom.addCommands({
        indexes: ["erstelle neue Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            todosArray.unshift({
                todosText: wildcard,
                todosChecked: false
            });
            drawListToDOM();
            console.log("Neue Aufgabe hinzugefügt: " + wildcard);
            artyom.say("Deine Aufgabe wurde erstellt");
        }
    });
    document.getElementById("record").addEventListener("click", function () {
        artyom.say("Sage: Erstelle neue Aufgabe und nenne dann die Aufgabe");
        startArtyom();
    });
});
//# sourceMappingURL=playground-artyom.js.map
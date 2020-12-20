var inputs = document.getElementById("inputs");
//Inputfield für die EingabeTaste "Enter" für jede neue Aufgabe
inputs.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        createNewTask();
        inputs.value = " ";
    }
});
// er beginnt mit der Zahl 0
var counter = 0;
//Funktion für neue Tasks
function createNewTask() {
    //Div also "wrapper"
    var myDiv = document.createElement("div");
    myDiv.className = "myDiv";
    //Checkbox
    var checkBox = document.createElement("input");
    checkBox.type = "checkBox";
    checkBox.className = "checkboxField";
    //Müll
    var muellButton = document.createElement("i");
    muellButton.classList.add("far", "fa-trash-alt");
    //Label
    var myLabel = document.createElement("label");
    myLabel.className = "myClass";
    myLabel.innerHTML = inputs.value;
    //Mülleimer
    muellButton.addEventListener("click", function () {
        console.log("müll");
        removeTask(myDiv);
    });
    //alle Elemente, die in eine Task kommen 
    document.getElementById("toDoList").appendChild(myDiv);
    myDiv.appendChild(checkBox);
    myDiv.appendChild(myLabel);
    myDiv.appendChild(muellButton);
    //eine Task hinzufügen 
    counter++;
    countTask();
}
//Funktion für das Löschen von Tasks
function removeTask(wrapper) {
    wrapper.remove();
    // eine Task löschen
    counter--;
    countTask();
}
//Tasks zählen
function countTask() {
    document.getElementById("taskNumber").innerHTML = counter + " noch offene Task(s)!";
}
//# sourceMappingURL=ToDoList.js.map
const inputs: HTMLInputElement = (document.getElementById("inputs") as HTMLInputElement);


//Inputfield für die EingabeTaste "Enter" für jede neue Aufgabe
inputs.addEventListener("keypress", function (event: KeyboardEvent): void {
if (event.key == "Enter") {
    createNewTask();
    inputs.value = " ";
}    
});

// er beginnt mit der Zahl 0
let counter: number = 0;

//Funktion für neue Tasks
function createNewTask(): void {
    

    //Div also "wrapper"
    let myDiv: HTMLDivElement = document.createElement("div");
    myDiv.className = "myDiv"; 
    
    //Checkbox
    const checkBox: HTMLInputElement = document.createElement("input");
    checkBox.type ="checkBox"
    checkBox.className = "checkboxField";

    //Müll

    let muellButton: HTMLElement = document.createElement("i");
    muellButton.classList.add("far", "fa-trash-alt");
    
    //Label
    let myLabel: HTMLLabelElement = document.createElement("label");
    myLabel.className = "myClass";
    myLabel.innerHTML = inputs.value;

    //Mülleimer
    muellButton.addEventListener("click", function(): void {
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
function removeTask(wrapper: HTMLDivElement): void {
    wrapper.remove(); 

// eine Task löschen
    counter--;
    countTask();
}

//Tasks zählen
function countTask(): void {
    document.getElementById("taskNumber").innerHTML = counter + " noch offene Task(s)!";
}
let inputFieldName: HTMLFormElement;
let inputFieldEmail: HTMLFormElement;
let inputFieldPhone: HTMLFormElement;
let outputList: HTMLElement;

window.addEventListener("load", function(): void {
    document.querySelector("#addToContacts").addEventListener("click", function(): void { 
        addToContacts(); 
    });
    createContactsList();
});

inputFieldName = document.querySelector("#inputName");
inputFieldEmail = document.querySelector("#inputEmail");
inputFieldPhone = document.querySelector("#inputPhone");
outputList = document.querySelector("#outputList");

interface Contact {
    name: string;
    email: string;
    phone: number,
}
var contactsList: Contact[] = [
    {
        name: "Martin Lotz",
        email: "martin@lotz.io",
        phone: "+49 (0) 17613138882"
    },
    {
        name: "Mathias Müller",
        email: "mathias@mueller.com",
        phone: "+49 (0) 160935798735"
    }
];

function addToContacts(): void {
    var newContact: Contact = {
        name: inputFieldName.value,
        e-mail: inputFieldEmail.value,
        phone: inputFieldPhone.value
    };
    contactsList.push(newContact);

    drawContactsList(true);
}

function createContactsList(): void {
    for (let index: number = 1; index < contactsList.length; index++) {
        outputList.innerHTML += "<li>" + contactsList[index].name +
                                " | " + contactsList[index].email + 
                                " | " + contactsList[index].phone + "</li>";
    }
}
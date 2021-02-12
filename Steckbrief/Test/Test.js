var inputFieldName;
var inputFieldEmail;
var inputFieldPhone;
var outputList;
window.addEventListener("load", function () {
    document.querySelector("#addToContacts").addEventListener("click", function () {
        addToContacts();
    });
    createContactsList();
});
inputFieldName = document.querySelector("#inputName");
inputFieldEmail = document.querySelector("#inputEmail");
inputFieldPhone = document.querySelector("#inputPhone");
outputList = document.querySelector("#outputList");
var contactsList = [
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
function addToContacts() {
    var newContact = {
        name: inputFieldName.value,
        e: e
    } - mail, inputFieldEmail, value, phone;
}
;
contactsList.push(newContact);
drawContactsList(true);
function createContactsList() {
    for (var index = 1; index < contactsList.length; index++) {
        outputList.innerHTML += "<li>" + contactsList[index].name +
            " | " + contactsList[index].email +
            " | " + contactsList[index].phone + "</li>";
    }
}
//# sourceMappingURL=Test.js.map
const invalidChars = [
    "-",
    "+",
    "e",
    ",",
    "."
];


function disableInvalidKeys(inputBox) { // Deklarieren der Funktion
    inputBox.addEventListener("keydown", function (e) { // EventListener wird hinzugefügt bei Button Press -> schaut wo es hinzugefügt wird
        if (invalidChars.includes(e.key)) { // "includes(e.key))" übergibt die Keys, die gepresst werden und wenn invalidChars dabei ist, dann wird das Event gestoppt
            e.preventDefault();
        }
    });
}

if (document.getElementById("gewicht") != null) {
disableInvalidKeys(document.getElementById("gewicht"))
}

if (document.getElementById("alter") != null) {
disableInvalidKeys(document.getElementById("alter"))
}

if (document.getElementById("groesse") != null) {
disableInvalidKeys(document.getElementById("groesse"))
}

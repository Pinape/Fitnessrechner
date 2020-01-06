const invalidChars = [
    "-",
    "+",
    "e",
    ",",
    "."
];


function disableInvalidKeys(inputBox) {
    inputBox.addEventListener("keydown", function (e) {
        if (invalidChars.includes(e.key)) {
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

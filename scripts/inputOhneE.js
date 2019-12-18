var invalidChars = [
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


disableInvalidKeys(document.getElementById("gewicht"))

disableInvalidKeys(document.getElementById("alter"))

disableInvalidKeys(document.getElementById("groesse"))

var inputBox = document.getElementById("gewicht");
var invalidChars = [
    "-",
    "+",
    "e",
    ",",
    "."
];

inputBox.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});

var inputBox = document.getElementById("alter");
var invalidChars = [
    "-",
    "+",
    "e",
    ",",
    "."
];

inputBox.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});

var inputBox = document.getElementById("groesse");
var invalidChars = [
    "-",
    "+",
    "e",
    ",",
    "."
];

inputBox.addEventListener("keydown", function (e) {
    if (invalidChars.includes(e.key)) {
        e.preventDefault();
    }
});

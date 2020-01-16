const printError = require("./printError").printError
const waterformular = require("./waterformular").waterformular

window.onload = () => {
}

let sel = document.getElementById("werte")
sel.addEventListener("input", function () {

    document.getElementById("wasserbedarf").innerHTML = ""

    const weight = document.getElementById("gewicht").value
    const age = document.getElementById("alter").value

    let result = {}
    try {
        result = waterformular(weight, age)
    } catch (err) {
        printError(err)
    }


    let wasserbedarf = result.wasserbedarf

    if (wasserbedarf != undefined) {
        printError("")
        document.getElementById("wasserbedarf").innerHTML = wasserbedarf + " ml pro Tag"
    }

})
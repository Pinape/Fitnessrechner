const printError = require("./printError").printError
const harris = require("./harris").harris

window.onload = () => {

}

let sel = document.getElementById("werte")
sel.addEventListener("input", function () {

    const activity = document.getElementById("aktivitaetslevel")
    const i = activity.selectedIndex
    const pal = String(activity.options[i].value)

    document.getElementById("grundumsatz").innerHTML = ""
    document.getElementById("leistungsumsatz").innerHTML = ""

    const gender = document.querySelector('input[name="geschlecht"]:checked').value
    const weight = document.getElementById("gewicht").value
    const age = document.getElementById("alter").value
    const height = document.getElementById("groesse").value

    handleImage(activity, gender)

    let result = {}
    try {
        result = harris(weight, height, age, pal, gender)
        console.log(result)
    } catch (err) {
        printError(err)
    }


    let grundumsatz = result.grundumsatz
    let leistungsumsatz = result.leistungsumsatz
    if (grundumsatz != undefined) {
        printError("")
        document.getElementById("grundumsatz").innerHTML = grundumsatz + " kcal"
        document.getElementById("leistungsumsatz").innerHTML = leistungsumsatz + " kcal"
    }
})


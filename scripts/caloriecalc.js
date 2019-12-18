window.onload = () => {

}
// module.exports={
// let button = document.getElementById("berechnen")
// button.addEventListener("click", () => {

// let input = document.querySelectorAll(".input")
// input.addEventListener("oninput", () => {


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

    let result = {}
    try {
        result = harris(weight, height, age, pal, gender)
    } catch (err) {
        printError(err)
    }

    if (wrongInput == false) {
        printError("")
        document.getElementById("grundumsatz").innerHTML = result.grundumsatz + " kcal"
        document.getElementById("leistungsumsatz").innerHTML = result.leistungsumsatz + " kcal"
    }


})


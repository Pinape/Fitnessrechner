window.onload = () => {

}
// module.exports={
// let button = document.getElementById("berechnen")
// button.addEventListener("click", () => {

// let input = document.querySelectorAll(".input")
// input.addEventListener("oninput", () => {

let gender
let weight
let age
let height


let sel = document.getElementById("werte")
sel.addEventListener("input", function () {

    let activity = document.getElementById("aktivitaetslevel")
    let i = activity.selectedIndex
    let pal = String(activity.options[i].value)

    document.getElementById("grundumsatz").innerHTML = ""
    document.getElementById("leistungsumsatz").innerHTML = ""

    gender = document.querySelector('input[name="geschlecht"]:checked').value
    weight = document.getElementById("gewicht").value
    age = document.getElementById("alter").value
    height = document.getElementById("groesse").value

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


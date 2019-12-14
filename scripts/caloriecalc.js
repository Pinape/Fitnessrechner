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

    // printError("")
    document.getElementById("grundumsatz").innerHTML = ""
    document.getElementById("leistungsumsatz").innerHTML = ""

    gender = document.querySelector('input[name="geschlecht"]:checked').value
    weight = document.getElementById("gewicht").value
    age = document.getElementById("alter").value
    height = document.getElementById("groesse").value


    const {
        grundumsatz, leistungsumsatz
    } = harris(weight, height, age, getPal(), gender)


    if (wrongInput == false) {
        document.getElementById("grundumsatz").innerHTML = grundumsatz + " kcal"
        document.getElementById("leistungsumsatz").innerHTML = leistungsumsatz + " kcal"
    }


})


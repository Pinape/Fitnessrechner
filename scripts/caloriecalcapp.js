const harris = require('./harris').harris

const gender = document.getElementById("geschlecht")
const age = document.getElementById("alter")
const height = document.getElementById("groesse")
const weight = document.getElementById("gewicht")
const pal = document.getElementById("pal")

const grundumsatz = document.getElementById("grundumsatz")
const leistungsumsatz = document.getElementById("leistungsumsatz")

pal.addEventListener("keyup", () => {
    grundumsatz.innerHTML = harris(weight.value, height.value, age.value, pal.value, gender.value)
    leistungsumsatz.innerHTML = harris(weight.value, height.value, age.value, pal.value, gender.value)
})


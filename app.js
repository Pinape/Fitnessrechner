const waterformular = require ('./scripts/waterformular.js').waterformular

const age = document.getElementById("alter")
const weight = document.getElementById("gewicht")


weight.addEventListener("keyup", () => {
    wasserbedarf.innerHTML = waterformular(age.value, weight.value)
})


const wasserbedarf = document.getElementById("wasserbedarf").innerHTML

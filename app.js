const waterformular = require ('./scripts/waterformular').waterformular


const age = document.getElementById("alter")
const weight = document.getElementById("gewicht")

const wasserbedarf = document.getElementById("wasserbedarf")

weight.addEventListener("keyup", () => {
    wasserbedarf.innerHTML = waterformular(age.value, weight.value)
})



const waterformular = require ('./scripts/waterformular.js').waterformular

const alter = document.getElementById("alter")
const gewicht = document.getElementById("gewicht")


gewicht.addEventListener("keyup", () => {
    wasserbedarf.innerHTML = waterformular(alter.value, gewicht.value)
})


const wasserbedarf = document.getElementById("wasserbedarf").innerHTML

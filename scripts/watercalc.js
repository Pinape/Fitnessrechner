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

    //function printError(warning) {
    //    document.getElementById("fehler").innerHTML = warning;
    //}

    // if (!weight || !age) {
    //    printError("Sie haben nicht alle erforderlichen Felder ausgefüllt")
    //}
    //else if (weight < 35) {
    //    printError("Sie müssen mindestens 35kg wiegen, um den Rechner zu nutzen")
   // }
   // else if (age < 16 || age > 99) {
   //     printError("Sie müssen mindestens 16 Jahre alt sein, um den Rechner zu nutzen")
   // }
    
    /* else {

        const {
            wasserbedarf
        } = waterformular(weight, age)

        document.getElementById("wasserbedarf").innerHTML = Math.round(wasserbedarf) + " ml pro Tag"

        //evtl. Einbindung von Umrechnung in Unzen
        
    } */


    let wasserbedarf = result.wasserbedarf
    console.log(wasserbedarf)
    if (wasserbedarf != undefined) {
        printError("")        
        document.getElementById("wasserbedarf").innerHTML = wasserbedarf + " ml pro Tag"
    }

})
let wrongInput = new Boolean(false)

function checkInputWater (weight, age) {


    if (!weight || !age) {
        wrongInput = true
        throw "Sie haben nicht alle erforderlichen Felder ausgefüllt"
    }
    if (weight < 35 || weight > 999) {
        wrongInput = true
        throw "Sie müssen mindestens 35kg wiegen, um den Rechner zu nutzen"
    }
    if (age < 16 || age > 99) {
        wrongInput = true
        throw "Sie müssen zwischen 16 und 100 Jahre alt sein, um den Rechner zu nutzen"
    }

    else {
        wrongInput = false
    }

}




if (module) {
    module.exports = {
        checkInputWater
    }
}

if (window) {
    window.checkInputWater = checkInputWater
}

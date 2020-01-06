let wrongInput = new Boolean(false)

function checkInputWater (weight, age) {


    if (!weight || !age) {
        wrongInput = true
        throw "Sie haben nicht alle erforderlichen Felder ausgefüllt"
    }
    if (weight < 35 || weight > 999) {
        wrongInput = true
        throw "Bitte geben Sie ein Gewicht zwischen 35kg und 999kg ein"
    }
    if (age < 16 || age > 99) {
        wrongInput = true
        throw "Bitte geben Sie ein Alter zwischen 16 und 99 Jahren ein"
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

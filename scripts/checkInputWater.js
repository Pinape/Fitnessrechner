function checkInputWater(weight, age) {


    if (!weight || !age) {
        throw "Sie haben nicht alle erforderlichen Felder ausgefüllt"
    }
    if (weight < 35 || weight > 999) {
        throw "Bitte geben Sie ein Gewicht zwischen 35kg und 999kg ein"
    }
    if (age < 16 || age > 99) {
        throw "Bitte geben Sie ein Alter zwischen 16 und 99 Jahren ein"
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

let wrongInput = new Boolean(false)

function checkInput(weight,height,age) {


    if (!weight || !height || !age) {
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
    if (height < 140 || height > 300) {
        wrongInput = true
        throw "Bitte geben Sie eine Größe zwischen 140cm und 300cm ein"
    }

    else {
        wrongInput = false
    }

}




if (module) {
    module.exports = {
        checkInput
    }
}

if (window) {
    window.checkInput = checkInput
}

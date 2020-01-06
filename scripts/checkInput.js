let wrongInput = new Boolean(false)

function checkInput(weight,height,age) {


    if (!weight || !height || !age) {
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
    if (height < 140 || height > 300) {
        wrongInput = true
        throw "Sie müssen mindestens 140cm groß sein, um den Rechner zu nutzen"
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

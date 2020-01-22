function checkInput(weight, height, age) {

    if (!weight || !height || !age) {
        throw "Sie haben nicht alle erforderlichen Felder ausgefüllt"
    }
    if (weight < 35 || weight > 999) {
        throw "Bitte geben Sie ein Gewicht zwischen 35kg und 999kg ein"
    }
    if (age < 16 || age > 90) {
        throw "Bitte geben Sie ein Alter zwischen 16 und 99 Jahren ein"
    }
    if (height < 140 || height > 300) {
        throw "Bitte geben Sie eine Größe zwischen 140cm und 300cm ein"
    }

}

module.exports = { checkInput };


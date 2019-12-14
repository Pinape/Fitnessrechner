let wrongInput = new Boolean(false)

function checkInput() {

    try {

        if (!weight || !height || !age) {
            wrongInput = true
            throw "Sie haben nicht alle erforderlichen Felder ausgefüllt"
            // printError("Sie haben nicht alle erforderlichen Felder ausgefüllt")
        }
        if (weight < 35 || weight > 999) {
            wrongInput = true
            throw "Sie müssen mindestens 35kg wiegen, um den Rechner zu nutzen"
            // printError("Sie müssen mindestens 35kg wiegen, um den Rechner zu nutzen")
        }
        if (age < 16 || age > 99) {
            wrongInput = true
            throw "Sie müssen mindestens 16 Jahre alt sein, um den Rechner zu nutzen"
            // printError("Sie müssen mindestens 16 Jahre alt sein, um den Rechner zu nutzen")
        }
        if (height < 140 || height > 300) {
            wrongInput = true
            throw "Sie müssen mindestens 140cm groß sein, um den Rechner zu nutzen"
            // printError("Sie müssen mindestens 140cm groß sein, um den Rechner zu nutzen")
        }

        else {
            wrongInput = false
            printError("")
        }
    }
    catch (err) {
        printError(err);
    }
}


    // let wrongInput = new Boolean(false)

    // if (!weight || !height || !age) {
    //     wrongInput = true
    //     throw new printError("Sie haben nicht alle erforderlichen Felder ausgefüllt")
    //     // printError("Sie haben nicht alle erforderlichen Felder ausgefüllt")
    // }
    // else if (weight < 35) {
    //     wrongInput = true
    //     throw new printError("Sie müssen mindestens 35kg wiegen, um den Rechner zu nutzen")
    //     // printError("Sie müssen mindestens 35kg wiegen, um den Rechner zu nutzen")
    // }
    // else if (age < 16 || age > 99) {
    //     wrongInput = true
    //     throw new printError("Sie müssen mindestens 16 Jahre alt sein, um den Rechner zu nutzen")
    //     // printError("Sie müssen mindestens 16 Jahre alt sein, um den Rechner zu nutzen")
    // }
    // else if (height < 140 || height > 300) {
    //     wrongInput = true
    //     throw new printError("Sie müssen mindestens 140cm groß sein, um den Rechner zu nutzen")
    //     // printError("Sie müssen mindestens 140cm groß sein, um den Rechner zu nutzen")
    // }

    // else {
    //     wrongInput = false
    // }





if (module) {
    module.exports = {
        checkInput
    }
}

if (window) {
    window.checkInput = checkInput
}

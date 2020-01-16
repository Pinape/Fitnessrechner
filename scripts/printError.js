function printError(warning) {
    document.getElementById("fehler").innerHTML = warning;
}


if (module) {
    module.exports = {
        printError
    }
}

if (window) {
    window.printError = printError
}
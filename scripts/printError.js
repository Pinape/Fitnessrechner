function printError(warning) {
    // this.warning = warning;
    // this.name = "Error";
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
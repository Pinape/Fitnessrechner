function getPal(palString) {
    let palValues = {
        "liegend": 1.2,
        "sitzend": 1.45,
        "stehend": 1.65,
        "gehend": 1.85,
        "aktiv": 2.2
    }

    // let activity = document.getElementById("aktivitaetslevel")
    // let i = activity.selectedIndexpal
    // let palString = activity.options[i].value
    let pal = palValues[palString]
    return pal
}




if (module) {
    module.exports = {
        getPal
    }
}

if (window) {
    window.getPal = getPal
}
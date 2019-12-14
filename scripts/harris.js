function harris(weight, height, age, pal, gender) {
    let result
    let palresult

    if (gender == "male") {
        checkInput()
        result = Math.round(66.5 + (13.7 * weight) + (5 * height) - (6.8 * age))
        palresult = Math.round(result * pal)
    }
    else {
        checkInput()
        result = Math.round(655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
        palresult = Math.round(result * pal)
    }

    return {
        grundumsatz: result,
        leistungsumsatz: palresult
    }


}

if (module) {
    module.exports = {
        harris
    }
}

if (window) {
    window.harris = harris
}
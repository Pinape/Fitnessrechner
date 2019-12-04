function harris(weight, height, age, pal, gender) {
    let result
    if (gender == "male") {

        result = 66.5 + (13.7 * weight) + (5 * height) - (6.8 * age)
        palresult = result * pal
    }
    else {
        result = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
        palresult = result * pal
    }
    return {
        grundumsatz: result,
        leistungsumsatz: palresult,
    }
}

if (module){
    module.exports = {
        harris
    }
}

if (window){
    window.harris = harris
}
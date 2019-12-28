function waterformular(weight, age) {

    let result
    if (age < 64) {
        checkInput(weight, age)
        result = Math.round(weight * 35)
    }
    
    else {
        checkInput(weight, age)
        result = Math.round(weight * 30)
    }

    return {
        wasserbedarf: result
    }
}



if (module){
    module.exports = {
        waterformular
    }
}

if (window){
    window.waterformular = waterformular
}
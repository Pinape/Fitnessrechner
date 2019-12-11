function waterformular(weight, age) {

    let result
    if (age < 64) {

        result = weight * 35
    }
    
    else {
        result = weight * 30
    }

    return {
        wasserbedarf: result,
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
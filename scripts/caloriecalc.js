//window.onload = () => {

    // let weight = document.getElementById("weight")

    const weight = 85
    const size = 180
    const age = 35

    module.exports={
        harris: (weight, size, age) => {
            const formula = Math.round(66.47 + (13.7 * weight) + (5 * size) - (6.8 * age))
            return formula
        }
        }

    // const harris = (x) => {
    //     x = 30;
    //     return x;
    // };
    
    // module.exports = functions;

    //const harrisW
//}
//window.onload = () => {

    // let weight = document.getElementById("weight")

    // const valueError = new Error("invalid values")

    module.exports={
        harris: (weight, size, age) => {
            if (!weight || !size) {
                throw new Error ("valueError")
            }
            else {
            const formula = Math.round(66.47 + (13.7 * weight) + (5 * size) - (6.8 * age))
            return formula
            }
        }
        }

    // const harris = (x) => {
    //     x = 30;
    //     return x;
    // };
    
    // module.exports = functions;

    //const harrisW
//}
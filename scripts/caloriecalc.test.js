const harris = require('./caloriecalc.js').harris

describe('calculator', () => {

    // it('should print weight input', () => {
    //     expect(harris(30)).toBe(30)
    // })
    
    //Männlich
    const defaultWeight = 85
    const defaultSize = 180
    const defaultAge = 35

    const underAge = 15
    const smallSize = 140
    const bigSize = 350
    const underWeight = 35

    //Weiblich Ergebnis 1668.7
    const defaultWeightF = 60
    const defaultSizeF = 170
    const defaultAgeF = 28


    // it('should throw an error if values are invalid', () => {
    //    expect(harris(0, 0, 0)).toThrow()
   // })

    it('should print out a default value', () => {
      expect(harris(defaultWeight, defaultSize, defaultAge)).toBe(1893)
    })

    it('should print out a default value', () => {
        expect(harris(defaultWeight, defaultSize, defaultAge)).toBe(1893)
    })

    it('should calculate the value for women', () => {
        expect(harris(false, defaultWeightF, defaultSizeF, defaultAgeF)).toBe(1669)
    })
    
    //it('should throw an error if the person is under 16', () => {
     //   expect(harris(defaultWeight, defaultSize, underAge)).toThrow()
     // })

     //it('should throw an error if the person weighs less than 35kg', () => {
     //   expect(harris(underWeight, defaultSize, defaultAge)).toThrow()
     // })

   it('should throw an error if the person is smaller than 140cm', () => {
       expect(harris(defaultWeight, smallSize, defaultAge)).toThrow()
     })

     it('should throw an error if the person is taller than 300cm', () => {
      expect(harris(defaultWeight, bigSize, defaultAge)).toThrow()
    })
})

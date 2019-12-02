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
    const underWeight = 35

    //Weiblich Ergebnis 1668.7
    const defaultWeightF = 60
    const defaultSizeF = 170
    const defaultAgeF = 28

    it('should print out a default value', () => {
      expect(harris(defaultWeight, defaultSize, defaultAge)).toBe(1893)
    })

    it('should print out a default value', () => {
        expect(harris(defaultWeight, defaultSize, defaultAge)).toBe(1893)
      })


    //it('should throw an error if the person is under 16', () => {
     //   expect(harris(defaultWeight, defaultSize, underAge)).toThrow()
     // })


   // it('should throw an error if values are incorrect', () => {
    //    expect(harris(0, 0, 0)).toThrow()
   // })

   it('should throw an error if the person is smaller than 1.4m', () => {
       expect(harris(defaultWeight, smallSize, defaultAge)).toThrow()
     })

     


})

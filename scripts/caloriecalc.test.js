const harris = require('./caloriecalc.js').harris

describe('calculator', () => {

    // it('should print weight input', () => {
    //     expect(harris(30)).toBe(30)
    // })
    const defaultWeight = 19
    const defaultSize = 180
    const defaultAge = 35

    // it('should print out a default value', () => {
    //     expect(harris(defaultWeight, defaultSize, defaultAge)).toBe(1893)
    // })

    it('should throw an error if values are incorrect', () => {
        expect(harris(0, 0, 0)).toThrow()
    })
})

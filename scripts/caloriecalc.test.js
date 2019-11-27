const harris = require('./caloriecalc.js').harris

describe('calculator', () => {

    // it('should print weight input', () => {
    //     expect(harris(30)).toBe(30)
    // })

    it('should print out a default value', () => {
        expect(harris(85, 180, 35)).toBe(1893)
    })
})

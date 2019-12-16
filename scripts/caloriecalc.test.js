const harris = require('./harris.js').harris

const checkInput = require('./checkInput.js').checkInput

const printError = require('./printError.js').printError

const getpal = require('./getPal').getPal

describe('calculator', () => {

  //  Männlich gu: 1893 | lu: 2272
  const defaultWeight = 85
  const defaultSize = 180
  const defaultAge = 35
  
  const underAge = 15
  const overAge = 150
  const smallSize = 135
  const bigSize = 350
  const underWeight = 30
  const overWeight = 1500
  const pal = "liegend"
  const male = "male"

  //  Weiblich gu: 1406 | lu: 1687
  const defaultWeightF = 60
  const defaultSizeF = 170
  const defaultAgeF = 28
  const female = "female"




  it('should print out a default value', () => {
    expect(harris(defaultWeight, defaultSize, defaultAge, pal, male)).toEqual({ grundumsatz: 1893, leistungsumsatz: 2272 })
  })

  it('should calculate the value for women', () => {
    expect(harris(defaultWeightF, defaultSizeF, defaultAgeF, pal, female)).toEqual({ grundumsatz: 1406, leistungsumsatz: 1687 })
  })


  
  it('should throw an error if not all values are entered', () => {
    expect(() => {
      harris(defaultWeight,"","",pal,male)
    }).toThrow()  
  })



  it('should throw an error if the person is under 16', () => {
    expect(() => { harris(defaultWeight, defaultSize, underAge, pal, male) }).toThrow()
  })

  it('should throw an error if the person is over 99', () => {
    expect(() => { harris(defaultWeight, defaultSize, overAge, pal, male) }).toThrow()
  })



  it('should throw an error if the person weighs less than 35kg', () => {
    expect(() => { harris(underWeight, defaultSize, defaultAge, pal, male) }).toThrow()
  })

  it('should throw an error if the person weighs more than 999kg', () => {
    expect(() => { harris(overWeight, defaultSize, defaultAge, pal, male) }).toThrow()
  })



  it('should throw an error if the person is smaller than 140cm', () => {
    expect(() => { harris(defaultWeight, smallSize, defaultAge, pal, male) }).toThrow()
  })

  it('should throw an error if the person is taller than 300cm', () => {
    expect(() => { harris(defaultWeight, bigSize, defaultAge, pal, male) }).toThrow()
  })
})

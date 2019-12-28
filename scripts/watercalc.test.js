const waterformular = require('./waterformular.js').waterformular

// const checkInput = require('./checkInput.js').checkInput

const printError = require('./printError.js').printError


describe('calculator', () => {

  const defaultWeight = 85
  const defaultAge = 35
  
  const underAge = 15
  const overAge = 150
  const underWeight = 30
  const overWeight = 1500  


  it('should print out a default value', () => {
    expect(waterformular(defaultWeight, defaultAge,)).toEqual({ wasserbedarf: 2975})
  })

  
  it('should throw an error if not all values are entered', () => {
    expect(() => {
      waterformular(defaultAge,"","")
    }).toThrow()  
  })



  it('should throw an error if the person is under 16', () => {
    expect(() => { waterformular(underAge, defaultWeight) }).toThrow()
  })

  it('should throw an error if the person is over 99', () => {
    expect(() => { waterformular(overAge, defaultWeight) }).toThrow()
  })



  it('should throw an error if the person weighs less than 35kg', () => {
    expect(() => { waterformular(defaultAge, underWeight) }).toThrow()
  })

  it('should throw an error if the person weighs more than 999kg', () => {
    expect(() => { waterformular(defaultAge, overWeight) }).toThrow()
  })


})

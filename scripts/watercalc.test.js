const waterformular = require('./waterformular.js').waterformular

const checkInputWater = require('./checkInputWater.js')

const printError = require('./printError.js').printError


describe('calculator', () => {

  const defaultWeight = 85
  const defaultAge = 35

  const defaultAgeYoung = 30
  const defaultAgeOld = 70

  const underAge = 15
  const overAge = 150
  const underWeight = 30
  const overWeight = 1500  


  it('should print out a default value', () => {
    expect(waterformular(defaultWeight, defaultAge)).toEqual(2975 )
  })

  
  it('should throw an error if not all values are entered', () => {
    expect(() => {
      waterformular(defaultWeight,"")
    }).toThrow()  
  })


  it('should throw an error if the person is under 16', () => {
    expect(() => { waterformular(defaultWeight, underAge) }).toThrow()
  })

  it('should throw an error if the person is over 99', () => {
    expect(() => { waterformular(defaultWeight, overAge) }).toThrow()
  })



  it('should throw an error if the person weighs less than 35kg', () => {
    expect(() => { waterformular(underWeight, defaultAge) }).toThrow()
  })

  it('should throw an error if the person weighs more than 999kg', () => {
    expect(() => { waterformular(overWeight,defaultAge) }).toThrow()
  })

})

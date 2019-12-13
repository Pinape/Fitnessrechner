const harris = require('./harris.js').harris

describe('calculator', () => {

  // it('should print weight input', () => {
  //     expect(harris(30)).toBe(30)
  // })

  //Männlich gu: 1893 lu: 2272
  const defaultWeight = 85
  const defaultSize = 180
  const defaultAge = 35

  const underAge = 15
  const smallSize = 135
  const bigSize = 350
  const underWeight = 35
  const pal = "liegend"
  const male = "male"

  //Weiblich gu: 1406 lu: 1687
  const defaultWeightF = 60
  const defaultSizeF = 170
  const defaultAgeF = 28
  const female = "female"




  it('should print out a default value', () => {
    expect(harris(defaultWeight, defaultSize, defaultAge, 1.2, male)).toStrictEqual({grundumsatz: 1893, leistungsumsatz: 2272})
  })

  it('should calculate the value for women', () => {
    expect(harris(defaultWeightF, defaultSizeF, defaultAgeF, 1.2, female)).toStrictEqual({grundumsatz: 1406, leistungsumsatz: 1687})
  })

  // it('should throw an error if values are invalid', () => {
  //   expect(() => {
  //     harris("","","",1.2,male)
  //   }).toThrow()  
  // })

  // it('should throw an error if the person is under 16', () => {
  //   expect(() => {
  //     Add("1,1,\n")
  //   }).toThrow()
  // })


  //it('should throw an error if the person is under 16', () => {
  //   expect(harris(defaultWeight, defaultSize, underAge)).toThrow()
  // })

  //it('should throw an error if the person weighs less than 35kg', () => {
  //   expect(harris(underWeight, defaultSize, defaultAge)).toThrow()
  // })

  it('should throw an error if the person is smaller than 140cm', () => {
    expect(() => {harris(defaultWeight, smallSize, defaultAge, 1,2, male)}).toThrow()
  })

  it('should throw an error if the person is taller than 300cm', () => {
    expect(harris(defaultWeight, bigSize, defaultAge)).toThrow()
  })
})

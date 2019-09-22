import { dateStringValidator } from './validators'

describe('dateValidator', () => {
  it('valid date should be valid', () => {
    const value = '2019-01-01'
    const param = { name: 'date-field' }
    const validation = dateStringValidator(value, param)

    expect(validation.valid).toBe(true)
  })

  it('null date should not be valid', () => {
    const value = null
    const param = { name: 'date-field' }
    const validation = dateStringValidator(value, param)

    expect(validation.valid).toBe(false)
    expect(validation.message).toMatch(/date-field/)
  })

  it('object as date should not be valid', () => {
    const value = { something: 'notdate' }
    const param = { name: 'date-field' }
    const validation = dateStringValidator(value, param)

    expect(validation.valid).toBe(false)
    expect(validation.message).toMatch(/date-field/)
  })

  it('invalid date should not be valid', () => {
    const value = '2019-01-'
    const param = { name: 'date-field' }
    const validation = dateStringValidator(value, param)

    expect(validation.valid).toBe(false)
    expect(validation.message).toMatch(/date-field/)
  })

  it('another invalid date should not be valid', () => {
    const value = 'asd'
    const param = { name: 'date-field' }
    const validation = dateStringValidator(value, param)

    expect(validation.valid).toBe(false)
    expect(validation.message).toMatch(/date-field/)
  })
})

export const dateStringValidator = (value, param) => ({
  valid: !!value && isString(value) && /\d{4}-\d{2}-\d{2}/.test(value) && !isNaN(new Date(value)),
  message: param.name + ' must be in "YYYY-MM-DD" format'
})

const isString = (value) => {
  return !!value && (typeof (value) === 'string' || value instanceof String)
}

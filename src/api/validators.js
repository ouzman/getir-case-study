export const dateValidator = (value, param) => ({
  valid: !!value && value instanceof Date && !isNaN(value),
  message: param.name + ' must be in "YYYY-MM-DD" format'
})

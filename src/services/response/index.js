export const success = (res) => (entity) => {
  response(res, 200, 0, 'Success', entity)
}

const response = (res, status, code, msg, otherFields) => {
  const jsonOutput = { code, msg, ...otherFields }

  res.status(status).json(jsonOutput)
}

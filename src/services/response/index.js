export const success = (res) => (entity) => {
  response(res, 200, 0, 'Success', entity)
}

const response = (res, status, code, msg, otherFields) => {
  const jsonOutput = { code, msg, ...otherFields }

  res.status(status).json(jsonOutput)
}

export const clientErrorHandler = () => {
  return function (err, req, res, next) {
    if (req.bodymen && req.bodymen.error) {
      response(res, 400, 1, req.bodymen.error.message, { error: req.bodymen.error })
    } else {
      next(err)
    }
  }
}

export const serverErrorHandler = () => {
  return function (err, req, res, _next) {
    response(res, 500, 2, err.msg || err.message || 'Unknown error occurred', { error: err })
  }
}

export const notFoundHandler = () => {
  return function (req, res) {
    response(res, 404, 3, 'Not found')
  }
}

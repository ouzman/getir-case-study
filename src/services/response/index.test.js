import * as response from '.'

let res

beforeEach(() => {
  res = {
    status: jest.fn(() => res),
    json: jest.fn(() => res),
    end: jest.fn(() => res)
  }
})

describe('success', () => {
  it('responds with passed object, success code, success msg and status 200', () => {
    expect(response.success(res)({ prop: 'value' })).toBeUndefined()
    expect(res.status).toBeCalledWith(200)
    expect(res.json).toBeCalledWith({ code: 0, msg: 'Success', prop: 'value' })
  })
})

describe('clientErrorHandler', () => {
  it('responds with status 400 when error occurred on bodymen', () => {
    const clientErrorHandler = response.clientErrorHandler()
    const error = { message: 'bodymen error message' }
    expect(clientErrorHandler({}, { bodymen: { error } }, res)).toBeUndefined()
    expect(res.status).toBeCalledWith(400)
    expect(res.json).toBeCalledWith({ code: 1, msg: 'bodymen error message', error })
  })
})

describe('serverErrorHandler', () => {
  it('responds with status 500 and error msg when error occurred on something', () => {
    const serverErrorHandler = response.serverErrorHandler()
    const error = { msg: 'some msg', details: 'some details' }
    expect(serverErrorHandler(error, {}, res)).toBeUndefined()
    expect(res.status).toBeCalledWith(500)
    expect(res.json).toBeCalledWith({ code: 2, msg: 'some msg', error })
  })

  it('responds with status 500 and error message when error occurred on something', () => {
    const serverErrorHandler = response.serverErrorHandler()
    const error = { message: 'some message', details: 'some details' }
    expect(serverErrorHandler(error, {}, res)).toBeUndefined()
    expect(res.status).toBeCalledWith(500)
    expect(res.json).toBeCalledWith({ code: 2, msg: 'some message', error })
  })

  it('responds with status 500 and default message when error occurred on something and there is no error message', () => {
    const serverErrorHandler = response.serverErrorHandler()
    const error = { details: 'some details' }
    expect(serverErrorHandler(error, {}, res)).toBeUndefined()
    expect(res.status).toBeCalledWith(500)
    expect(res.json).toBeCalledWith({ code: 2, msg: 'Unknown error occurred', error })
  })
})

describe('notFoundHandler', () => {
  it('responds with status 404 when unknown route', () => {
    const notFoundHandler = response.notFoundHandler()
    expect(notFoundHandler({}, res)).toBeUndefined()
    expect(res.status).toBeCalledWith(404)
    expect(res.json).toBeCalledWith({ code: 3, msg: 'Not found' })
  })
})

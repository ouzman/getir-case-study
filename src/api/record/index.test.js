import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Record } from '.'

const app = () => express(apiRoot, routes)

// eslint-disable-next-line no-unused-vars
let record

beforeEach(async () => {
  record = await Record.create({})
})

test('GET /records 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

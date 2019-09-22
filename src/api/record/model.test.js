import { Record } from '.'

let record

beforeEach(async () => {
  record = await Record.create({ key: 'test', createdAt: 'test', counts: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = record.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(record.id)
    expect(view.key).toBe(record.key)
    expect(view.createdAt).toBe(record.createdAt)
    expect(view.counts).toBe(record.counts)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = record.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(record.id)
    expect(view.key).toBe(record.key)
    expect(view.createdAt).toBe(record.createdAt)
    expect(view.counts).toBe(record.counts)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})

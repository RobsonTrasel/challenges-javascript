const doRequest = require('./challenge')
const api = require('../../src/api')

jest.mock('../../src/index', () => {
  return {
    setError: jest.fn(() => null),
    setLoading: jest.fn(() => null),
    setData: jest.fn(() => null),
  }
})

const mockStateHandlers = require('../../src/index')

describe('Challenge 3', () => {
  test(`It should execute api call and set all states correctly`, async () => {
    await doRequest()
    expect(mockStateHandlers.setLoading).toBeCalledWith(true)
    expect(mockStateHandlers.setError).toBeCalledWith(false)

    const response = await api()

    expect(mockStateHandlers.setData).toBeCalledWith(response)

    expect(mockStateHandlers.setLoading).lastCalledWith(false)
    expect(mockStateHandlers.setError).not.toBeCalledWith(true)
  })
})
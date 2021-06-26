import { beforeEach, describe, expect, it } from '@jest/globals'
import { getAllBeers, getBeerById } from '../utils/fetchData'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, name: 'Buzz' }]),
  })
)

beforeEach(() => fetch.mockClear())

describe('fetches beer from API', () => {
  it('gets all beers', async () => {
    const beers = await getAllBeers()
    expect(beers).toEqual([{ id: 1, name: 'Buzz' }])
    expect(fetch).toHaveBeenCalledTimes(1)
  })

  it('gets beers by id', async () => {
    await getBeerById(99)
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(fetch).toHaveBeenCalledWith('https://api.punkapi.com/v2/beers/99')
  })
})

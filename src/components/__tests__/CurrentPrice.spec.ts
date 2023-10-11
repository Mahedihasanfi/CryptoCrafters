import { describe, it, expect } from 'vitest'
import { fetchData } from '../../coinService';
describe('RecentCryptoNews', () => {
  it('fetches data successfully', async () => {
    try {
      const PriceData = await fetchData()
      expect(PriceData.length).toBeGreaterThan(0)
    } catch (error) {
        console.error(error)
        expect(error).toBeNull()
    }
  })
})

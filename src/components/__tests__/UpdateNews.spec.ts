import { describe, it, expect } from 'vitest'
import { fetchNewsData } from '../../newsService'

describe('RecentCryptoNews', () => {
  it('fetches data successfully', async () => {
    try {
      const newsData = await fetchNewsData()
      expect(newsData.length).toBeGreaterThan(0)
    } catch (error) {
        console.error(error)
        expect(error).toBeNull()
    }
  })
})

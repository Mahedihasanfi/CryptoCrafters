import axios, { type AxiosRequestConfig } from 'axios'

export async function fetchData() {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': '0bb0383171msh94fa055bc0891e2p12ff54jsn84752240de13',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  }
  try {
    const response = await axios.request(options)
    return response.data.data.coins || []
  } catch (err) {
    console.error(err)
    throw new Error('An error occurred while fetching news data.')
  }
}

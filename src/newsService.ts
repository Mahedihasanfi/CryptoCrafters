import axios, { type AxiosRequestConfig } from 'axios'
import moment from 'moment'
import type { NewsArticle } from './types'

const newsQuery: AxiosRequestConfig = {
  method: 'GET',
  url: 'https://bing-news-search1.p.rapidapi.com/news/search',
  params: {
    q: 'Cryptocurrency', // Query for Cryptocurrency news
    freshness: 'Day',
    textFormat: 'Raw',
    safeSearch: 'Off',
    count: '9'
  },
  headers: {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '0bb0383171msh94fa055bc0891e2p12ff54jsn84752240de13',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }
}

export async function fetchNewsData(): Promise<NewsArticle[]> {
  try {
    const response = await axios.request(newsQuery)
    return response.data?.value || []
  } catch (err) {
    console.error(err)
    throw new Error('An error occurred while fetching news data.')
  }
}

export function formatDate(date: string): string {
  return moment(date).startOf('day').fromNow()
}

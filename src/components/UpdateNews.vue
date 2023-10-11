<template>
  <div class="crypto-news-container">
    <h2 v-if="error" class="error-text">{{ error }}</h2>
    <h1 class="section-title">Recent Crypto News</h1>
    <div class="news-container">
      <div v-for="(article, index) in news" :key="index" class="news-card">
        <a :href="article.url" target="_blank" class="news-link">
          <div class="news-content">
            <h3 class="news-title">{{ article.name }}</h3>
            <div class="news-details">
              <p class="news-provider">Reference: {{ article.provider[0]?.name }}</p>
              <p class="news-date">Published: {{ formatDate(article.datePublished) }}</p>
            </div>
          </div>
          <div class="news-thumbnail">
            <img
              :src="article.image?.thumbnail?.contentUrl"
              alt="newsThumbnail"
              class="thumbnail-image"
            />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { fetchNewsData, formatDate } from '../newsService'
import type { NewsArticle } from '../types'

const news = ref<NewsArticle[]>([])
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    news.value = await fetchNewsData()
  } catch (err) {
    error.value = String(err)
  }
})
</script>

<style scoped>
.crypto-news-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.section-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.news-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.news-card {
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  color: #333;
  transition: transform 0.2s ease;
  height: 300px;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.news-thumbnail {
  overflow: hidden;
  width: 100%;
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.news-content {
  padding: 20px;
}

.news-title {
  font-size: 14px;
  margin-bottom: 10px;
}

.news-details {
  font-size: 14px;
}

.news-provider {
  font-style: italic;
}

.error-text {
  color: #ff0000;
  margin-top: 1rem;
  text-align: center;
}
</style>

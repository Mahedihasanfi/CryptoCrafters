<template>
  <div class="section">
    <h2 class="section-title">Top Crypto Currency</h2>
    <div class="error-message" v-if="error">{{ error }}</div>
    <div class="coin-selector">
      <label class="textGreen" for="coin-select"
        >Select a coin to view the current situation:
      </label>
      <select id="coin-select" v-model="selectedCoinUUID" class="custom-select">
        <option value="">Coin selection dropdown</option>
        <option v-for="coin in firstFourtyFiveCoins" :key="coin.uuid" :value="coin.uuid">
          {{ coin.name }}
        </option>
      </select>
    </div>
    <div class="selected-coin" v-if="selectedCoinData">
      <div class="coin-card selected-coin-card">
        <div class="coin-header">
          <h2 class="coin-name">Crypto: {{ selectedCoinData.name }}</h2>
          <p class="coin-info">Rank: {{ selectedCoinData.rank }}</p>
        </div>
        <div class="coin-details">
          <p class="coin-uuid">UUID: {{ selectedCoinData.uuid }}</p>
          <p class="coin-price">Crypto Price: ${{ Number(selectedCoinData.price).toFixed(2) }}</p>
          <p>Market Capitalization: ${{ selectedCoinData.marketCap.toLocaleString() }}</p>
          <p>Change: {{ selectedCoinData.change }}%</p>
        </div>
      </div>
    </div>
    <div class="first-five-coins-container" v-if="!selectedCoinUUID">
      <div v-for="(coin, index) in firstFiveCoins" :key="index" class="coin-card small-coin-card">
        <h2 class="coin-name">{{ coin.name }}</h2>
        <p class="coin-info">Rank: {{ coin.rank }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fetchData } from '../coinService'
import { ref, onMounted } from 'vue'
let responseData = ref<any>({
  data: {
    coins: []
  }
})
const firstFourtyFiveCoins = ref<any[]>([])
const firstFiveCoins = ref<any[]>([])
const selectedCoinUUID = ref<string>('')
const selectedCoinData = ref<any>(null)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    responseData.value = await fetchData()
    console.log(responseData.value)
    firstFourtyFiveCoins.value = (responseData.value || []).slice(0, 45)
    firstFiveCoins.value = (responseData.value || []).slice(0, 5)
  } catch (err) {
    error.value = String(err)
  }
})

import { watch } from 'vue'
watch(selectedCoinUUID, (newValue) => {
  if (newValue) {
    selectedCoinData.value = firstFourtyFiveCoins.value.find((coin) => coin.uuid === newValue)
  } else {
    selectedCoinData.value = null
  }
})
</script>

<style scoped>
.section {
  font-family: 'Helvetica Neue', sans-serif;
  color: #333;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
}

.custom-select {
  background-color: #37474f;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  color: #ffffff;
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;
}

.custom-select option[value=''] {
  color: #999;
}

.custom-select:hover {
  background-color: #1e2327;
}

.small-coin-card {
  margin-top: 20px;
  background: linear-gradient(to bottom, #00bcd4, #0097a7);
  border: none;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.2s,
    background-color 0.2s;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
}

.small-coin-card:last-child {
  margin-right: 0;
}

.small-coin-card:hover {
  transform: translateY(-5px);
  background-color: #00796b;
}
</style>

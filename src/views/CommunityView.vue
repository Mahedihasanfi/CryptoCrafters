<template>
  <div class="login-container">
    <h3 class="login-title">Community User</h3>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="formData.username" required />
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="formData.password" required />
      </div>
      <button type="submit" class="login-button">Login</button>
      <div class="login-links">
        <a href="#" class="signup-link">Sign-Up</a>
        <span class="divider">|</span>
        <a href="#" class="forgot-password-link">Forgot Password?</a>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  username: '',
  password: '',
});

const login = () => {
  // Mylogin logic here
};
</script>

<style scoped>
.login-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  margin: 10px 0;
  width: 100%;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
  color: #555;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
}

.login-button {
  margin-top: 20px;
  padding: 12px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #0056b3;
}

.login-links {
  margin-top: 12px;
}

.signup-link,
.forgot-password-link {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  font-size: 14px;
  transition: color 0.3s ease;
}

.signup-link:hover,
.forgot-password-link:hover {
  color: #0056b3;
}

.divider {
  margin: 0 8px;
  color: #ccc;
}
</style>

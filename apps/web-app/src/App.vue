<template>
  <div id="app">
    <LoginPage 
      v-if="!isLoggedIn"
      @login="handleLogin"
    />
    <DashboardPage 
      v-else
      :user-name="currentUser"
      @logout="handleLogout"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { LoginPage } from '@frobnitz/login'
import { DashboardPage } from '@frobnitz/dashboard'

const isLoggedIn = ref(false)
const currentUser = ref('')

const handleLogin = (credentials: { email: string; password: string }) => {
  // Simulate login logic
  console.log('Login attempt:', credentials)
  
  // In a real app, you would validate credentials with a server
  if (credentials.email && credentials.password) {
    isLoggedIn.value = true
    currentUser.value = credentials.email.split('@')[0]
  }
}

const handleLogout = () => {
  isLoggedIn.value = false
  currentUser.value = ''
}
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
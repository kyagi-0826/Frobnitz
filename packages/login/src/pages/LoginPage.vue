<template>
  <div class="login-page">
    <div class="login-form">
      <h1 class="login-title">ログイン</h1>
      
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <BaseInput
            v-model="email"
            type="email"
            label="メールアドレス"
            placeholder="example@email.com"
            :error-message="emailError"
            required
          />
        </div>
        
        <div class="form-group">
          <BaseInput
            v-model="password"
            type="password"
            label="パスワード"
            placeholder="パスワードを入力してください"
            :error-message="passwordError"
            required
          />
        </div>
        
        <div class="form-actions">
          <BaseButton
            type="submit"
            variant="primary"
            size="large"
            :disabled="!isFormValid || isLoading"
            class="login-button"
          >
            {{ isLoading ? 'ログイン中...' : 'ログイン' }}
          </BaseButton>
        </div>
      </form>
      
      <div class="login-footer">
        <a href="#" class="forgot-password">パスワードを忘れた方はこちら</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { BaseButton, BaseInput } from '@frobnitz/controls'
import { isValidEmail, isRequired } from '@frobnitz/common'

interface Emits {
  login: [credentials: { email: string; password: string }]
}

const emit = defineEmits<Emits>()

const email = ref('')
const password = ref('')
const isLoading = ref(false)

const emailError = computed(() => {
  if (!isRequired(email.value)) {
    return 'メールアドレスは必須です'
  }
  if (!isValidEmail(email.value)) {
    return '有効なメールアドレスを入力してください'
  }
  return ''
})

const passwordError = computed(() => {
  if (!isRequired(password.value)) {
    return 'パスワードは必須です'
  }
  return ''
})

const isFormValid = computed(() => {
  return !emailError.value && !passwordError.value && email.value && password.value
})

const handleSubmit = async () => {
  if (!isFormValid.value) return
  
  isLoading.value = true
  try {
    emit('login', {
      email: email.value,
      password: password.value
    })
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.login-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-size: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-actions {
  margin-top: 1.5rem;
}

.login-button {
  width: 100%;
}

.login-footer {
  text-align: center;
  margin-top: 1rem;
}

.forgot-password {
  color: #007bff;
  text-decoration: none;
  font-size: 0.9rem;
}

.forgot-password:hover {
  text-decoration: underline;
}
</style>
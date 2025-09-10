<template>
  <div class="fb-input">
    <label v-if="label" :for="inputId" class="fb-input__label">
      {{ label }}
    </label>
    <input
      :id="inputId"
      v-model="inputValue"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      class="fb-input__field"
      @blur="handleBlur"
      @focus="handleFocus"
    />
    <span v-if="errorMessage" class="fb-input__error">
      {{ errorMessage }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Emits {
  'update:modelValue': [value: string]
  'blur': [event: FocusEvent]
  'focus': [event: FocusEvent]
}

const props = withDefaults(defineProps<{
  modelValue?: string
  type?: 'text' | 'email' | 'password' | 'number'
  label?: string
  placeholder?: string
  disabled?: boolean
  required?: boolean
  errorMessage?: string
}>(), {
  modelValue: '',
  type: 'text',
  disabled: false,
  required: false
})

const emit = defineEmits<Emits>()

const inputId = ref(`fb-input-${Math.random().toString(36).substr(2, 9)}`)

const inputValue = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
})

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}
</script>

<style scoped>
.fb-input {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.fb-input__label {
  font-weight: 500;
  color: #333;
  font-size: 14px;
}

.fb-input__field {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.2s ease;
}

.fb-input__field:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}

.fb-input__field:disabled {
  background-color: #f8f9fa;
  color: #6c757d;
  cursor: not-allowed;
}

.fb-input__error {
  color: #dc3545;
  font-size: 12px;
}
</style>
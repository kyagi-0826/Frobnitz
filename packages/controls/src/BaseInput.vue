<template>
  <input
    :id="inputId"
    v-model="model"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    class="px-3 py-2 border border-gray-300 rounded-md text-sm transition-colors focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800"
    @blur="handleBlur"
    @focus="handleFocus"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

withDefaults(defineProps<{
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

const emit = defineEmits<{
  'blur': [event: FocusEvent]
  'focus': [event: FocusEvent]
}>()

const inputId = ref(`input-${Math.random().toString(36).slice(2, 11)}`)
const model = defineModel<string>()

const handleBlur = (event: FocusEvent) => {
  emit('blur', event)
}

const handleFocus = (event: FocusEvent) => {
  emit('focus', event)
}
</script>
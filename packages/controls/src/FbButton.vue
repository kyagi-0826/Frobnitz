<template>
  <button 
    :class="buttonClasses" 
    :disabled="disabled"
    @click="handleClick"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  label?: string
}

interface Emits {
  click: [event: MouseEvent]
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  label: ''
})

const emit = defineEmits<Emits>()

const buttonClasses = computed(() => [
  'fb-button',
  `fb-button--${props.variant}`,
  `fb-button--${props.size}`,
  {
    'fb-button--disabled': props.disabled
  }
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
.fb-button {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.fb-button--primary {
  background-color: #007bff;
  color: white;
}

.fb-button--primary:hover:not(.fb-button--disabled) {
  background-color: #0056b3;
}

.fb-button--secondary {
  background-color: #6c757d;
  color: white;
}

.fb-button--secondary:hover:not(.fb-button--disabled) {
  background-color: #545b62;
}

.fb-button--danger {
  background-color: #dc3545;
  color: white;
}

.fb-button--danger:hover:not(.fb-button--disabled) {
  background-color: #c82333;
}

.fb-button--small {
  padding: 4px 8px;
  font-size: 12px;
}

.fb-button--medium {
  padding: 8px 16px;
  font-size: 14px;
}

.fb-button--large {
  padding: 12px 24px;
  font-size: 16px;
}

.fb-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
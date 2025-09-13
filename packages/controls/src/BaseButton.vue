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

interface Emits {
  click: [event: MouseEvent]
}

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  label?: string
}>(), {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  label: ''
})

const emit = defineEmits<Emits>()

const buttonClasses = computed(() => [
  'base-button',
  `base-button--${props.variant}`,
  `base-button--${props.size}`,
  {
    'base-button--disabled': props.disabled
  }
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<style scoped>
.base-button {
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.base-button--primary {
  background-color: #007bff;
  color: white;
}

.base-button--primary:hover:not(.base-button--disabled) {
  background-color: #0056b3;
}

.base-button--secondary {
  background-color: #6c757d;
  color: white;
}

.base-button--secondary:hover:not(.base-button--disabled) {
  background-color: #545b62;
}

.base-button--danger {
  background-color: #dc3545;
  color: white;
}

.base-button--danger:hover:not(.base-button--disabled) {
  background-color: #c82333;
}

.base-button--small {
  padding: 4px 8px;
  font-size: 12px;
}

.base-button--medium {
  padding: 8px 16px;
  font-size: 14px;
}

.base-button--large {
  padding: 12px 24px;
  font-size: 16px;
}

.base-button--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
<template>
  <textarea class="base-textarea" v-model="model" :placeholder="placeholder"></textarea>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

withDefaults(defineProps<{
  placeholder?: string
}>(), {
  placeholder: ''
})

const model = defineModel('modelValue', {
  type: String,
  required: true
})
</script>

<style scoped>
.base-textarea {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
}
</style>
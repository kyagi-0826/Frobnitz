<template>
  <article class="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden">
  <div class="px-6 py-4 border-b border-gray-100 dark:border-gray-700">
      <slot name="header"></slot>
    </div>
  <div class="px-6 py-4 text-gray-900 dark:text-gray-100">
      <slot></slot>
    </div>
  <div class="px-6 py-3 border-t border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <slot name="footer"></slot>
    </div>
  </article>
</template>
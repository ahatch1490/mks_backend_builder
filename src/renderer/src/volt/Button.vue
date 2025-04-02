<template>
  <button
    :class="[
      'px-4 py-2 rounded-md font-medium transition-colors',
      'bg-primary-500 text-white hover:bg-primary-600',
      'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      className
    ]"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label?: string
  disabled?: boolean
  className?: string
}>()
</script> 
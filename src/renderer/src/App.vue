<script setup lang="ts">
import SearchComponent from './components/SearchComponent.vue'
</script>

<template>
  <div class="app-container">
    <main class="main-content">
      <SearchComponent />
    </main>
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f5f5f5;
}

.main-content {
  flex: 1;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}
</style>

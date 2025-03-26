<template>
  <div class="search-container">
    <div class="search-input-container">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search projects..."
        class="search-input"
        @input="handleSearch"
      />
    </div>
    
    <SearchResults :results="searchResults" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import projectData from '../data/data.json'
import SearchResults from './SearchResults.vue'

const searchQuery = ref('')
const searchResults = ref([])

const handleSearch = () => {
  if (!searchQuery.value.trim()) {
    searchResults.value = []
    return
  }

  const query = searchQuery.value.toLowerCase()
  searchResults.value = projectData.projectDetails.filter(project => 
    project.title.toLowerCase().includes(query) ||
    project.description.toLowerCase().includes(query)
  )
}
</script>

<style scoped>
.search-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.search-input-container {
  margin-bottom: 20px;
}

.search-input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 2px solid #ddd;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  border-color: #4CAF50;
}
</style> 
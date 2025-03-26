<template>
  <div v-if="results.length > 0" class="search-results">
    <div v-for="result in results" :key="result.id" class="result-item">
      <h3>{{ result.title }}</h3>
      <p>{{ result.description }}</p>
      <div class="tags">
        <span v-for="tag in result.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  results: Array<{
    id: string;
    title: string;
    description: string;
    tags: string[];
  }>;
}>();
</script>

<style scoped>
.search-results {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.result-item {
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.result-item h3 {
  margin: 0 0 10px 0;
  color: #333;
}

.result-item p {
  margin: 0 0 15px 0;
  color: #666;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  padding: 4px 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  font-size: 14px;
  color: #666;
}
</style> 
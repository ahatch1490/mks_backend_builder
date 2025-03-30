<template>
  <div v-if="results.length > 0" class="search-results">
    <div v-for="result in results" :key="result.id" class="result-item" @click="handleClick(result)">
      <h3>{{ result.title }}</h3>
      <p>{{ result.description }}</p>
      <div class="tags">
        <span v-for="tag in result.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
  </div>

  <DetailView 
    v-if="selectedProject"
    :project="selectedProject"
    v-model:visible="showDetailView"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DetailView from './DetailView.vue'

const props = defineProps<{
  results: Array<{
    id: string;
    title: string;
    description: string;
    tags: string[];
    difficulty: number;
    dimensions: string;
    startDate: string;
    endDate: string;
    materials: string[];
    projectProgress: {
      status: string;
      progression: number;
    };
    imageUrls: string[];
  }>;
}>();

const selectedProject = ref(null);
const showDetailView = ref(false);

const handleClick = (project: any) => {
  selectedProject.value = project;
  showDetailView.value = true;
};
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
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.result-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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